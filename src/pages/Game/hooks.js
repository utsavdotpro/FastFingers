import { useEffect, useRef, useState } from "react";
import {
  dictionaryEasy,
  dictionaryHard,
  dictionaryMedium,
} from "../../utils/configs";
import { getRandomItem } from "../../utils/methods";

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

export { useDictionary };
