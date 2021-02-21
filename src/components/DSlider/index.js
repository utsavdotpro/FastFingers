import React from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { DIFFICULTIES } from "../../utils/configs";
import { useDSlider } from "./hooks";

const COLOR = {
  mark: "#efefef",
  handle: "#FA6425",
  track: "#FA6425",
  rail: "#f3b713",
};

const getDifficultyForMark = (mark) => {
  const keys = Object.keys(DIFFICULTIES);

  // ! invalid mark
  if (mark >= keys.length) return {};

  return DIFFICULTIES[keys[mark]];
};

const getMarks = () => {
  const mark = {};
  let index = 0;

  for (const key in DIFFICULTIES)
    mark[index++] = {
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
  value = 0,
  onChange = () => {},
  vertical = false,
  included = true,
}) {
  return (
    <Slider
      min={0}
      max={Object.keys(DIFFICULTIES).length - 1}
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
export { useDSlider, getDifficultyForMark };
