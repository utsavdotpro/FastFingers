import React from "react";
import { useInput } from "./hooks";

function Input({ value = "", placeholder = "", onChange = () => {} }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-white p-3 rounded-md outline-none shadow-md font-bold text-center uppercase tracking-wider w-full"
    />
  );
}

export default Input;
export { useInput };
