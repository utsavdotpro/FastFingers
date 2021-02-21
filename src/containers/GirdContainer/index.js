import React from "react";

function GridContainer({ LeftComponent = "", RightComponent = "", children }) {
  return (
    <div className="lg:flex justify-center">
      <div className="flex-1">{!!LeftComponent ? <LeftComponent /> : ""}</div>

      <div className="container max-w-screen-lg p-10 h-screen flex items-center">
        {children}
      </div>

      <div className="flex-1">{!!RightComponent ? <RightComponent /> : ""}</div>
    </div>
  );
}

export default GridContainer;
