import React from "react";
import SelectionCard from "./SelectionCard";

import NatureOne from "../assets/nature5.jpg";
import NatureTwo from "../assets/nature6.jpg";
import NatureThree from "../assets/nature7.jpg";
import TailImage from "../assets/tail1.png";

const Selection = () => {
  return (
    <section className="py-[60px] lg:py-[100px] relative">
      
      {/* Decorative Image */}
      <div className="absolute bottom-[18%] right-0 hidden lg:block">
        <img src={TailImage} alt="TailImage" />
      </div>

      <div className="max-w-[1320px] mx-auto px-4">
        
        {/* Header */}
        <div className="pl-0 lg:pl-[40px] text-center lg:text-left">
          <h2 className="font-opensans font-bold text-[32px] sm:text-[44px] lg:text-[56px] text-primary">
            Selected Works
          </h2>

          <p className="w-full sm:w-[387px] font-opensans font-normal text-[16px] sm:text-[18px]/[32px] lg:text-[18px]/[36px] text-secondary pt-[15px] mx-auto lg:mx-0">
            We are convinced that aesthetics leads to a form of harmony and
            provides well-being.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-[35px] pt-[60px] lg:pt-[150px]">
          
          <SelectionCard
            imageName={NatureOne}
            imageClassName="h-auto lg:h-[688px]"
            batchOverlayClassName="bottom-[-30px] right-0"
            heading={"01. Fresh & Care (Grocery Store)"}
          />

          <SelectionCard
            imageName={NatureTwo}
            imageClassName="h-auto lg:h-[598px]"
            batchOverlayClassName="top-[-40px] right-0"
            heading={"02. Purl house (Jewellary Store)"}
            maindivClassName="lg:top-[-70px]"
          />

          <SelectionCard
            imageName={NatureThree}
            imageClassName="h-auto lg:h-[752px]"
            batchOverlayClassName="bottom-[60px] right-0"
            heading={"03. Fashionate (Clothing Store)"}
            maindivClassName="lg:top-[-40%]"
          />

        </div>
      </div>
    </section>
  );
};

export default Selection;
