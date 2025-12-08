import React, { useState } from "react";
import Button from "./Button";
import { ToggleSwitch } from "flowbite-react";
import PlanCard from "./PlanCard";

const Plan = () => {
  const [switch3, setSwitch3] = useState(true);
  return (
    <section className="py-[100px] bg-[#e2ddfb34]">
      <div className="max-w-[1320px] mx-auto">
        <div className=" flex flex-col items-center gap-y-[27px]">
          <h3 className="font-opensans font-bold text-[48px] text-[#282828]">
            Choose The Right Plan
          </h3>
          <div className="flex gap-x-[16px]">
            <p className="font-nunito font-bold text-[20px]/[27px] text-primary">
              Monthly
            </p>
            <div>
              <ToggleSwitch checked={switch3} onChange={setSwitch3} />
            </div>
            <p className="font-nunito font-bold text-[20px]/[27px] text-secondary">
              Yearly
            </p>
            <Button
              buttonName={"20% Save"}
              className={
                "!font-nunito !font-bold !text-[14px]/[18px] text-primary !py-[6px] !px-[10px] !bg-[#E2DDFB] rounded-[18px]"
              }
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-[35px] mt-[70px]">
          <div>
            <PlanCard
              heading={"Basic"}
              paragraphOne={"Monthly Package"}
              currency={"30"}
              paragraphTwo={
                " Responsive DesignDynamic ElementsService PagesCustom Design & Features"
              }
              buttonName={"Choose Plan"}
            />
          </div>
          <div>
            <PlanCard
              heading={"Professional"}
              paragraphOne={"Monthly Package"}
              currency={"60"}
              paragraphTwo={
                " Responsive DesignDynamic ElementsService PagesCustom Design & Features"
              }
              buttonName={"Choose Plan"}
            />
          </div>
          <div>
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
      </div>
    </section>
  );
};

export default Plan;
