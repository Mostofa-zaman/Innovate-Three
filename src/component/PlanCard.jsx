import React from "react";
import Button from "./Button";

const PlanCard = ({heading,paragraphOne,currency,paragraphTwo ,buttonName}) => {
  return (
    <div className=" text-center  h-[561px] max-h-[561px] shadow-xl group relative hover:translate-y-[-20px] transition duration-700 ease-in-out">
      <div className="bg-[#E2DDFB] group-hover:bg-[#FEF8E4] p-[40px] transition duration-300 ease-in-out ">
        <h3 className="font-opensans font-bold text-[40px]/[55px] text-primary ">
          {heading}
        </h3>
        <p className="font-opensans font-normal text-[20px] text-secondary py-[10px]">
          {paragraphOne}
        </p>
        <h2 className="ont-opensans font-bold text-[72px]/[123px] text-primary">
          {" "}
          <sup className="text-[18px]/[0px] relative top-[-55px]">
            {" "}
            $
          </sup> {currency} <sub className="text-[18px]/[0px]">/Month</sub>
        </h2>
      </div>
      <div className="pt-[10px] pb-[20] text-center">
        <p className="text-[#6C7D93] w-[227px] mx-auto">
          {" "}
           {paragraphTwo}
        </p>
        <Button
          className={
            "group-hover:bg-[#7258F7] border border-[#7258F7] text-primary bg-transparent group-hover:text-white !px-[25px] !py-[10px] mt-[50px] transition duration-300 ease-in-out "
          }
          buttonName={buttonName}
        />
      </div>
    </div>
  );
};

export default PlanCard;

//
