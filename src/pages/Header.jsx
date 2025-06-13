import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { HiMenu } from "react-icons/hi"; // Using HiMenu for the hamburger icon
import logoSrc from "../../src/assets/New folder/icon.png"

const Header = () => { // Accept logoSrc as a prop
  const navigate = useNavigate();

  return (
    <header className="w-full bg-neutral-50 shadow-md font-[Poppins] ">
      {/* Top Bar: Email, Our Service Locations, Phone, Request a Quote, Menu */}
      <div className="w-full mx-auto py-1 px-2 sm:px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">

        {/* Left Group: Email & Our Service Locations */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 ">
          {/* Email */}
          <div className="flex items-center gap-1">
            <IoMdMail className="w-4 h-4 text-zinc-800 hover:text-blue-500" />
            <span className="text-xs md:text-sm font-medium text-zinc-800 whitespace-nowrap hover:text-blue-500">
           movemystuffschennai@gmail.com
            </span>
          </div>

          {/* Our Service Locations */}
          <div
            className="flex items-center gap-1 cursor-pointer hover:text-red-700 transition-colors "
            onClick={() => navigate("/locations")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate("/locations")}
          >
            <FaMapLocationDot className="w-4 h-4 text-zinc-800  hover:text-green-500" />
            <span className="text-xs md:text-sm font-medium text-zinc-800 whitespace-nowrap hover:text-green-500">
              Our Service Locations
            </span>
          </div>
        </div>

        {/* Right Group: Phone, Request a Quote, Menu */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Phone */}
          <div className="flex items-center gap-1">
            <BsTelephoneFill className="w-4 h-4 text-green-700" />
            <span className="text-sm md:text-base font-semibold text-black whitespace-nowrap">
              +91 9087893000
            </span>
          </div>

          {/* Request a Quote Button */}
          <button
            onClick={() => navigate("/form")}
            className="bg-red-700 text-white text-xs md:text-sm lg:text-base font-medium py-1 px-3 md:px-4 rounded-full shadow-lg hover:bg-red-800 transition-all duration-300 whitespace-nowrap"
          >
            Request a Quote
          </button>

          {/* Hamburger Menu Icon */}
          <button
            className="p-1 rounded-md hover:bg-gray-100 md:ml-2 "
            onClick={() => navigate("/menu")}
            aria-label="Open menu"
          >
            <HiMenu className="h-6 w-6 text-zinc-800" />
          </button>
        </div>
      </div>

      {/* Bottom Bar: Logo & Taglines - Hidden on small screens, shown from md and up */}
      <div className="hidden md:flex max-w-screen-xl mx-auto py-1 px-2 sm:px-4 md:px-8 items-center justify-between border-t border-gray-200">
        {/* Logo */}
        <div className="flex-shrink-0 mb-1 sm:mb-0 cursor-pointer" onClick={()=>{navigate("/")}}>
          <img
            className="h-8 sm:h-10 w-auto max-w-[10rem] object-contain"
            src={logoSrc}
            alt="Move My Stuffs Logo"
          />
        </div>

        {/* Taglines */}
        <div className="flex flex-wrap justify-center sm:justify-end gap-x-2 gap-y-0.5 text-zinc-800 text-xs sm:text-xs font-normal text-center sm:text-left">
          <span
            className="cursor-pointer hover:text-red-700 transition-colors whitespace-nowrap text-sm"
            onClick={() => navigate("/beaware")}
          >
            Beware of Online Frauds
          </span>
          <span className="font-bold hidden sm:inline text-sm">/</span>
          <span
            className="cursor-pointer hover:text-red-700 transition-colors whitespace-nowrap text-sm"
            onClick={() => navigate("/becameoneofus")}
          >
            Become a Branch Partner
          </span>
          <span className="font-bold hidden sm:inline text-sm">/</span>
          <span className="whitespace-nowrap text-red-600 text-sm">Since 2014 at your service</span>
        </div>
      </div>
    </header>
  );
};

export default Header;