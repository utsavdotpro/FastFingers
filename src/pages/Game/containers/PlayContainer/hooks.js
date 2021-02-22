import { useState } from "react";

function usePlayInput(initialWord) {
  const [word, setWord] = useState(initialWord);
  const [value, setValue] = useState("");

  const handleChange = ({ target: { value: inputValue } }) => {
    if (inputValue.length < value.length) return;

    if (word[inputValue.length - 1] === inputValue[inputValue.length - 1])
      setValue(inputValue);
  };

  return [value, handleChange, setWord];
}

export { usePlayInput };
