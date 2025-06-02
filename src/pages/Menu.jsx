import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Menu() {
  const [showMenu, setShowMenu] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!showMenu) {
      navigate("/");
    }
  }, [showMenu, navigate]);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-red-100 to-white flex items-center justify-center p-4 relative font-['Fira_Sans']">
      <div className="w-full max-w-[1200px] bg-white/40 backdrop-blur-md border border-white/30 rounded-xl p-8 md:p-12 shadow-lg relative transition-all duration-500">

        {/* Close Button */}
        <div className="absolute top-4 right-4 flex items-center gap-4">
          <button
            onClick={() => setShowMenu(false)}
            className="text-3xl text-red-600 hover:text-red-800 transition-transform transform hover:scale-110"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold font-['Poppins'] text-red-700">
            Move <span className="text-black">My Stuffs</span>
          </h1>
        </div>

        {/* Navigation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-black text-center text-2xl md:text-3xl font-medium mb-16">
          <div className="space-y-6">
            <p onClick={() => handleNavigate("/")} className="hover:text-red-600 cursor-pointer">Home</p>
            <p onClick={() => handleNavigate("/branch")} className="hover:text-red-600 cursor-pointer">Branch Locations</p>
            <p onClick={() => handleNavigate("/contactus")} className="hover:text-red-600 cursor-pointer">Contact Us</p>
          </div>
          <div className="space-y-6">
            <p onClick={() => handleNavigate("/about")} className="hover:text-red-600 cursor-pointer">About Us</p>
            <p onClick={() => handleNavigate("/whychoose")} className="hover:text-red-600 cursor-pointer">Why Choose Us</p>
            <p onClick={() => handleNavigate("/ourservices")} className="hover:text-red-600 cursor-pointer">Our Services</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-zinc-800">Follow Us</h2>
          <div className="flex justify-center gap-6">
            <a href="https://www.facebook.com/people/Move-My-Stuffs-Packers-Movers/100076636426701/" className="bg-black text-white p-3 rounded-full hover:bg-red-600 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://www.instagram.com/move_mystuffs/" className="bg-black text-white p-3 rounded-full hover:bg-red-600 transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.youtube.com/@movemystuffs" className="bg-black text-white p-3 rounded-full hover:bg-red-600 transition">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Menu;
 