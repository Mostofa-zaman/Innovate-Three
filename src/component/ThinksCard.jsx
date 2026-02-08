import React from "react";

const ThinksCard = ({ imageSrc, heading, paragraph, paragraphTwo }) => {
  return (
    <div className="py-10 px-5 sm:px-8 bg-[#fff] group">
      {/* Top: Image + Name */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-5 justify-center items-center sm:items-start">
        <img
          src={imageSrc}
          alt="likes"
          className="opacity-45 group-hover:opacity-100 transition duration-300 ease-in-out w-[50px] sm:w-[60px] h-auto"
        />
        <div className="text-center sm:text-start">
          <h6 className="font-opensans font-bold text-[20px] sm:text-[22px] lg:text-[24px] text-primary">
            {heading}
          </h6>
          <p className="font-opensans font-medium text-[16px] sm:text-[17px] lg:text-[18px] text-secondary">
            {paragraph}
          </p>
        </div>
      </div>

      {/* Bottom: Paragraph */}
      <p className="font-opensans font-medium text-[16px] sm:text-[17px] lg:text-[18px] text-secondary pt-5 w-full sm:w-[350px] text-center sm:text-start mx-auto">
        {paragraphTwo}
      </p>
    </div>
  );
};

export default ThinksCard;
