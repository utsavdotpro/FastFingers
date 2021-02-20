import React from "react";

function Button({ brand = "white", children }) {
  return (
    <button
      className={`bg-${brand} focusable p-1 px-3 rounded-md hover:shadow-md`}
    >
      <b>{children}</b>
    </button>
  );
}

export default Button;
