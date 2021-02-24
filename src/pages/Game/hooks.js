import { useEffect, useReducer, useRef, useState } from "react";
import {
  dictionaryEasy,
  dictionaryHard,
  dictionaryMedium,
} from "../../utils/configs";
import { getRandomItem } from "../../utils/methods";

// - Dictionary - //

function useDictionary(defaultDifficulty) {
  const [difficulty, setDifficulty] = useState(defaultDifficulty);
  const dictionary = useRef([]);

  const setDictionary = () => {
    switch (difficulty.key) {
      case "easy":
        dictionary.current = dictionaryEasy;
        break;
      case "medium":
        dictionary.current = dictionaryMedium;
        break;
      case "hard":
        dictionary.current = dictionaryHard;
        break;
      default:
    }
  };

  useEffect(setDictionary, [difficulty]);

  const getWord = () => getRandomItem(dictionary.current);

  return { getWord, setDifficulty };
}

// - Timer - //

const timerReducer = (state, { started, tick }) => {
  return { ...state, started, tick };
};

function useTimer(defaultStarted = true) {
  const [{ started, tick }, dispatch] = useReducer(timerReducer, {
    started: defaultStarted,
    tick: 0,
  });

  const timer = useRef(null);

  const clearTimer = () => clearInterval(timer.current);

  useEffect(() => {
    if (started)
      timer.current = setInterval(
        () => dispatch({ started, tick: tick + 10 }),
        10
      );
    else clearTimer();

    return clearTimer;
  }, [started, tick]);

  const start = () => dispatch({ started: true, tick });

  const pause = () => dispatch({ started: false, tick });

  const stop = () => dispatch({ started: false, tick: 0 });

  return [tick, start, pause, stop];
}

export { useDictionary, useTimer };
