import React from "react";

import DSlider from "../../../../components/DSlider";

function RightContainer({ difficulty, levelFactor = 0 }) {
  // Todo: see why it's not rendering immediately
  // console.log(
  //   "RightContainer (" + difficulty.key + "): ",
  //   difficulty.factor + " " + levelFactor
  // );

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
