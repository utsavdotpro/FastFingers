import React from "react";

export default function CardContainer({ className = "", children }) {
  const defaultClasses =
    "rounded-xl bg-container p-10 h-full w-full flex items-center flex-col justify-center relative ";

  return <div className={defaultClasses + className}>{children}</div>;
}
