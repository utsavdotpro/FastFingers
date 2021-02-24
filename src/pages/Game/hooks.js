import { useEffect, useRef, useState } from "react";
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

function useTimer(started = true) {
  const [tick, setTick] = useState(0);

  const timer = useRef(null);

  const clearTimer = () => clearInterval(timer.current);

  useEffect(() => {
    if (started) start();
    return clearTimer;
  }, [started]);

  const start = () => {
    timer.current = setInterval(() => setTick((tick) => tick + 10), 10);
  };

  const pause = () => clearTimer();

  const restart = () => {
    stop();
    start();
  };

  const stop = () => {
    setTick(0);
    clearTimer();
  };

  return { tick, start, restart, pause, stop };
}

export { useDictionary, useTimer };
