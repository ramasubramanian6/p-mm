import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  PhoneCall,
  ClipboardList,
  Cog,
  Building,
  MapPin,
  Info,
  UserPlus,
  ShieldAlert,
  Truck,
  Warehouse,
  LayoutGrid,
  Facebook,
  Instagram,
  Youtube,
   Star
} from "lucide-react";

function Menu() {
  const [showMenu, setShowMenu] = useState(true);
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
          className="absolute top-4 right-4 md:top-6 md:right-6 text-3xl text-red-600 hover:text-red-800 transition-transform transform hover:scale-110 z-10"
        >
          ×
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
              <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition" onClick={() => navigateAndScroll("/")}>
                <Home size={20} /> Home
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition" onClick={() => navigateAndScroll("/contactus")}>
                <PhoneCall size={20} /> Contact Us
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition" onClick={() => navigateAndScroll("/form")}>
                <ClipboardList size={20} /> Free Quote
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition" onClick={() => navigateAndScroll("/workprocess")}>
                <Cog size={20} /> Work Process
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition" onClick={() => navigateAndScroll("/review")}>
                < Star size={20} /> Reviews
              </li>
            </ul>
          </div>

          {/* About Company */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-zinc-800 mb-4 underline underline-offset-4">
              About Company
            </h3>
            <ul className="space-y-3 text-lg md:text-xl font-medium">
              <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition" onClick={() => navigateAndScroll("/about")}>
                <Info size={20} /> About Us
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition" onClick={() => navigateAndScroll("/branch")}>
                <MapPin size={20} /> Branches
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition" onClick={() => navigateAndScroll("/whychoose")}>
                <ShieldAlert size={20} /> Why Choose Us
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition" onClick={() => navigateAndScroll("/becameoneofus")}>
                <UserPlus size={20} /> Become a Partner
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition" onClick={() => navigateAndScroll("/beaware")}>
                <ShieldAlert size={20} /> Beware of Frauds
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-zinc-800 mb-4 underline underline-offset-4">
              Our Services
            </h3>
            <ul className="space-y-3 text-lg md:text-xl font-medium">
              <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition" onClick={() => navigateAndScroll("/household")}>
                <Home size={20} /> House Shifting
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition" onClick={() => navigateAndScroll("/office")}>
                <Building size={20} /> Office Shifting
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition" onClick={() => navigateAndScroll("/vehicle")}>
                <Truck size={20} /> Vehicle Transport
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition" onClick={() => navigateAndScroll("/warehouse")}>
                <Warehouse size={20} /> Warehouse Storage
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition" onClick={() => navigateAndScroll("/ourservices")}>
                <LayoutGrid size={20} /> All Services
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
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
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/move_mystuffs/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-zinc-800 text-white hover:bg-pink-600 transition hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@movemystuffs"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-zinc-800 text-white hover:bg-red-600 transition hover:scale-110"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigateAndScroll("/form")}
            className="bg-red-700 text-white text-lg md:text-xl px-6 py-3 rounded-full hover:bg-red-800 transition"
          >
            📩 Request a Free Quote
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Menu;
