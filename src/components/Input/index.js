import React from "react";

function Input({ placeholder = "" }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-white p-3 rounded-md outline-none shadow-md font-bold text-center uppercase tracking-wider w-full"
    />
  );
}

export default Input;
