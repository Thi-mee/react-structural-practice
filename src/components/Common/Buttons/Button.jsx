import React from "react";


const getPadding = (size) => {
  switch (size) {
    case "sm":
      return ".4rem .85rem";
    case "md":
      return ".6rem 1rem";
    case "lg":
      return ".8rem 1.5rem";
    default:
      return getPadding("lg");
  }
};


/**
 * 
 * @param {{
 * text: string,
 * style: React.CSSProperties,
 * size: "sm"|"lg",
 * onClick: () => void
 * }} param0 
 * @returns 
 */
const Button = ({ text, style, size, onClick }) => {
  const myStyle = {
    padding: getPadding(size),
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontSize: ".9rem",
  };

  return (
    <button style={{ ...myStyle, ...style }} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
