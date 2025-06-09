import React, { useState, useEffect } from "react"; // useEffect is no longer needed for navigation here
import { useNavigate } from "react-router-dom";
import { FaTimes, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

function Menu() {
  const [showMenu, setShowMenu] = useState(true); // Manages the menu's internal visibility/animation
  const navigate = useNavigate();

  const navigateAndScroll = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowMenu(false);
  };

  if (!showMenu) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-[1400px] h-auto bg-white/90 backdrop-blur-md rounded-3xl border border-gray-200 p-6 md:p-12 relative shadow-2xl overflow-auto"
        style={{ maxHeight: "92vh" }}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setShowMenu(false);
            navigate("/");
          }}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-3xl md:text-4xl text-red-600 hover:text-red-800 transition-transform transform hover:scale-110 z-10"
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        {/* Logo & Title */}
        <div className="text-center mb-10 mt-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-['Poppins'] tracking-tight leading-tight">
            <span className="text-red-700 underline">Move</span>{" "}
            <span className="text-zinc-800 underline">My Stuffs</span>
          </h1>
          <p className="mt-2 text-sm text-gray-600 tracking-wide">
            Your Trusted Packers & Movers in India
          </p>
        </div>

        {/* Grid Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center lg:text-left mb-10 text-black">
          {/* Quick Access */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-zinc-800 mb-4 underline underline-offset-4">
              Quick Access
            </h3>
            <ul className="space-y-3 text-lg md:text-xl font-medium">
              <li>
                <p
                  onClick={() => navigateAndScroll("/")}
                  className="hover:text-red-600 cursor-pointer transition hover:scale-105"
                >
                  🏠 Home
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigateAndScroll("/contactus")}
                  className="hover:text-red-600 cursor-pointer transition hover:scale-105"
                >
                  📞 Contact Us
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigateAndScroll("/form")}
                  className="hover:text-red-600 cursor-pointer transition hover:scale-105"
                >
                  📋 Free Quote
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigateAndScroll("/workprocess")}
                  className="hover:text-red-600 cursor-pointer transition hover:scale-105"
                >
                  ⚙️ Work Process
                </p>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-zinc-800 mb-4 underline underline-offset-4">
              About Company
            </h3>
            <ul className="space-y-3 text-lg md:text-xl font-medium">
              <li>
                <p
                  onClick={() => navigateAndScroll("/about")}
                  className="hover:text-red-600 cursor-pointer hover:scale-105 transition"
                >
                  🏢 About Us
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigateAndScroll("/branch")}
                  className="hover:text-red-600 cursor-pointer hover:scale-105 transition"
                >
                  📍 Branches
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigateAndScroll("/whychoose")}
                  className="hover:text-red-600 cursor-pointer hover:scale-105 transition"
                >
                  🔍 Why Choose Us
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigateAndScroll("/becameoneofus")}
                  className="hover:text-red-600 cursor-pointer hover:scale-105 transition"
                >
                  🤝 Become a Partner
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigateAndScroll("/beaware")}
                  className="hover:text-red-600 cursor-pointer hover:scale-105 transition"
                >
                  🚫 Beware of Frauds
                </p>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-zinc-800 mb-4 underline underline-offset-4">
              Our Services
            </h3>
            <ul className="space-y-3 text-lg md:text-xl font-medium">
              <li>
                <p
                  onClick={() => navigateAndScroll("/household")}
                  className="hover:text-red-600 cursor-pointer hover:scale-105 transition"
                >
                  🏠 House Shifting
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigateAndScroll("/office")}
                  className="hover:text-red-600 cursor-pointer hover:scale-105 transition"
                >
                  🏢 Office Shifting
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigateAndScroll("/vehicle")}
                  className="hover:text-red-600 cursor-pointer hover:scale-105 transition"
                >
                  🚗 Vehicle Transport
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigateAndScroll("/warehouse")}
                  className="hover:text-red-600 cursor-pointer hover:scale-105 transition"
                >
                  📦 Warehouse Storage
                </p>
              </li>
              <li>
                <p
                  onClick={() => navigateAndScroll("/ourservices")}
                  className="hover:text-red-600 cursor-pointer hover:scale-105 transition"
                >
                  🛠️ All Services
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer: Socials & CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-6">
          {/* Socials */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.facebook.com/people/Move-My-Stuffs-Packers-Movers/100076636426701/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-zinc-800 text-white hover:bg-blue-600 transition hover:scale-110"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/move_mystuffs/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-zinc-800 text-white hover:bg-pink-600 transition hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@movemystuffs"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-zinc-800 text-white hover:bg-red-600 transition hover:scale-110"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => navigateAndScroll("/form")}
            className="bg-red-700 text-white text-lg md:text-xl px-6 py-3 rounded-full hover:bg-red-800 transition hover:scale-105"
          >
            📩 Request a Free Quote
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Menu;
