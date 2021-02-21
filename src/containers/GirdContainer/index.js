import React from "react";

function GridContainer({ Left = "", Right = "", children }) {
  return (
    <div className="lg:flex justify-center">
      <div className="flex-1">{!!Left ? <Left /> : ""}</div>

      <div className="container max-w-screen-lg p-10 h-screen flex items-center">
        {children}
      </div>

      <div className="flex-1">{!!Right ? <Right /> : ""}</div>
    </div>
  );
}

export default GridContainer;
