import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import Ring from "./Ring";
import Dot from "./Dot";
import NatureOne from "../assets/nature2.jpg";
import BaseImage from "../assets/workslid.png";
import Net from "../assets/net.png";
import Line from "../assets/tail3.png";

const Work = () => {
  return (
    <section className="py-[100px] relative">
      <div className="absolute top-[40%]  z-[-1] left-0">
        <img src={Line} alt="Line" className="w-[200px] "/>
      </div>
      <div className="absolute bottom-0  left-0 z-[-1]">
        <img src={BaseImage} alt="BaseImage" />
      </div>
      <div className="absolute bottom-[-4%]  left-[35%] ">
        <img src={Net} alt="Net" />
      </div>
      <div className=" absolute right-[20%] top-[100px] ">
        <Ring className={"!w-[20px] !h-[20px] border-[#1BBF00]"} />
      </div>
      <div className=" absolute right-[18%] top-[150px] ">
        <Ring className={"!w-[10px] !h-[10px] border-[#FF7628]"} />
      </div>
      <div className=" absolute right-[16%] top-[105px]">
        <Dot className={"bg-[#FF7628]"} />
      </div>
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-2 gap-x-[100px] items-center">
          <div className=" ">
            <img
              src={NatureOne}
              alt="workbannar"
              className=" h-[580px]  object-cover object-center "
            />
          </div>
          <div className="">
            <h2 className="font-opensans font-bold text-[56px] text-primary">
              What We Do?
            </h2>
            <p className="font-opensans font-normal text-[18px]/[36px] text-secondary pt-[20px] pb-[36px]">
              We are an award-winning digital creative studio from London, in
              the business of creating unforgettable interactive experiences.
            </p>
            <div className="">
              <Accordion>
                <AccordionPanel>
                  <AccordionTitle>
                    Understand whole customer story
                  </AccordionTitle>
                  <AccordionContent>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Hub gives you incomparable insight into what your
                      customers are perusing, clicking, and craving.
                    </p>
                  </AccordionContent>
                </AccordionPanel>
                <AccordionPanel>
                  <AccordionTitle>
                    Build trust and loyalty programs
                  </AccordionTitle>
                  <AccordionContent>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Hub gives you incomparable insight into what your
                      customers are perusing, clicking, and craving.
                    </p>
                  </AccordionContent>
                </AccordionPanel>
                <AccordionPanel>
                  <AccordionTitle>
                    Analyze and optimize with data
                  </AccordionTitle>
                  <AccordionContent>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Hub gives you incomparable insight into what your
                      customers are perusing, clicking, and craving.
                    </p>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
