import React from "react";
import Router from "./router/Router.jsx";
import "./App.css";
import { ImWhatsapp } from "react-icons/im";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { IoMdMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsMenuButtonFill } from "react-icons/bs";
import Footer from "../src/pages/Footer"
import logo from "../src/assets/logo.png"; // Adjust path as needed

function Header() {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-neutral-50 py-4 px-4 md:px-8 shadow-md ">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-auto flex items-center justify-between mb-4 md:mb-0">
          <div className="flex items-center">
            <IoMdMail className="w-10 h-8 mr-2" />
            <span className="text-zinc-800 text-base md:text-xl font-medium font-['Poppins']">
              movemystuffs@gmail.com
            </span>
            <div
              className="flex cursor-pointer"
              onClick={() => navigate("/locations")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate("/locations")}
            >
              <FaMapLocationDot className="w-10 h-8 ml-8 pr-2 " />
              <div className="font-bold text-xl mt-1">
                Our Services Locations
              </div>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden ml-4" onClick={() => navigate("/menu")}>
            <Menu className="h-6 w-6 text-zinc-800" />
          </button>
        </div>

        {/* Right Section: Request Quote */}
        <div className="flex items-center space-x-4">
          <a
            href="/form"
            className="bg-red-700 text-white text-base md:text-2xl font-medium font-['Poppins'] py-2 px-5 md:px-6 rounded-full shadow-lg transition-all duration-300 hover:bg-red-800"
          >
            Request a Quote
          </a>
          <div className="hidden md:flex items-center space-x-2">
            {/* Hamburger icon placeholder - typically handled with JS for mobile menu */}
            <BsMenuButtonFill
              className="w-11 h-9 "
              onClick={() => navigate("/menu")}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function Navigation() {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-rose-200/40 py-4 px-4 md:px-8 flex items-center justify-between flex-wrap">
      <div className="flex items-center mb-4 md:mb-0">
        <img className="w-16 h-16 md:w-20 md:h-20 mr-2" src={logo} alt="Logo" />
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-bold font-['Poppins']">
            <span className="text-red-700">M</span>
            <span className="text-zinc-800">O</span>
            <span className="text-red-700">VE</span>{" "}
            <span className="text-zinc-800">MY</span>{" "}
            <span className="text-red-700">ST</span>
            <span className="text-zinc-800">U</span>
            <span className="text-red-700">FFS</span>
          </h1>
          <p className="text-zinc-800 text-base md:text-xl font-light font-['Poppins']">
            PACKERS AND MOVERS
          </p>
        </div>
      </div>
      <div className="text-red-700 text-xl md:text-2xl font-medium font-['Poppins']">
        MAKE YOUR MOVE EASY
      </div>
      <div className="hidden md:flex items-center space-x-2">
        <BsMenuButtonFill
          className="w-11 h-9 cursor-pointer"
          onClick={() => navigate("/menu")}
        />
      </div>
    </nav>
  );
}

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/917253055609"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 rounded-full shadow-lg p-4 flex items-center space-x-2 transition-all duration-300 hover:bg-green-600"
        >
          <div className="w-7 h-7 relative">
            {/* WhatsApp icon placeholder */}
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <ImWhatsapp className="text-green-500 font-bold" />
            </div>
          </div>
          <span className="text-white text-base font-normal font-['Inter']">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      <Router />
     
      {/* Conditionally render Footer only if route is NOT /menu */}
      {location.pathname !== "/menu" && <Footer />}

    </>
  );
}

export default App;
