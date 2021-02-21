import React from "react";

function Button({
  brand = "white",
  color = "black",
  children,
  onClick = () => {},
}) {
  return (
    <button
      className={`bg-${brand} text-${color} focusable p-1 px-3 rounded-md hover:shadow-md`}
      onClick={onClick}
    >
      <b>{children}</b>
    </button>
  );
}

export default Button;
