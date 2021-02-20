import React from "react";

function Letter({ children }) {
  return (
    <span className="text-4xl text-white tracking-widest">
      <b>{children}</b>
    </span>
  );
}

function Word({ children }) {
  return (
    <div>
      {children.split("").map((l) => (
        <Letter>{l}</Letter>
      ))}
    </div>
  );
}

export default Word;
