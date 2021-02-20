import React from "react";

function Text({
  size = "",
  bold = false,
  color = "white",
  align = "left",
  className: classes,
  children,
}) {
  size = size !== "" ? "text-" + size : size;
  color = color !== "" ? " text-" + color : color;
  align = align !== "" ? " text-" + align : align;
  return (
    <p className={size + color + align + " " + classes}>
      {bold ? <b>{children}</b> : children}
    </p>
  );
}

export default Text;
