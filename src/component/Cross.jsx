import React from "react";
import CrossImage from "../assets/cross.png";

const Cross = ({ className }) => {
  return (
    <img
      src={CrossImage}
      alt="CrossImage"
      className={`  animate-crosses ${className}`}
    />
  );
};

export default Cross;
