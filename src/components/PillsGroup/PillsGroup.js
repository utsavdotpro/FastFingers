import React from "react";
import Pill from "./Pill";

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
