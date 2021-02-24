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

function useTimer(defaultStarted = true) {
  const [started, setStarted] = useState(defaultStarted);
  const [tick, setTick] = useState(0);

  const timer = useRef(null);

  const clearTimer = () => clearInterval(timer.current);

  useEffect(() => {
    if (started) timer.current = setInterval(onTick, 10);
    else clearTimer();

    return clearTimer;
  }, [started]);

  const onTick = () => setTick((tick) => tick + 10);

  const start = () => setStarted(true);

  const pause = () => setStarted(false);

  const restart = () => {
    stop();
    start();
  };

  const stop = () => {
    pause();
    setTick(0);
  };

  return { tick, start, restart, pause, stop, onTick, clearTimer };
}

export { useDictionary, useTimer };
