import React from "react";

import ImageOne from "../assets/nature3.jpg";
import ImageTwo from "../assets/nature4.jpg";
import ImageThree from "../assets/nature5.webp";
import DotNetImage from "../assets/net.png";
import BentLine from "../assets/tarjaliline.png";
import Puse from "../assets/puse.png";

const Business = () => {
  return (
    <section className="py-[100px] my-[100px] bg-[#FEF8E4] overflow-hidden ">
      <div className="max-w-[1320px] mx-auto ">
        <div className="grid grid-cols-2 items-center ">
          <div className="relative z-10 ">
            <img
              src={ImageOne}
              alt="business image"
              className="h-[362px] w-full bg-cover bg-center "
            />
            <div className="absolute top-[20px] left-[-80px] z-20 ">
              <img src={BentLine} alt="BentLine" className="animate-movement relative z-20" />
            </div>
          </div>
          <div className="pl-[60px]">
            <h2 className="font-opensans font-extrabold text-[64px] text-secondary">
              01
            </h2>
            <h6 className="font-opensans font-bold text-[24px] text-primary pt-[32px] pb-[20px]">
              Make your business visible online
            </h6>
            <p className="font-opensans font-normal text-[18px] text-secondary w-[450px]">
              Open an online store and become an international seller. Your
              customers will enjoy shopping online!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center relative">
          <div className="absolute left-[-100px] top-[33%]">
            <img src={Puse} alt="puse" />
          </div>
          <div className="">
            <h2 className="font-opensans font-extrabold text-[64px] text-secondary">
              02
            </h2>
            <h6 className="font-opensans font-bold text-[24px] text-primary pt-[32px] pb-[20px]">
              Make your eCommerce business stand out
            </h6>
            <p className="font-opensans font-normal text-[18px] text-secondary w-[450px]">
              We craft premium digital work for web, mobile and experiential
              with creative agencies and global brands alike – putting passion,
              pride and plenty of elbow grease into everything we do.
            </p>
          </div>
          <div className="relative z-[1]">
            <img
              src={ImageTwo}
              alt="business image"
              className="h-[362px] w-full bg-cover bg-center  "
            />
            <div className="w-[266px] h-[277px] bg-[#1F4F4F] absolute bottom-[-30px] right-[-30px] z-[-1] animate-updown"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 items-center ">
          <div className="relative">
            <img
              src={ImageThree}
              alt="business image"
              className="h-[362px] w-full bg-cover bg-center "
            />
            <div className=" absolute bottom-[-30px] right-[-50px] animate-updown">
              <img src={DotNetImage} alt="DotNetImage" />
            </div>
          </div>
          <div className="pl-[60px]">
            <h2 className="font-opensans font-extrabold text-[64px] text-secondary">
              03
            </h2>
            <h6 className="font-opensans font-bold text-[24px] text-primary pt-[32px] pb-[20px]">
              Grow with your audience
            </h6>
            <p className="font-opensans font-normal text-[18px] text-secondary w-[450px]">
              We marry creative insight with data to deliver successful user
              experiences. Through a process of iteration and prototyping, we
              design interfaces that bring joy to people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
