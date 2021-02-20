import { Range } from "rc-slider";
import React from "react";

const COLOR = {
  track: "#f3b713",
  rail: "#efefef",
};

function Timer() {
  return (
    <div>
      <Range
        min={0}
        max={2000}
        value={[300, 1700]}
        trackStyle={[{ backgroundColor: COLOR.track }]}
        handleStyle={[{ display: "none" }, { display: "none" }]}
        railStyle={{ backgroundColor: COLOR.rail }}
      />
    </div>
  );
}

export default Timer;
