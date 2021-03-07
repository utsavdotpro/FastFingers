import React from "react";

export default function Letter({ value, status, active }) {
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
