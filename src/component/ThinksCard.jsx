import React from "react";


const ThinksCard = ({imageSrc,heading,paragraph,paragraphTwo}) => {
  return (
    <div className="py-[40px] px-[20px] bg-[#fff] group">
      <div className=" flex gap-x-[20px] justify-center">
        <img
          src={imageSrc}
          alt="likes"
          className="opacity-[0.45] group-hover:opacity-100 transition duration-300 ease-in-out"
        />
        <div>
            <h6 className="font-opensans font-bold text-[24px]/[27px] text-primary "> {heading} </h6>
            <p className="font-opensans font-medium text-[18px]/[36px] text-secondary" > {paragraph} </p>
        </div>
      </div>
      <p className="font-opensans font-medium text-[18px]/[36px] text-secondary pt-[21px] w-[350px] text-start mx-auto">{paragraphTwo}</p>
    </div>
  );
};

export default ThinksCard;
