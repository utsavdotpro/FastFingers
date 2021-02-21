import React, { useEffect, useRef, useState } from "react";
import CardContainer from "../../containers/CardContainer";
import Input, { useInput } from "../../components/Input";
import Text from "../../components/Text";
import Timer from "../../components/Timer";
import Word from "../../components/Word";
import GridContainer from "../../containers/GirdContainer";

import Score from "./containers/Score";
import LeftContainer from "./containers/LeftContainer";
import RightContainer from "./containers/RightContainer";
import Snackbar from "../../components/Snackbar";
import { useParams } from "react-router-dom";
import {
  dictionaryEasy,
  dictionaryHard,
  dictionaryMedium,
  DIFFICULTIES,
} from "../../utils/configs";
import { getRandomItem } from "../../utils/methods";
import { useDictionary } from "./hooks";

export default function Game() {
  const { difficulty: difficultyKey, player } = useParams();
  const [text, handleTextChange] = useInput("");

  const { getWord, difficulty, setDifficulty } = useDictionary(
    DIFFICULTIES[difficultyKey]
  );

  const [levelFactor, setLevelFactor] = useState(0);

  const [word, setWord] = useState("");

  useEffect(() => setWord(getWord()), [levelFactor]);

  return (
    <GridContainer
      Left={<LeftContainer player={player} />}
      Right={<RightContainer difficulty={difficulty} />}
    >
      <CardContainer>
        <Score>00 : 00</Score>

        <Word>{word}</Word>

        <br />

        <Text size="xl" color="muted" bold="true" align="center">
          NEXT
        </Text>

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

        <Snackbar isShown>
          Use <b className="text-yellow-400">Left</b>{" "}
          <b className="text-green-400">Index</b> Finger
        </Snackbar>
      </CardContainer>
    </GridContainer>
  );
}
