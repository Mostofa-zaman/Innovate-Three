import React from "react";

import ImageOne from "../assets/nature3.jpg";
import ImageTwo from "../assets/nature4.jpg";
import ImageThree from "../assets/nature5.webp";
import DotNetImage from "../assets/net.png";
import BentLine from "../assets/tarjaliline.png";
import Puse from "../assets/puse.png";

const Business = () => {
  return (
    <section className="py-[60px] lg:py-[100px] my-[60px] lg:my-[100px] bg-[#FEF8E4] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4">
        
        {/* Section 01 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="relative z-10">
            <img
              src={ImageOne}
              alt="business image"
              className="h-[250px] md:h-[300px] lg:h-[362px] w-full object-cover"
            />
            <div className="absolute top-[20px] left-[-80px] z-20 hidden lg:block">
              <img src={BentLine} alt="BentLine" className="animate-movement" />
            </div>
          </div>

          <div className="lg:pl-[60px] text-center lg:text-left">
            <h2 className="font-opensans font-extrabold text-[40px] lg:text-[64px] text-secondary">
              01
            </h2>
            <h6 className="font-opensans font-bold text-[20px] lg:text-[24px] text-primary pt-4 lg:pt-[32px] pb-3 lg:pb-[20px]">
              Make your business visible online
            </h6>
            <p className="font-opensans font-normal text-[16px] lg:text-[18px] text-secondary w-full lg:w-[450px] mx-auto lg:mx-0">
              Open an online store and become an international seller. Your
              customers will enjoy shopping online!
            </p>
          </div>
        </div>

        {/* Section 02 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 relative mt-16">
          <div className="absolute left-[-100px] top-[33%] hidden lg:block">
            <img src={Puse} alt="puse" />
          </div>

          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="font-opensans font-extrabold text-[40px] lg:text-[64px] text-secondary">
              02
            </h2>
            <h6 className="font-opensans font-bold text-[20px] lg:text-[24px] text-primary pt-4 lg:pt-[32px] pb-3 lg:pb-[20px]">
              Make your eCommerce business stand out
            </h6>
            <p className="font-opensans font-normal text-[16px] lg:text-[18px] text-secondary w-full lg:w-[450px] mx-auto lg:mx-0">
              We craft premium digital work for web, mobile and experiential
              with creative agencies and global brands alike.
            </p>
          </div>

          <div className="relative z-[1] order-1 lg:order-2">
            <img
              src={ImageTwo}
              alt="business image"
              className="h-[250px] md:h-[300px] lg:h-[362px] w-full object-cover"
            />
            <div className="w-[180px] h-[180px] lg:w-[266px] lg:h-[277px] bg-[#1F4F4F] absolute bottom-[-20px] right-[-20px] z-[-1] animate-updown hidden md:block"></div>
          </div>
        </div>

        {/* Section 03 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mt-16">
          <div className="relative">
            <img
              src={ImageThree}
              alt="business image"
              className="h-[250px] md:h-[300px] lg:h-[362px] w-full object-cover"
            />
            <div className="absolute bottom-[-30px] right-[-50px] animate-updown hidden lg:block">
              <img src={DotNetImage} alt="DotNetImage" />
            </div>
          </div>

          <div className="lg:pl-[60px] text-center lg:text-left">
            <h2 className="font-opensans font-extrabold text-[40px] lg:text-[64px] text-secondary">
              03
            </h2>
            <h6 className="font-opensans font-bold text-[20px] lg:text-[24px] text-primary pt-4 lg:pt-[32px] pb-3 lg:pb-[20px]">
              Grow with your audience
            </h6>
            <p className="font-opensans font-normal text-[16px] lg:text-[18px] text-secondary w-full lg:w-[450px] mx-auto lg:mx-0">
              We marry creative insight with data to deliver successful user
              experiences through iteration and prototyping.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Business;
