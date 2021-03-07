import React from "react";

export default function Snackbar({ isShown = false, children }) {
  return (
    <div
      className={`absolute bottom-0 mb-6 py-3 px-5 bg-opacity-30 bg-black text-white rounded-md text-sm transition-all ${
        isShown ? "opacity-1" : "invisible opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
