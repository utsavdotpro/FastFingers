import React from "react";

function Snackbar({ children }) {
  return (
    <div className="absolute bottom-0 mb-6 py-3 px-5 bg-opacity-30 bg-black text-white rounded-md text-sm">
      {children}
    </div>
  );
}

export default Snackbar;
