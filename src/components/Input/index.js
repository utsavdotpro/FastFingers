import React from "react";
import { useInput } from "./hooks";

export default function Input({
  value = "",
  placeholder = "",
  onChange = () => {},
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoFocus
      className="bg-white p-3 rounded-md outline-none shadow-md font-bold text-center uppercase tracking-wider w-full"
    />
  );
}

export { useInput };
