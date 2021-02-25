import React, { useState } from "react";

import { usePill } from "./hooks";

function Pill({ label, active = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`x-3 py-1 px-3 rounded-md opacity-80 cursor-pointer hover:opacity-90 transition-all font-bold ${
        active ? "text-yellow-400 opacity-100" : "text-white"
      }`}
    >
      {label}
    </div>
  );
}

export default function PillsGroup({ pills, activeIndex = 0, onPillChange }) {
  return (
    <div className="flex">
      {pills.map((pill, index) => (
        <Pill
          key={index + pill}
          label={pill}
          active={index === activeIndex}
          onClick={() => onPillChange(index)}
        />
      ))}
    </div>
  );
}

export { usePill };
