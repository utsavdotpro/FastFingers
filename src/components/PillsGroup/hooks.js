import { useState } from "react";

function usePill(initialIndex = 0) {
  const [index, setIndex] = useState(initialIndex);

  return [index, setIndex];
}

export { usePill };
