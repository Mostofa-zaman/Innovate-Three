import React from "react";

const SelectionCard = ({
  imageName,
  imageClassName,
  batchOverlayClassName,
  heading,
  maindivClassName,
}) => {
  return (
    <div className={`relative group ${maindivClassName}`}>
      <img
        src={imageName}
        alt="imageName selection Card"
        className={`w-full bg-cover  object-cover  ${imageClassName}`}
      />
      <div
        className={`bg-[#E2DDFB] py-[15px] px-[30px] w-[295px] absolute group-hover:bg-[#FEF8E4] transition duration-300 ease-in-out ${batchOverlayClassName} `}
      >
        <h6 className="font-opensans font-bold text-[24px]/[36px] text-primary ">
          {heading}
        </h6>
      </div>
    </div>
  );
};

export default SelectionCard;
