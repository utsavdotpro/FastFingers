import React from "react";

function GridContainer({ LeftComponent = "", RightComponent = "", children }) {
  return (
    <div className="lg:flex justify-center">
      {!!LeftComponent ? (
        <div className="p-10 flex-1">
          <LeftComponent />
        </div>
      ) : (
        ""
      )}

      <div className="container max-w-screen-lg p-10 h-screen flex items-center">
        {children}
      </div>

      {!!RightComponent ? (
        <div className="p-10 flex-1">
          <RightComponent />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default GridContainer;
