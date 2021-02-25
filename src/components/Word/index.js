import React from "react";

function Letter({ children }) {
  return (
    <span className="text-4xl text-white tracking-widest">
      <b>{children}</b>
    </span>
  );
}

export default function Word({ children }) {
  return (
    <div>
      {children
        .toUpperCase()
        .split("")
        .map((l, index) => (
          <Letter key={`letter-${index}`}>{l}</Letter>
        ))}
    </div>
  );
}
