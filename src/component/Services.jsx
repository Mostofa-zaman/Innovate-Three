import React from "react";

const Services = ({ src, heading, paragraph }) => {
  return (
    <div>
      <img src={src} alt="services Images" />
      <h4 className="text-[29px]/[36px] text-primary font-bold font-opensans pt-[28px] pb-[20px]">
        {heading}
      </h4>
      <p className="text-[17px]/[36px] text-secondary font-normal font-opensans">
        {paragraph}
      </p>
    </div>
  );
};

export default Services;
