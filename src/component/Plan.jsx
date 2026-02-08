import React, { useState } from "react";
import Button from "./Button";
import { ToggleSwitch } from "flowbite-react";
import PlanCard from "./PlanCard";

const Plan = () => {
  const [switch3, setSwitch3] = useState(true);

  return (
    <section className="py-[60px] lg:py-[100px] bg-[#e2ddfb34]">
      <div className="max-w-[1320px] mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-y-5 lg:gap-y-[27px] text-center">
          <h3 className="font-opensans font-bold text-[32px] sm:text-[40px] lg:text-[48px] text-[#282828]">
            Choose The Right Plan
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-x-[16px]">
            <p className="font-nunito font-bold text-[16px] sm:text-[20px]/[27px] text-primary">
              Monthly
            </p>

            <ToggleSwitch checked={switch3} onChange={setSwitch3} />

            <p className="font-nunito font-bold text-[16px] sm:text-[20px]/[27px] text-secondary">
              Yearly
            </p>

            <Button
              buttonName={"20% Save"}
              className="!font-nunito !font-bold !text-[12px] sm:!text-[14px]/[18px] text-primary !py-[6px] !px-[10px] !bg-[#E2DDFB] rounded-[18px]"
            />
          </div>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-[35px] mt-[40px] lg:mt-[70px]">
          <PlanCard
            heading={"Basic"}
            paragraphOne={"Monthly Package"}
            currency={"30"}
            paragraphTwo={
              " Responsive DesignDynamic ElementsService PagesCustom Design & Features"
            }
            buttonName={"Choose Plan"}
          />

          <PlanCard
            heading={"Professional"}
            paragraphOne={"Monthly Package"}
            currency={"60"}
            paragraphTwo={
              " Responsive DesignDynamic ElementsService PagesCustom Design & Features"
            }
            buttonName={"Choose Plan"}
          />

          <PlanCard
            heading={"Exclusive"}
            paragraphOne={"Monthly Package"}
            currency={"85"}
            paragraphTwo={
              " Responsive DesignDynamic ElementsService PagesCustom Design & Features"
            }
            buttonName={"Choose Plan"}
          />
        </div>
      </div>
    </section>
  );
};

export default Plan;
