import React, { useEffect } from "react";
import Text from "../../../../components/Text";
import { getReadableScore } from "../../../../utils/methods";
import { useTimer } from "../../hooks";

import icScore from "./../../../../assets/icons/ic_score.png";

function Score({ started = true }) {
  const { tick, pause } = useTimer(started);

  useEffect(() => {
    if (!started) pause();
  }, [started]);

  return (
    <div className="absolute top-0 mt-16 flex items-center">
      <img src={icScore} alt="" className="w-6 h-6 mr-3" />

      <Text size="xl" bold="true" align="center">
        {getReadableScore(tick)}
      </Text>
    </div>
  );
}

export default Score;
