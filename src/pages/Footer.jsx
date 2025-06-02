import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-zinc-900 text-gray-300 py-16 px-6 md:px-12 mt-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-0 text-center md:text-left">
        
        {/* Contact Info */}
        <div className="md:w-1/3 space-y-5">
          <h3 className="text-gray-100 text-3xl font-semibold font-['Poppins'] mb-2">
            Contact Us
          </h3>
          <p className="text-lg md:text-xl leading-relaxed">
            <span className="font-semibold">Sales & Marketing:</span><br />
            <a
              href="tel:+919087893000"
              className="hover:text-red-600 transition-colors"
            >
              +91 90878 93000
            </a>
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            <span className="font-semibold">Help Line:</span><br />
            <a
              href="tel:+917253055609"
              className="hover:text-red-600 transition-colors"
            >
              +91 72530 55609
            </a>
          </p>
        </div>

        {/* Registered Address */}
        <div className="md:w-1/3">
          <h3 className="text-gray-100 text-3xl font-semibold font-['Poppins'] mb-5">
            Registered Address
          </h3>
          <p className="text-lg md:text-xl leading-relaxed max-w-sm mx-auto md:mx-0">
            No 3A, Mettu Kalazni Street, <br /> Adambakkam, Chennai - 600088
          </p>
        </div>

        {/* Social Icons & Copyright */}
        <div className="md:w-1/3 flex flex-col items-center md:items-end justify-between h-full">
          <div className="flex space-x-8 mb-8">
            <a
              href="https://www.facebook.com/people/Move-My-Stuffs-Packers-Movers/100076636426701/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition-colors"
            >
              <FaFacebookF className="text-white text-xl" />
            </a>
            <a
              href="https://www.instagram.com/move_mystuffs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 hover:bg-pink-500 transition-colors"
            >
              <FaInstagram className="text-white text-xl" />
            </a>
            <a
              href="https://www.youtube.com/@movemystuffs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-600 transition-colors"
            >
              <FaYoutube className="text-white text-xl" />
            </a>
          </div>
          <p className="text-sm md:text-base font-normal font-['Poppins'] opacity-70">
            © 2025 Move My Stuffs. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
