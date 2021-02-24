import React from "react";
import Text from "../../../../components/Text";

import icScore from "./../../../../assets/icons/ic_score.png";
import { useScore } from "./hooks";

function Score({ started = true }) {
  const [startScore, pauseScore, stopScore, getScore] = useScore(started);

  return (
    <div className="absolute top-0 mt-16 flex items-center">
      <img src={icScore} alt="" className="w-6 h-6 mr-3" />

      <Text size="xl" bold="true" align="center">
        {getScore()}
      </Text>
    </div>
  );
}

export default Score;
