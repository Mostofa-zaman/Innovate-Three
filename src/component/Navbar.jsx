import NavLogo from "../assets/navlogo.png";
import Button from "./Button";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="py-[18px]  bg-[#DBD5FB] ">
      <div className="max-w-[1320px] mx-auto flex items-center">
        <div className="w-[25%] ">
          <img src={NavLogo} alt="NavLogo" className="w-[110px]" />
        </div>
        <div className="w-[75%]  flex justify-between items-center ">
          <div>
            <ul className="flex gap-x-[35px]">
              <li>
                <a
                  href="#"
                  className=" flex items-center font-openSans font-semibold text-[18px] text-[#29313D] "
                >
                  Home
                  <span className="pl-2">
                    <FaChevronDown className="" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" flex items-center font-openSans font-semibold text-[18px] text-[#29313D] "
                >
                  About
                  <span className="pl-2">
                    <FaChevronDown className="" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" flex items-center font-openSans font-semibold text-[18px] text-[#29313D] "
                >
                  Service
                  <span className="pl-2">
                    <FaChevronDown className="" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" flex items-center font-openSans font-semibold text-[18px] text-[#29313D] "
                >
                  Portfolio
                  <span className="pl-2">
                    <FaChevronDown className="" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" flex items-center font-openSans font-semibold text-[18px] text-[#29313D] "
                >
                  Price
                  <span className="pl-2">
                    <FaChevronDown className="" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" flex items-center font-openSans font-semibold text-[18px] text-[#29313D] "
                >
                  Blog
                  <span className="pl-2">
                    <FaChevronDown className="" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Button buttonName={"Contact Us"} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
