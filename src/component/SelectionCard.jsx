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
        className={`w-full bg-cover object-cover ${imageClassName} h-auto sm:h-[400px] md:h-[500px] lg:h-auto`}
      />
      <div
        className={`bg-[#E2DDFB] py-3 px-4 sm:py-4 sm:px-6 w-[250px] sm:w-[295px] absolute group-hover:bg-[#FEF8E4] transition duration-300 ease-in-out ${batchOverlayClassName}`}
      >
        <h6 className="font-opensans font-bold text-[18px] sm:text-[20px] lg:text-[24px] text-primary">
          {heading}
        </h6>
      </div>
    </div>
  );
};

export default SelectionCard;
