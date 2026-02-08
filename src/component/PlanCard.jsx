import React from "react";
import Button from "./Button";

const PlanCard = ({
  heading,
  paragraphOne,
  currency,
  paragraphTwo,
  buttonName,
}) => {
  return (
    <div
      className="
        text-center
        h-auto md:h-[561px]
        shadow-xl
        group
        relative
        hover:translate-y-[-20px]
        transition
        duration-700
        ease-in-out
      "
    >
      {/* Top */}
      <div className="bg-[#E2DDFB] group-hover:bg-[#FEF8E4] p-6 sm:p-[40px] transition duration-300 ease-in-out">
        <h3 className="font-opensans font-bold text-[28px] sm:text-[34px] lg:text-[40px]/[55px] text-primary">
          {heading}
        </h3>

        <p className="font-opensans font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-secondary py-[10px]">
          {paragraphOne}
        </p>

        {/* Unified Price Label */}
        <h2 className="font-opensans font-bold text-[48px] sm:text-[60px] lg:text-[72px]/[123px] text-primary inline-flex items-start justify-center relative">
          <span className="text-[24px] sm:text-[26px] lg:text-[58px] relative top-[20px] sm:top-[-40px] lg:top-[1px]">
            $
          </span>
          <span className="mx-1">{currency}</span>
          <span className="text-[14px] sm:text-[16px] lg:text-[28px] ">/Month</span>
        </h2>
      </div>

      {/* Bottom */}
      <div className="pt-[10px] pb-[30px] text-center px-4">
        <p className="text-[#6C7D93] w-full sm:w-[227px] mx-auto text-[14px] sm:text-[16px]">
          {paragraphTwo}
        </p>

        <Button
          className="
            group-hover:bg-[#7258F7]
            border
            border-[#7258F7]
            text-primary
            bg-transparent
            group-hover:text-white
            !px-[25px]
            !py-[10px]
            mt-[30px] sm:mt-[40px] lg:mt-[50px]
            transition
            duration-300
            ease-in-out
          "
          buttonName={buttonName}
        />
      </div>
    </div>
  );
};

export default PlanCard;
