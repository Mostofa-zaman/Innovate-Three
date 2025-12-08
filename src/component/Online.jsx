import React from "react";
import Services from "./Services";
import Cross from "./Cross";
import Dot from "./Dot";

import ServicesImageOne from "../assets/service1.png";
import ServicesImageTwo from "../assets/service2.png";
import ServicesImageThree from "../assets/service3.png";
import DotOne from "../assets/dotline3.png";
import Ring from "./Ring";


const Online = () => {
  return (
    <section className="relative py-[60px] bg-[#FCF8F8]  ">
      <div className="absolute top-[0px] right-[0px]">
        <img src={DotOne} alt="DotOne" />
      </div>
       <div  className="absolute  top-[50%] left-[30px] -translate-y-full">
        <Ring className={"border-[#8773EF]"}/>
      </div>
      <div className="absolute flex gap-x-[5px] left-[50%] top-[130px] translate-x-full">
        <Cross className={"w-[12px]"} />
        <Cross className={"w-[12px]"} />
        <Cross className={"w-[12px]"} />
      </div>
      <div className="absolute top-[50%] left-[20px] -translate-y-full">
        <Dot className={"bg-[#FF7628]"} />
      </div>
      <div className="max-w-[1320px] mx-auto">
        <div className="pb-[64px] text-[56px] text-primary font-bold font-opensans w-[732px]">
          We help you to go online and increase your sales
        </div>
        <div className="grid grid-cols-3 gap-x-[65px]">
          <div>
            <Services
              src={ServicesImageOne}
              heading={"eCommerce Consulting"}
              paragraph={
                "Better eCommerce businesses by creating joyful digital ideas and experiences that connect the  hearts of their consumers."
              }
            />
          </div>
          <div>
            <Services
              src={ServicesImageTwo}
              heading={"eCommerce Consulting"}
              paragraph={
                "Better eCommerce businesses by creating joyful digital ideas and experiences that connect the  hearts of their consumers."
              }
            />
          </div>
          <div>
            <Services
              src={ServicesImageThree}
              heading={"eCommerce Consulting"}
              paragraph={
                "Better eCommerce businesses by creating joyful digital ideas and experiences that connect the  hearts of their consumers."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Online;
