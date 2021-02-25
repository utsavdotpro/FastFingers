import React from "react";

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

function Letter({ value, status, active }) {
  const textColor =
    status === "correct"
      ? "text-green-400"
      : status === "incorrect"
      ? "text-red-400"
      : "text-white";

  const textSize = active ? "text-5xl" : "text-4xl";

  return (
    <span className={`${textSize} tracking-widest ${textColor} transition-all`}>
      <b>{value}</b>
    </span>
  );
}

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
