import React, { useEffect, useState } from "react";
import CardContainer from "../../containers/CardContainer";
import GridContainer from "../../containers/GirdContainer";

import Score from "./components/Score";
import LeftContainer from "./containers/LeftContainer";
import RightContainer from "./containers/RightContainer";
import { useParams } from "react-router-dom";
import { DIFFICULTIES } from "../../utils/configs";
import PlayContainer from "./containers/PlayContainer";

const UNIT_LEVEL_FACTOR = 0.01;

export default function Game() {
  const { difficulty: difficultyKey, player } = useParams();

  const [difficulty, setDifficulty] = useState(DIFFICULTIES[difficultyKey]);

  const [levelFactor, setLevelFactor] = useState(0);

  const [scoreStarted, setScoreStarted] = useState(true);

  const handleWordComplete = () => {
    setLevelFactor(levelFactor + UNIT_LEVEL_FACTOR);
  };

  const handleWordFailure = () => onGameEnd();

  const onGamePause = () => {};

  const onGameEnd = () => {
    setScoreStarted(false);
  };

  console.log("game rendered: ", levelFactor);

  return (
    <GridContainer
      Left={<LeftContainer player={player} />}
      Right={
        <RightContainer difficulty={difficulty} levelFactor={levelFactor} />
      }
    >
      <CardContainer>
        <Score started={scoreStarted} />

        <PlayContainer
          difficulty={difficulty}
          levelFactor={levelFactor}
          onWordCompleteListener={handleWordComplete}
          onWordFailedListener={handleWordFailure}
        />
      </CardContainer>
    </GridContainer>
  );
}
