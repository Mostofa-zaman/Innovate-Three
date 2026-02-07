const Work = () => {
  return (
    <section className="py-[60px] md:py-[80px] lg:py-[100px] relative overflow-hidden">
      
      {/* Decorative elements (hide on small devices) */}
      <div className="hidden lg:block absolute top-[40%] left-0 z-[-1]">
        <img src={Line} alt="Line" className="w-[200px]" />
      </div>

      <div className="hidden lg:block absolute bottom-0 left-0 z-[-1]">
        <img src={BaseImage} alt="BaseImage" />
      </div>

      <div className="hidden lg:block absolute bottom-[-4%] left-[35%]">
        <img src={Net} alt="Net" />
      </div>

      <div className="hidden lg:block absolute right-[20%] top-[100px]">
        <Ring className={"!w-[20px] !h-[20px] border-[#1BBF00]"} />
      </div>

      <div className="hidden lg:block absolute right-[18%] top-[150px]">
        <Ring className={"!w-[10px] !h-[10px] border-[#FF7628]"} />
      </div>

      <div className="hidden lg:block absolute right-[16%] top-[105px]">
        <Dot className={"bg-[#FF7628]"} />
      </div>

      {/* Content */}
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[50px] lg:gap-x-[100px] items-center">
          
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={NatureOne}
              alt="workbannar"
              className="h-[320px] md:h-[420px] lg:h-[580px] 
                w-full max-w-[520px] lg:max-w-full
                object-cover object-center rounded-lg"
            />
          </div>

          {/* Text + Accordion */}
          <div className="text-center lg:text-left">
            <h2 className="font-opensans font-bold 
              text-[32px] md:text-[44px] lg:text-[56px] 
              text-primary">
              What We Do?
            </h2>

            <p className="font-opensans font-normal 
              text-[16px] md:text-[18px]/[36px] 
              text-secondary pt-[16px] md:pt-[20px] pb-[28px] md:pb-[36px]">
              We are an award-winning digital creative studio from London, in
              the business of creating unforgettable interactive experiences.
            </p>

            <Accordion className="text-left">
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
    </section>
  );
};

export default Work;
