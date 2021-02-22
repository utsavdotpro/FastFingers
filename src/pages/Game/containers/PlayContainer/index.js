import React, { useEffect, useState } from "react";
import Input, { useInput } from "../../../../components/Input";
import Timer from "../../../../components/Timer";
import Word from "../../../../components/Word";
import { useDictionary } from "../../hooks";

function PlayContainer({ difficulty, levelFactor }) {
  const [word, setWord] = useState("");

  const [text, handleTextChange] = useInput("");

  const { getWord, setDifficulty } = useDictionary(difficulty);

  useEffect(() => setWord(getWord()), [levelFactor]);

  return (
    <>
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
    </>
  );
}

export default PlayContainer;
