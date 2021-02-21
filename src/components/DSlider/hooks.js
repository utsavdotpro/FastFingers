import { useState } from "react";

function useDSlider(defaultMark = {}) {
  const [mark, setMark] = useState(defaultMark);

  const handleChange = (value) => setMark(value);

  return [mark, handleChange];
}

export { useDSlider };
