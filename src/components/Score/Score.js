import React, { useEffect } from "react";
import Text from "../Text";
import { getReadableScore } from "../../utils/methods";
import { useTimer } from "../../pages/Game/hooks";

import icScore from "./../../assets/icons/ic_score.png";

export default function Score({ started = true, OnScoreStopListener = null }) {
  const { tick, stop } = useTimer(started);

  useEffect(() => {
    if (!started) processStop();
  }, [started]);

  const processStop = () => {
    if (OnScoreStopListener) OnScoreStopListener(tick);
    stop();
  };

  return (
    <div className="absolute top-0 mt-16 flex items-center">
      <img src={icScore} alt="" className="w-6 h-6 mr-3" />

      <Text size="xl" bold="true" align="center">
        {getReadableScore(tick)}
      </Text>
    </div>
  );
}
