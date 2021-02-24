import React, { useEffect, useReducer, useState } from "react";
import Input, { useInput } from "../../../../components/Input";
import Timer from "../../../../components/Timer";
import Word from "../../../../components/Word";
import { useDictionary } from "../../hooks";

const ACTIONS = {
  UPDATE_WORD: "UPDATE_WORD",
  UPDATE_DIFFICULTY: "UPDATE_DIFFICULTY",
};

const reducer = (state, { type, data = "" }) => {
  switch (type) {
    case ACTIONS.UPDATE_WORD:
      return { ...state, word: data };

    default:
      return state;
  }
};

function PlayContainer({
  difficulty,
  levelFactor,
  handleOnWordComplete = null,
}) {
  const [{ word }, dispatch] = useReducer(reducer, {
    word: "",
  });

  const [text, setText] = useState("");

  const handleTextChange = ({ target: { value } }) => {
    // if (value.length < word.length) return;

    if (word[value.length - 1] === value[value.length - 1]) setText(value);

    if (value.length === word.length) onWordComplete();
  };

  const { getWord, setDifficulty } = useDictionary(difficulty);

  useEffect(() => dispatch({ type: ACTIONS.UPDATE_WORD, data: getWord() }), [
    levelFactor,
  ]);

  const onWordComplete = () => {
    setText("");
    dispatch({ type: ACTIONS.UPDATE_WORD, data: getWord() });

    if (handleOnWordComplete) handleOnWordComplete();
  };

  const onWordFailed = () => {};

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
