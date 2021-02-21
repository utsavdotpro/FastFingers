import React from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { DIFFICULTIES } from "../../utils/configs";

const COLOR = {
  mark: "#efefef",
  handle: "#FA6425",
  track: "#FA6425",
  rail: "#f3b713",
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

function DSlider({ vertical = false }) {
  return (
    <Slider
      min={0}
      max={Object.keys(DIFFICULTIES).length - 1}
      defaultValue={0}
      marks={{ ...getMarks() }}
      vertical={vertical}
      trackStyle={{ backgroundColor: COLOR.track }}
      handleStyle={{ backgroundColor: COLOR.handle }}
      railStyle={{ backgroundColor: COLOR.rail }}
    />
  );
}

export default DSlider;
