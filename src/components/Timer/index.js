import { Range } from "rc-slider";
import React from "react";
import Text from "../Text";

const COLOR = {
  track: "#f3b713",
  rail: "#2a0b7d",
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
      <Text color="muted" align="center" className="mt-2" bold>
        00 : 00 : 00
      </Text>
    </div>
  );
}

export default Timer;
