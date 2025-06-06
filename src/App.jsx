import React from "react";
import Router from "./router/Router.jsx";
import "./App.css";
import { ImWhatsapp } from "react-icons/im";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { IoMdMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsMenuButtonFill } from "react-icons/bs";
import Footer from "../src/pages/Footer";
import { BrowserRouter } from "react-router-dom";
import logo from "../src/assets/logo.png"; // Adjust path as needed
import Header from "../src/pages/Header"

function App() {
  const location = useLocation(); // <-- move here

  return (
    <>
      <Header />
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919087893000" // <-- Use full number with country code, no spaces
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 rounded-full shadow-lg p-4 flex items-center space-x-2 transition-all duration-300 hover:bg-green-600"
        >
          <div className="w-7 h-7 relative">
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
