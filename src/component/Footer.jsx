import FooterLogo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#19153D]">
      {/* Top */}
      <div className="max-w-[1320px] mx-auto px-4 pt-[80px] lg:pt-[140px] pb-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Logo & Text */}
        <div className="lg:col-span-2 text-center lg:text-left">
          <img src={FooterLogo} alt="FooterLogo" className="w-[110px] mx-auto lg:mx-0" />
          <p className="font-normal text-[#fff] pt-[30px] max-w-[520px] mx-auto lg:mx-0">
            Install any demo or template with a single click. You can mix and
            match all the demos & templates. Every demo can be turned into one
            or multi-page.
          </p>
        </div>

        {/* Features */}
        <div>
          <ul className="flex flex-col items-center lg:items-start gap-y-[18px]">
            <li className="mb-[8px]">
              <a className="text-[22px] text-white font-semibold font-nunito">
                Features
              </a>
            </li>
            {["Home", "About", "Benifit", "Pricing", "Blog"].map((item, i) => (
              <li key={i}>
                <a className="text-[18px] text-white font-semibold font-nunito">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <ul className="flex flex-col items-center lg:items-start gap-y-[18px]">
            <li className="mb-[8px]">
              <a className="text-[22px] text-white font-semibold font-nunito">
                Products
              </a>
            </li>
            {["Task Management", "Company growth", "Time tracking"].map(
              (item, i) => (
                <li key={i}>
                  <a className="text-[18px] text-white font-semibold font-nunito">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Support */}
        <div>
          <ul className="flex flex-col items-center lg:items-start gap-y-[18px]">
            <li className="mb-[8px]">
              <a className="text-[22px] text-white font-semibold font-nunito">
                Support
              </a>
            </li>
            {["Customer service", "Accessibility", "Contact us"].map(
              (item, i) => (
                <li key={i}>
                  <a className="text-[18px] text-white font-semibold font-nunito">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20">
        <div className="max-w-[1320px] mx-auto px-4 py-[30px] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-nunito text-[16px] md:text-[18px] text-white">
            ©20201 Innovate. All rights reserved.
          </p>

          <div className="flex gap-x-6">
            <p className="font-nunito text-[16px] md:text-[18px] text-white">
              Privacy policy
            </p>
            <p className="font-nunito text-[16px] md:text-[18px] text-white">
              Terms & condition
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
