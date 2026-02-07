const Bannar = () => {
  return (
    <section className="pb-[80px] md:pb-[120px] pt-[120px] md:pt-[180px] relative overflow-hidden">
      
      {/* Decorative elements – hide on small devices */}
      <div className="hidden lg:block absolute right-[32%] top-[120px] -translate-x-1/2">
        <Ring className={"border-[#FF7628]"} />
      </div>

      <div className="hidden lg:block absolute left-[20.5%] bottom-[130px] -translate-x-1/2">
        <Ring className={"border-[#8773EF]"} />
      </div>

      <div className="hidden lg:block absolute right-0 top-[180px]">
        <img src={TailOne} alt="TailOne" />
      </div>

      <div className="hidden lg:block absolute left-0 bottom-0">
        <img src={TailTwo} alt="TailTwo" />
      </div>

      <div className="hidden lg:block absolute left-[20%] bottom-[140px] -translate-x-1/2">
        <Dot className={"bg-[#FCDA68]"} />
      </div>

      <div className="hidden lg:block absolute right-[28%] bottom-[210px] -translate-x-1/2">
        <Dot className={"bg-rose-400"} />
      </div>

      <div className="hidden lg:block absolute right-[32%] top-[160px] -translate-x-1/2">
        <Dot className={"bg-green-400"} />
      </div>

      <div className="hidden lg:block absolute left-[40%] top-[210px] -translate-x-1/2">
        <img src={Puse} alt="Puse" />
      </div>

      <div className="hidden lg:block absolute bottom-[208px] left-1/2 -translate-x-1/2">
        <MotionOne />
      </div>

      <div className="hidden lg:block absolute top-[-50px] left-[-60px]">
        <img src={DotOne} alt="DotOne" />
      </div>

      <div className="hidden lg:block absolute top-[-15px] left-1/2 -translate-x-1/2">
        <img src={DotTwo} alt="DotTwo" />
      </div>

      <div className="hidden lg:block absolute top-[50px] right-[50px]">
        <Cross />
      </div>

      <div className="hidden lg:flex absolute gap-x-2 top-1/2 -translate-y-1/2 left-[100px]">
        <Cross className={"w-[12px]"} />
        <Cross className={"w-[12px]"} />
        <Cross className={"w-[12px]"} />
      </div>

      {/* Content */}
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-y-12">
          
          {/* Text */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="font-opensans font-extrabold text-[36px] md:text-[48px] lg:text-[63px] text-primary">
              We build E-commerce solution your business
            </h1>

            <p className="font-opensans font-normal text-[16px] md:text-[18px] lg:text-[20px]/[40px] text-secondary 
              max-w-full lg:w-[571px] mx-auto lg:mx-0 py-6 lg:py-8">
              Use customer data to build great and solid product experiences
              that convert. Digital marketing’s development has changed the way
              brands and businesses use technology for marketing.
            </p>

            <div className="flex justify-center lg:justify-start gap-x-[20px]">
              <Button
                buttonName={"Contact Us"}
                className="bg-transparent text-primary border border-[#8454F5] hover:bg-[#8454F5] hover:text-white transition duration-300"
              />
              <Button
                buttonName={"Learn More"}
                className="bg-transparent text-primary border border-[#8454F5] hover:bg-[#8454F5] hover:text-white transition duration-300"
              />
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-2 flex justify-center">
            <img
              src={BannarImages}
              alt="BannarImages"
              className="h-[300px] md:h-[450px] lg:h-[600px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
