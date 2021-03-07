import { Range } from "rc-slider";
import React, { useEffect } from "react";
import { useTimer } from "../../pages/Game/hooks";
import { getReadableScore } from "../../utils/methods";
import Text from "../Text";

const COLOR = {
  track: "#f3b713",
  rail: "#2a0b7d",
};

export default function Timer({
  time,
  levelFactor,
  onTimerEndListener = null,
}) {
  const { tick, restart, pause } = useTimer(false);

  useEffect(() => {
    if (time !== 0 && tick >= time) onTimerEnd();
  }, [tick]);

  useEffect(restart, [levelFactor]);

  const onTimerEnd = () => {
    pause();

    if (onTimerEndListener) onTimerEndListener();
  };

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
