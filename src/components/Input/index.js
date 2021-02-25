import React from "react";
import { useInput } from "./hooks";

export default function Input({
  type = "text",
  value = "",
  placeholder = "",
  onChange = () => {},
  autoFocus = true,
  uppercase = false,
  hidden = false,
  className = "",
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoFocus={autoFocus}
      className={`
        bg-white p-3 rounded-md outline-none shadow-md font-bold text-center tracking-wider w-full
        ${uppercase ? "uppercase" : ""}
        ${hidden ? "hidden" : ""}
        ${className}
      `}
    />
  );
}

export { useInput };
