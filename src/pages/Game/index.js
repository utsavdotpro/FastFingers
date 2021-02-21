import React, { useEffect, useState } from "react";
import CardContainer from "../../containers/CardContainer";
import Input, { useInput } from "../../components/Input";
import Timer from "../../components/Timer";
import Word from "../../components/Word";
import GridContainer from "../../containers/GirdContainer";

import Score from "./components/Score";
import LeftContainer from "./containers/LeftContainer";
import RightContainer from "./containers/RightContainer";
import { useParams } from "react-router-dom";
import { DIFFICULTIES } from "../../utils/configs";
import { useDictionary } from "./hooks";
import { useScore } from "./components/Score/hooks";

export default function Game() {
  const { difficulty: difficultyKey, player } = useParams();

  const [text, handleTextChange] = useInput("");

  const { getWord, difficulty, setDifficulty } = useDictionary(
    DIFFICULTIES[difficultyKey]
  );

  const [levelFactor, setLevelFactor] = useState(0);

  const [word, setWord] = useState("");

  const [startScore, pauseScore, stopScore, getScore] = useScore(true);

  useEffect(() => setWord(getWord()), [levelFactor]);

  return (
    <GridContainer
      Left={<LeftContainer player={player} />}
      Right={<RightContainer difficulty={difficulty} />}
    >
      <CardContainer>
        <Score score={getScore()} />

        <Word>{word}</Word>

        <br />
        <br />

        <div className="md:w-3/5 w-full">
          <Input
            placeholder="Type here!"
            value={text}
            onChange={handleTextChange}
          />
          <br />
          <br />
          <Timer time={3000} />
        </div>
      </CardContainer>
    </GridContainer>
  );
}
