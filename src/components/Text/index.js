import React from "react";

function Text({
  size = "",
  bold = false,
  color = "white",
  className: classes,
  children,
}) {
  size = size !== "" ? "text-" + size : size;
  color = color !== "" ? " text-" + color : color;
  return (
    <p className={size + color + " " + classes}>
      {bold ? <b>{children}</b> : children}
    </p>
  );
}

export default Text;
