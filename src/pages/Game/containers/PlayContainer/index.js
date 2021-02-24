import React, { useEffect, useReducer, useState } from "react";
import Input from "../../../../components/Input";
import Timer from "../../../../components/Timer";
import Word from "../../../../components/Word";
import { useDictionary } from "../../hooks";

import { getTimeForWord } from "./../../../../utils/methods";

const ACTIONS = {
  UPDATE_WORD: "UPDATE_WORD",
  UPDATE_TIME: "UPDATE_TIME",
  UPDATE_DIFFICULTY: "UPDATE_DIFFICULTY",
};

const reducer = (state, { type, data = "" }) => {
  switch (type) {
    case ACTIONS.UPDATE_WORD:
      return { ...state, word: data };

    case ACTIONS.UPDATE_TIME:
      return { ...state, time: data };

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
  const [{ word, time }, dispatch] = useReducer(reducer, {
    word: "",
    time: 0,
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

  useEffect(() => setDifficulty(difficulty), [difficulty]);

  const processLoadWord = () => {
    const tempWord = getWord();

    dispatch({ type: ACTIONS.UPDATE_WORD, data: tempWord });
    dispatch({
      type: ACTIONS.UPDATE_TIME,
      data:
        getTimeForWord(tempWord.length, difficulty.factor + levelFactor) * 1000,
    });
  };

  useEffect(processLoadWord, [levelFactor]);

  const onWordComplete = () => {
    setText("");
    processLoadWord();

    if (onWordCompleteListener) onWordCompleteListener();
  };

  const onWordFailed = () => {
    if (onWordFailedListener) onWordFailedListener();
  };

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

        <Timer
          time={time}
          levelFactor={levelFactor}
          onTimerEndListener={onWordFailed}
        />
      </div>
    </>
  );
}

export default PlayContainer;
