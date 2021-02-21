import React from "react";

function Button({ brand = "white", color = "black", children }) {
  return (
    <button
      className={`bg-${brand} text-${color} focusable p-1 px-3 rounded-md hover:shadow-md`}
    >
      <b>{children}</b>
    </button>
  );
}

export default Button;
