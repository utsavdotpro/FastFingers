import React from "react";

function Input({ placeholder = "" }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-white p-3 rounded-md outline-none shadow-md md:w-2/5 w-5/6 font-bold text-center uppercase tracking-wider"
    />
  );
}

export default Input;
