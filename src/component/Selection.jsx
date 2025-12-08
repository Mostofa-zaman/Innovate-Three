import React from "react";
import SelectionCard from "./SelectionCard";

import NatureOne from "../assets/nature5.jpg";
import NatureTwo from "../assets/nature6.jpg";
import NatureThree from "../assets/nature7.jpg";
import TailImage from "../assets/tail1.png";

const Selection = () => {
  return (
    <section className="py-[100px] relative ">
      <div className="absolute bottom-[18%] right-0">
        <img src={TailImage} alt="TailImage" />
      </div>
      <div className="max-w-[1320px] mx-auto">
        <div className="pl-[40px]">
          <h2 className="font-opensans font-bold text-[56px] text-primary">
            Selected Works
          </h2>
          <p className=" w-[387px] font-opensans font-normal text-[18px]/[36px] text-secondary pt-[15px]">
            We are convinced that aesthetics leads to a form of harmony and
            provides well-being.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-[35px] pt-[150px]">
          <div>
            <SelectionCard
              imageName={NatureOne}
              imageClassName={"h-[688px]"}
              batchOverlayClassName={"bottom-[-30px] right-0"}
              heading={"01. Fresh & Care (Grocery Store)"}
            />
          </div>
          <div>
            <SelectionCard
              imageName={NatureTwo}
              imageClassName={"h-[598px]"}
              batchOverlayClassName={"top-[-40px] right-0"}
              heading={"02. Purl house (Jewellary Store)"}
              maindivClassName={"top-[-70px]"}
            />
          </div>
          <div>
            <SelectionCard
              imageName={NatureThree}
              imageClassName={"h-[752px]"}
              batchOverlayClassName={"bottom-[60px] right-0"}
              heading={"03. Fashionate (Clothing Store) "}
              maindivClassName={"top-[-40%]"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Selection;
