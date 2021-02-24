import { useState } from "react";

function useDifficultyMark(defaultMark = 1) {
  const [mark, setMark] = useState(defaultMark);

  const handleChange = (value) => setMark(value);

  return [mark, handleChange];
}

export { useDifficultyMark };
