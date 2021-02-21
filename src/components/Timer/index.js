import { Range } from "rc-slider";
import React, { useRef, useState, useEffect } from "react";
import { getReadableScore } from "../../utils/methods";
import Text from "../Text";

const COLOR = {
  track: "#f3b713",
  rail: "#2a0b7d",
};

function Timer({ time }) {
  const [tick, setTick] = useState(0);

  const timer = useRef(null);

  useEffect(() => {
    timer.current = setInterval(() => setTick((tick) => tick + 10), 10);
    return clearTimer;
  }, []);

  useEffect(() => {
    if (tick >= time) clearTimer();
  }, [tick, time]);

  const clearTimer = () => clearInterval(timer.current);

  return (
    <div>
      <Range
        min={0}
        max={time}
        value={[tick / 2, time - tick / 2]}
        trackStyle={[{ backgroundColor: COLOR.track }]}
        handleStyle={[{ display: "none" }, { display: "none" }]}
        railStyle={{ backgroundColor: COLOR.rail }}
      />
      <Text color="muted" align="center" className="mt-2" bold>
        {getReadableScore(time - tick)}
      </Text>
    </div>
  );
}

export default Timer;
