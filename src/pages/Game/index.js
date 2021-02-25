import React, { useEffect, useRef, useState } from "react";
import CardContainer from "../../containers/CardContainer";
import GridContainer from "../../containers/GirdContainer";

import Score from "./components/Score";
import ProfileContainer from "./containers/ProfileContainer";
import LevelContainer from "./containers/LevelContainer";
import { useHistory, useParams } from "react-router-dom";
import { DIFFICULTIES, UNIT_LEVEL_FACTOR } from "../../utils/configs";
import { getDifficultyBasedOnLevelFactor } from "../../utils/methods";
import PlayContainer from "./containers/PlayContainer";
import OverContainer from "./containers/OverContainer";
import API from "../../utils/apis";

export default function Game({ authToken }) {
  const history = useHistory();

  const { difficulty: difficultyKey } = useParams();

  const [difficulty, setDifficulty] = useState(DIFFICULTIES[difficultyKey]);

  const [player, setPlayer] = useState("Loading");

  const [scores, setScores] = useState([]);

  useEffect(() => {
    API.players
      .profile(authToken)
      .then(({ data }) => {
        console.log(data);
        setPlayer(data.name);
      })
      .catch(() => {
        history.push(`/`);
      });
  }, [authToken]);

  const game = useRef({
    score: 0,
    start_difficulty: difficulty.key,
    end_difficulty: difficulty.key,
  });

  const [levelFactor, setLevelFactor] = useState(0);

  const [scoreStarted, setScoreStarted] = useState(true);

  const updateLevelFactor = () => {
    setLevelFactor(levelFactor + UNIT_LEVEL_FACTOR);
  };

  useEffect(() => {
    const newDifficulty = getDifficultyBasedOnLevelFactor(
      difficulty,
      levelFactor
    );

    if (newDifficulty.key !== difficulty.key) {
      game.current.end_difficulty = newDifficulty.key;

      setDifficulty(newDifficulty);
    }
  }, [levelFactor]);

  useEffect(() => setLevelFactor(0), [difficulty]);

  const handleWordComplete = updateLevelFactor;

  const handleWordFailure = () => onGameEnd();

  const handleGameRestart = () => {
    setLevelFactor(0);
    setScoreStarted(true);
  };

  const handleScoreStop = (score) => {
    saveScoreToData(score);

    scores.push(score);

    setScores(scores);
  };

  const saveScoreToData = (score) => {
    API.gameHistory
      .insert(
        {
          score,
          start_level: game.current.start_difficulty,
          end_level: game.current.end_difficulty,
        },
        authToken
      )
      .then(() => {})
      .catch(() => {});
  };

  const onGameEnd = () => {
    setScoreStarted(false);
  };

  return (
    <GridContainer
      Left={<ProfileContainer player={player} scores={scores} />}
      Right={
        <LevelContainer difficulty={difficulty} levelFactor={levelFactor} />
      }
    >
      <CardContainer>
        <Score started={scoreStarted} OnScoreStopListener={handleScoreStop} />

        {scoreStarted ? (
          <PlayContainer
            difficulty={difficulty}
            levelFactor={levelFactor}
            onWordCompleteListener={handleWordComplete}
            onWordFailedListener={handleWordFailure}
          />
        ) : (
          <OverContainer onGameRestart={handleGameRestart} />
        )}
      </CardContainer>
    </GridContainer>
  );
}
