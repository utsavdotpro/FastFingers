import React from "react";
import Letter from "./Letter";

const getLetterObject = (letter, currentIndex, activeIndex, activeStatus) => {
  const l = {
    key: letter + currentIndex,
    value: letter,
    status: "ideal",
    active: currentIndex === activeIndex,
  };

  if (l.active) l.status = activeStatus;
  else if (currentIndex < activeIndex) l.status = "correct";

  return l;
};

export default function Word({
  children,
  activeIndex = 0,
  activeStatus = "active",
}) {
  return (
    <div>
      {children
        .toUpperCase()
        .split("")
        .map((l, index) => (
          <Letter {...getLetterObject(l, index, activeIndex, activeStatus)} />
        ))}
    </div>
  );
}
