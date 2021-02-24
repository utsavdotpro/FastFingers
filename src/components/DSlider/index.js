import React from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { DIFFICULTIES } from "../../utils/configs";
import { useDifficultyMark } from "./hooks";

const COLOR = {
  mark: "#efefef",
  handle: "#FA6425",
  track: "#FA6425",
  rail: "#f3b713",
};

const getDifficultyForMark = (mark) => {
  for (const key in DIFFICULTIES)
    if (DIFFICULTIES[key].factor === mark) return DIFFICULTIES[key];

  return {};
};

const getMark = (difficulty) => {
  return Object.keys(DIFFICULTIES).indexOf(difficulty.key);
};

const getMarks = () => {
  const mark = {};

  for (const key in DIFFICULTIES)
    mark[DIFFICULTIES[key].factor] = {
      style: {
        color: COLOR.mark,
        textTransform: "uppercase",
        userSelect: "none",
      },
      label: DIFFICULTIES[key].label,
    };

  return mark;
};

function DSlider({
  value = 1,
  onChange = () => {},
  vertical = false,
  included = true,
}) {
  return (
    <Slider
      min={1}
      max={DIFFICULTIES.hard.factor}
      value={value}
      onChange={onChange}
      marks={{ ...getMarks() }}
      vertical={vertical}
      included={included}
      step={included ? null : 0.02}
      trackStyle={{ backgroundColor: COLOR.track }}
      handleStyle={{ backgroundColor: COLOR.handle }}
      railStyle={{ backgroundColor: COLOR.rail }}
    />
  );
}

export default DSlider;
export { useDifficultyMark, getDifficultyForMark, getMark };
