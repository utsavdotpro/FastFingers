import React, { useEffect, useState } from "react";
import CardContainer from "../../containers/CardContainer";
import GridContainer from "../../containers/GirdContainer";

import Score from "./components/Score";
import ProfileContainer from "./containers/ProfileContainer";
import LevelContainer from "./containers/LevelContainer";
import { useParams } from "react-router-dom";
import { DIFFICULTIES, UNIT_LEVEL_FACTOR } from "../../utils/configs";
import { getDifficultyBasedOnLevelFactor } from "../../utils/methods";
import PlayContainer from "./containers/PlayContainer";
import OverContainer from "./containers/OverContainer";

export default function Game() {
  const { difficulty: difficultyKey, player } = useParams();

  const [difficulty, setDifficulty] = useState(DIFFICULTIES[difficultyKey]);

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

    if (newDifficulty.key !== difficulty.key) setDifficulty(newDifficulty);
  }, [levelFactor]);

  useEffect(() => setLevelFactor(0), [difficulty]);

  const handleWordComplete = updateLevelFactor;

  const handleWordFailure = () => onGameEnd();

  const handleGameRestart = () => {
    setLevelFactor(0);
    setScoreStarted(true);
  };

  const onGameEnd = () => {
    setScoreStarted(false);
  };

  return (
    <GridContainer
      Left={<ProfileContainer player={player} />}
      Right={
        <LevelContainer difficulty={difficulty} levelFactor={levelFactor} />
      }
    >
      <CardContainer>
        <Score started={scoreStarted} />

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
