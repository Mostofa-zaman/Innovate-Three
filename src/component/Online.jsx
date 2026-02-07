const Online = () => {
  return (
    <section className="relative py-[40px] md:py-[60px] bg-[#FCF8F8] overflow-hidden">
      
      {/* Decorative elements (hide on small devices) */}
      <div className="hidden lg:block absolute top-0 right-0">
        <img src={DotOne} alt="DotOne" />
      </div>

      <div className="hidden lg:block absolute top-1/2 left-[30px] -translate-y-full">
        <Ring className={"border-[#8773EF]"} />
      </div>

      <div className="hidden lg:flex absolute gap-x-[5px] left-1/2 top-[130px] translate-x-full">
        <Cross className={"w-[12px]"} />
        <Cross className={"w-[12px]"} />
        <Cross className={"w-[12px]"} />
      </div>

      <div className="hidden lg:block absolute top-1/2 left-[20px] -translate-y-full">
        <Dot className={"bg-[#FF7628]"} />
      </div>

      {/* Content */}
      <div className="max-w-[1320px] mx-auto px-4">
        
        {/* Heading */}
        <div className="pb-[40px] md:pb-[64px] 
          text-[32px] md:text-[44px] lg:text-[56px] 
          text-primary font-bold font-opensans 
          max-w-full lg:w-[732px]
          text-center lg:text-left">
          We help you to go online and increase your sales
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
          gap-y-[40px] md:gap-y-[50px] 
          gap-x-[30px] lg:gap-x-[65px]">
          
          <Services
            src={ServicesImageOne}
            heading={"eCommerce Consulting"}
            paragraph={
              "Better eCommerce businesses by creating joyful digital ideas and experiences that connect the hearts of their consumers."
            }
          />

          <Services
            src={ServicesImageTwo}
            heading={"eCommerce Consulting"}
            paragraph={
              "Better eCommerce businesses by creating joyful digital ideas and experiences that connect the hearts of their consumers."
            }
          />

          <Services
            src={ServicesImageThree}
            heading={"eCommerce Consulting"}
            paragraph={
              "Better eCommerce businesses by creating joyful digital ideas and experiences that connect the hearts of their consumers."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Online;
