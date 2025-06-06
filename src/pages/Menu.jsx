import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

function Menu() {
  const [showMenu, setShowMenu] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!showMenu) {
      navigate("/");
    }
  }, [showMenu, navigate]);

  const navigateAndScroll = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowMenu(false);
  };

  if (!showMenu) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-6xl h-auto bg-white/80 rounded-2xl border border-white/30 p-6 md:p-10 relative shadow-lg flex flex-col justify-center overflow-auto custom-scrollbar" // Adjusted padding
        style={{ maxHeight: '90vh' }} 
      >
        {/* Close Button */}
        <button
          onClick={() => setShowMenu(false)}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-3xl md:text-4xl text-red-600 hover:text-red-800 transition-transform transform hover:scale-110 z-10" // Adjusted size
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        {/* Logo */}
        <div className="text-center mb-8 md:mb-10 mt-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Poppins']"> {/* Adjusted sizes */}
            <span className="text-red-700 underline">Move</span>{" "}
            <span className="text-zinc-800 underline">My Stuffs</span>
          </h1>
        </div>

        {/* Navigation Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 text-black text-center lg:text-left mb-10 flex-grow"> {/* Adjusted gap */}
          {/* Home & Contact Us */}
          <div className="space-y-3 md:space-y-4"> {/* Adjusted space-y */}
            <p
              className="text-3xl md:text-4xl font-semibold font-['Poppins'] hover:text-red-600 cursor-pointer mb-3 md:mb-4" // Adjusted sizes
              onClick={() => navigateAndScroll("/")}
            >
              Home
            </p>
            <p
              className="text-3xl md:text-4xl font-semibold font-['Poppins'] hover:text-red-600 cursor-pointer" // Adjusted sizes
              onClick={() => navigateAndScroll("/contactus")}
            >
              Contact Us
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-3 md:space-y-4"> {/* Adjusted space-y */}
            <h3 className="text-2xl md:text-3xl font-bold font-['Poppins'] underline mb-3 md:mb-4"> {/* Adjusted sizes */}
              Company
            </h3>
            <ul className="space-y-2 text-xl md:text-2xl font-normal font-['Poppins']"> {/* Adjusted sizes */}
              <li>
                <p className="hover:text-red-600 cursor-pointer" onClick={() => navigateAndScroll("/about")}>
                  About Us
                </p>
              </li>
              <li>
                <p className="hover:text-red-600 cursor-pointer" onClick={() => navigateAndScroll("/whychoose")}>
                  Why Choose Us
                </p>
              </li>
              <li>
                <p className="hover:text-red-600 cursor-pointer" onClick={() => navigateAndScroll("/becameoneofus")}>
                  Become a Partner
                </p>
              </li>
              <li>
                <p className="hover:text-red-600 cursor-pointer" onClick={() => navigateAndScroll("/beaware")}>
                  Beware of Frauds
                </p>
              </li>
              <li>
                <p className="hover:text-red-600 cursor-pointer" onClick={() => navigateAndScroll("/workprocess")}>
                  Work Process
                </p>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-3 md:space-y-4"> {/* Adjusted space-y */}
            <h3 className="text-2xl md:text-3xl font-bold font-['Poppins'] underline mb-3 md:mb-4"> {/* Adjusted sizes */}
              Services
            </h3>
            <ul className="space-y-2 text-xl md:text-2xl font-normal font-['Poppins']"> {/* Adjusted sizes */}
              <li>
                <p className="hover:text-red-600 cursor-pointer" onClick={() => navigateAndScroll("/household")}>
                  House Shifting
                </p>
              </li>
              <li>
                <p className="hover:text-red-600 cursor-pointer" onClick={() => navigateAndScroll("/office")}>
                  Office Shifting
                </p>
              </li>
              <li>
                <p className="hover:text-red-600 cursor-pointer" onClick={() => navigateAndScroll("/vehicle")}>
                  Vehicle Transportation
                </p>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Bottom Section: Follow Us and Request a Quote */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 md:mt-12 gap-4 md:gap-6"> {/* Adjusted margin-top and gap */}
          {/* Follow Us */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl md:text-3xl font-medium font-['Fira_Sans'] mb-3"> {/* Adjusted sizes */}
              Follow Us:
            </h2>
            <div className="flex justify-center sm:justify-start gap-3"> {/* Adjusted gap */}
              <a
                href="https://www.facebook.com/people/Move-My-Stuffs-Packers-Movers/100076636426701/"
                target="_blank"
                rel="noreferrer"
                className="p-2 md:p-3 rounded-full bg-black text-white hover:bg-blue-600 transition duration-300" // Adjusted padding
              >
                <FaFacebookF size={22} /> {/* Slightly reduced icon size */}
              </a>
              <a
                href="https://www.instagram.com/move_mystuffs/"
                target="_blank"
                rel="noreferrer"
                className="p-2 md:p-3 rounded-full bg-black text-white hover:bg-pink-500 transition duration-300" // Adjusted padding
              >
                <FaInstagram size={22} /> {/* Slightly reduced icon size */}
              </a>
              <a
                href="https://www.youtube.com/@movemystuffs"
                target="_blank"
                rel="noreferrer"
                className="p-2 md:p-3 rounded-full bg-black text-white hover:bg-red-600 transition duration-300" // Adjusted padding
              >
                <FaYoutube size={22} /> {/* Slightly reduced icon size */}
              </a>
            </div>
          </div>

          {/* Request a Quote Button */}
          <button
            onClick={() => navigateAndScroll("/form")}
            className="w-full sm:w-auto md:w-80 bg-red-700 text-white text-xl md:text-2xl font-medium font-['Poppins'] py-3 px-6 rounded-full shadow-[inset_4px_4px_4px_0px_rgba(0,0,0,0.25)] hover:bg-red-800 transition duration-300" // Adjusted size
          >
            Request a Quote
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Menu;