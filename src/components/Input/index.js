import React from "react";
import { useInput } from "./hooks";

export default function Input({
  type = "text",
  value = "",
  placeholder = "",
  onChange = () => {},
  autoFocus = true,
  uppercase = false,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoFocus={autoFocus}
      className={`bg-white p-3 rounded-md outline-none shadow-md font-bold text-center ${
        uppercase ? "uppercase" : ""
      } tracking-wider w-full`}
    />
  );
}

export { useInput };
