import { useState } from "react";

function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  const handleInputChange = (e) => setValue(e.target.value);

  return [value, handleInputChange];
}

export { useInput };
