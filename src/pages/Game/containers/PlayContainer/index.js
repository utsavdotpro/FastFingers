import React, { useEffect, useReducer, useState } from "react";
import Input from "../../../../components/Input";
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
  onWordCompleteListener = null,
  onWordFailedListener = null,
}) {
  const [{ word }, dispatch] = useReducer(reducer, {
    word: "",
  });

  const [text, setText] = useState("");

  const handleTextChange = ({ target: { value } }) => {
    // * can't use backspace
    if (value.length < text.length) return;

    // * can't enter incorrect character
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

    if (onWordCompleteListener) onWordCompleteListener();
  };

  const onWordFailed = () => {
    if (onWordFailedListener) onWordFailedListener();
  };

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
        <Timer time={3000} onTimerEndListener={onWordFailed} />
      </div>
    </>
  );
}

export default PlayContainer;
