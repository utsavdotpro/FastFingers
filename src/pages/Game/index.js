import React, { useEffect, useState } from "react";
import CardContainer from "../../containers/CardContainer";
import GridContainer from "../../containers/GirdContainer";

import Score from "./components/Score";
import LeftContainer from "./containers/LeftContainer";
import RightContainer from "./containers/RightContainer";
import { useParams } from "react-router-dom";
import { DIFFICULTIES } from "../../utils/configs";
import { useScore } from "./components/Score/hooks";
import PlayContainer from "./containers/PlayContainer";

export default function Game() {
  const { difficulty: difficultyKey, player } = useParams();

  const [difficulty, setDifficulty] = useState(DIFFICULTIES[difficultyKey]);

  const [levelFactor, setLevelFactor] = useState(0);

  const [startScore, pauseScore, stopScore, getScore] = useScore(true);

  const handleGameStart = () => {};

  const handleGamePause = () => {};

  const handleGameEnd = () => {};

  return (
    <GridContainer
      Left={<LeftContainer player={player} />}
      Right={<RightContainer difficulty={difficulty} />}
    >
      <CardContainer>
        <Score score={getScore()} />

        <PlayContainer difficulty={difficulty} levelFactor={levelFactor} />
      </CardContainer>
    </GridContainer>
  );
}
