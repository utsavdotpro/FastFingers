import React from "react";

import DSlider from "../../../../components/DSlider";

function RightContainer() {
  return (
    <div className="px-10 pb-10 flex items-center lg:h-screen">
      <div className="h-72">
        <DSlider vertical included={false} />
      </div>
    </div>
  );
}

export default RightContainer;
