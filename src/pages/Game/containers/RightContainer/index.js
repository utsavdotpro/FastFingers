import React from "react";

import DSlider, { getMark } from "../../../../components/DSlider";

function RightContainer({ difficulty, levelFactor = 0 }) {
  return (
    <div className="px-10 pb-10 flex items-center lg:h-screen">
      <div className="h-72">
        <DSlider
          value={difficulty.factor + levelFactor}
          vertical
          included={false}
        />
      </div>
    </div>
  );
}

export default RightContainer;
