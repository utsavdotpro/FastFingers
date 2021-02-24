import React, { useEffect, useReducer, useState } from "react";
import Input, { useInput } from "../../../../components/Input";
import Timer from "../../../../components/Timer";
import Word from "../../../../components/Word";
import { useDictionary } from "../../hooks";
import { usePlayInput } from "./hooks";

const UNIT_LEVEL_FACTOR = 0.01;

const ACTIONS = {
  UPDATE_WORD: "UPDATE_WORD",
  UPDATE_LEVEL_FACTOR: "UPDATE_LEVEL_FACTOR",
  UPDATE_DIFFICULTY: "UPDATE_DIFFICULTY",
};

const reducer = (state, { type, data = "" }) => {
  switch (type) {
    case ACTIONS.UPDATE_WORD:
      return { ...state, word: data };
    case ACTIONS.UPDATE_LEVEL_FACTOR:
      return { ...state, levelFactor: data };

    default:
      return state;
  }
};

function PlayContainer({ difficulty }) {
  const [{ word, levelFactor }, dispatch] = useReducer(reducer, {
    word: "",
    levelFactor: 0,
  });

  const [text, setText] = useState("");

  const handleTextChange = ({ target: { value } }) => {
    // if (value.length < word.length) return;

    if (word[value.length - 1] === value[value.length - 1]) setText(value);

    if (value.length === word.length) handleWordComplete();
  };

  const { getWord, setDifficulty } = useDictionary(difficulty);

  // const [word, setWord] = useState("");

  useEffect(() => dispatch({ type: ACTIONS.UPDATE_WORD, data: getWord() }), [
    levelFactor,
  ]);

  // const [text, handleTextChange, setWordToPlayInput] = usePlayInput(word);

  // useEffect(() => setWordToPlayInput(word), [word]);

  const handleWordComplete = () => {
    setText("");
    dispatch({ type: ACTIONS.UPDATE_WORD, data: getWord() });
    dispatch({
      type: ACTIONS.UPDATE_LEVEL_FACTOR,
      data: levelFactor + UNIT_LEVEL_FACTOR,
    });
  };

  const handleWordFailed = () => {};

  console.log("rendering...: ", levelFactor);

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
