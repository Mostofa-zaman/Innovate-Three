import { useState } from "react";
import NavLogo from "../assets/navlogo.png";
import Button from "./Button";
import { FaChevronDown, FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="py-[18px] bg-[#DBD5FB] relative z-50">
        <div className="max-w-[1320px] mx-auto px-4 flex items-center justify-between">

          {/* Logo */}
          <img src={NavLogo} alt="NavLogo" className="w-[110px]" />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-x-[40px]">
            <ul className="flex gap-x-[35px]">
              {["Home", "About", "Service", "Portfolio", "Price", "Blog"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="flex items-center font-openSans font-semibold text-[18px] text-[#29313D]"
                    >
                      {item}
                      <FaChevronDown className="ml-2" />
                    </a>
                  </li>
                )
              )}
            </ul>
            <Button buttonName={"Contact Us"} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-[24px] text-[#29313D]"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-[#DBD5FB] z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex items-center justify-between p-4 border-b">
          <img src={NavLogo} alt="NavLogo" className="w-[100px]" />
          <button onClick={() => setOpen(false)} className="text-[22px]">
            <FaXmark />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-y-6 p-6">
          {["Home", "About", "Service", "Portfolio", "Price", "Blog"].map(
            (item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="flex items-center justify-between font-openSans font-semibold text-[18px] text-[#29313D]"
                >
                  {item}
                  <FaChevronDown />
                </a>
              </li>
            )
          )}
        </ul>

        <div className="px-6">
          <Button buttonName={"Contact Us"} className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
