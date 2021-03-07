import DSlider from "./DSlider";
import { useDifficultyMark } from "./hooks";

import { DIFFICULTIES } from "../../utils/configs";

const getDifficultyForMark = (mark) => {
  for (const key in DIFFICULTIES)
    if (DIFFICULTIES[key].factor === mark) return DIFFICULTIES[key];

  return {};
};

export default DSlider;

export { useDifficultyMark, getDifficultyForMark };
