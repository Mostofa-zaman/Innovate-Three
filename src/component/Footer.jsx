import FooterLogo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#19153D]">
      <div className="max-w-[1320px] mx-auto pt-[140px] pb-[57px]    md:grid grid-cols-5 gap-6 ">
        <div className=" col-span-2">
          <img src={FooterLogo} alt="" className="w-[110px]" />
          <p className=" font-normal text-[#fff] pt-[44px]">
            Install any demo or template with a single click. You can mix and
            match all the demos & templates. Every demo can be turned into one
            or multi-page.
          </p>
        </div>
        <div className="">
          <ul className="flex flex-col items-center gap-y-[30px]">
            <li className="mb-[12px]">
              <a
                href="#"
                className="text-[24px] text-[#fff] font-semibold leading-[120%] font-nunito "
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#fff] font-semibold leading-[120%] font-nunito "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#fff] font-semibold leading-[120%] font-nunito "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#fff] font-semibold leading-[120%] font-nunito "
              >
                Benifit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#fff] font-semibold leading-[120%] font-nunito "
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#fff] font-semibold leading-[120%] font-nunito "
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col items-center gap-y-[30px]">
            <li className="mb-[12px]">
              <a
                href="#"
                className="text-[24px] text-[#fff] font-semibold leading-[120%] font-nunito "
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#fff] font-semibold leading-[120%] font-nunito "
              >
                Task Management
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#fff] font-semibold leading-[120%] font-nunito "
              >
                Company growth
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#fff] font-semibold leading-[120%] font-nunito "
              >
                Time tracking
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col items-center gap-y-[30px]">
            <li className="mb-[12px]">
              <a
                href="#"
                className="text-[24px] text-[#fff] font-semibold leading-[120%] font-nunito  "
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#fff] font-semibold leading-[120%] font-nunito "
              >
                Customer service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#fff] font-semibold leading-[120%] font-nunito "
              >
                Accessibility
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[20px] text-[#fff] font-semibold leading-[120%] font-nunito "
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-[80px] pb-[57px] max-w-[1320px] mx-auto flex justify-between items-center">
        <p className="font-nunito text-[18px] leading-[180%] font-normal text-[#fff]">
          @20201 Innovate.All rights reserved.
        </p>
        <div className="flex gap-x-7">
          <p className="font-nunito text-[18px] leading-[180%] font-normal text-[#fff]">
            Privacy policy
          </p>
          <p className="font-nunito text-[18px] leading-[180%] font-normal text-[#fff]">
            Terms & condition
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
