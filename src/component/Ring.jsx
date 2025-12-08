import { clamp } from "motion";
import React from "react";

const Ring = ({ className }) => {
  return (
    <div
      className={` w-[34px] h-[34px] rounded-[50%] border animate-movement absolute ${className}`}
    ></div>
  );
};

export default Ring;
