import React from "react";
import ThinksCard from "./ThinksCard";
import Ring from "./Ring";
import Dot from "./Dot";

import Likes from "../assets/like.png";
import DotNetImage from "../assets/net.png";

const Thinks = () => {
  return (
    <section className="py-[100px] bg-[#FCF8F8] relative">
      <div className=" absolute left-[3%] top-[135px] ">
        <Ring className={"!w-[20px] !h-[20px] border-[#FF7628]"} />
      </div>
      <div className=" absolute left-[6.5%] top-[145px] ">
        <Ring className={"!w-[10px] !h-[10px] border-[#6001D3]"} />
      </div>
      <div className=" absolute left-[5%] top-[105px]">
        <Dot className={"bg-[#1BBF00]"} />
      </div>

      <div className="max-w-[1320px] mx-auto">
        <h2 className="font-opensans font-bold text-[56px]/[68px] text-primary text-center pb-[68px] ">
          What People Thinks About Us{" "}
        </h2>
        <div className="grid grid-cols-3 gap-x-[30px]">
          <div className="relative z-[2]">
            <ThinksCard
              imageSrc={Likes}
              heading={"Denis Zakerburg"}
              paragraph={"Marketing Management Remmi"}
              paragraphTwo={
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration ."
              }
            />
            <div className=" absolute bottom-[-30px] left-[-40px] z-[-1] animate-updown">
              <img src={DotNetImage} alt="DotNetImage" />
            </div>
          </div>
          <div>
            <ThinksCard
              imageSrc={Likes}
              heading={"Robert Anyino"}
              paragraph={"Marketing Management Remmi"}
              paragraphTwo={
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration ."
              }
            />
          </div>
          <div>
            <ThinksCard
              imageSrc={Likes}
              heading={"Mehmet Parblo"}
              paragraph={"Marketing Management Remmi"}
              paragraphTwo={
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration ."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thinks;
