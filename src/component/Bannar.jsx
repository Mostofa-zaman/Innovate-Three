import React from "react";
import Button from "./Button";
import Cross from "./Cross";
import MotionOne from "./MotionOne";
import Dot from "./Dot";

// impor for images
import BannarImages from "../assets/bannar.png";
import DotOne from "../assets/dotline.png";
import DotTwo from "../assets/dotline2.png";
import Puse from "../assets/puse.png";
import TailOne from "../assets/tail1.png";
import TailTwo from "../assets/tail2.png";
import Ring from "./Ring";

const Bannar = () => {
  return (
    <section className="pb-[120px] pt-[180px] relative overflow-hidden">
      <div className="absolute  right-[32%] top-[120px] -translate-x-1/2">
        <Ring className={"border-[#FF7628]"} />
      </div>
      <div className="absolute  left-[20.5%] bottom-[130px] -translate-x-1/2">
        <Ring className={"border-[#8773EF]"} />
      </div>
      <div className="absolute right-[0%] top-[180px] ">
        <img src={TailOne} alt="TailOne" />
      </div>
      <div className="absolute left-[0%] bottom-[0px] ">
        <img src={TailTwo} alt="TailTwo" />
      </div>
      <div className="absolute left-[20%] bottom-[140px] -translate-x-1/2">
        <Dot className={"bg-[#FCDA68]"} />
      </div>
      <div className="absolute right-[28%] bottom-[210px] -translate-x-1/2">
        <Dot className={"bg-rose-400"} />
      </div>
      <div className="absolute right-[32%] top-[160px] -translate-x-1/2">
        <Dot className={"bg-green-400"} />
      </div>
      <div className="absolute left-[40%] top-[210px] -translate-x-1/2">
        <img src={Puse} alt="Puse" />
      </div>
      <div className="absolute bottom-[208px] left-[50%] -translate-x-1/2  ">
        <MotionOne />
      </div>
      <div className="absolute top-[-50px] left-[-60px]">
        <img src={DotOne} alt="DotOne" />
      </div>
      <div className="absolute top-[-15px] left-[50%] -translate-x-1/2">
        <img src={DotTwo} alt="DotOne" />
      </div>
      <div className={" absolute top-[50px] right-[50px]"}>
        <Cross />
      </div>
      <div className="absolute flex gap-x-2 top-[50%] -translate-y-1/2 left-[100px]">
        <Cross className={"w-[12px]"} />
        <Cross className={"w-[12px]"} />
        <Cross className={"w-[12px]"} />
      </div>

      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-5  items-center ">
          <div className="col-span-3">
            <h1 className="font-opensans font-extrabold text-[63px] text-primary">
              {" "}
              We build E-commerce solution your business
            </h1>
            <p className="font-opensans font-normal text-[20px]/[40px] text-secondary w-[571px] py-8">
              Use customer data to build great and solid product experiences
              that convert. Digital marketing’s development has changed the way
              brands and businesses use technology for marketing.
            </p>

            <div className="flex gap-x-[20px]">
              <Button
                buttonName={"Contact Us"}
                className={
                  "bg-transparent text-primary border  border-[#8454F5] hover:bg-[#8454F5] hover:text-[#fff] transition duration-300 ease-in-out "
                }
              />
              <Button
                buttonName={"Learn More"}
                className={
                  "bg-transparent text-primary border  border-[#8454F5] hover:bg-[#8454F5] hover:text-[#fff] transition duration-300 ease-in-out"
                }
              />
            </div>
          </div>
          <div className=" col-span-2">
            <img src={BannarImages} alt="BannarImages" className="h-[600px] " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bannar;
