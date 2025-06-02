import React, { useState } from "react";
import { Menu, Search } from "lucide-react"; // install lucide-react: npm install lucide-react
import logo from "../../src/assets/logo.png";
import { IoMdMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import Locations from "../../src/pages/Locations.jsx";
import { useNavigate } from "react-router";
import { BsMenuButtonFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0); // State to manage the current slide index
  const navigate = useNavigate();

  // Array of image sources for the slider
  const slides = [
    "https://placehold.co/812x565", // Active
    "https://placehold.co/652x485", // Upcoming 1
    "https://placehold.co/652x485", // Upcoming 2
    "https://placehold.co/492x405", // Far 1
    "https://placehold.co/492x405", // Far 2
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <header className="w-full bg-neutral-50 py-4 px-4 md:px-8 shadow-md">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-auto flex items-center justify-between mb-4 md:mb-0">
            <div className="flex items-center">
              <IoMdMail className="w-10 h-8 mr-2" />
              <span className="text-zinc-800 text-base md:text-xl font-medium font-['Poppins']">
                info@movemystuffs@gmail.com
              </span>
              <div className="flex" onClick={() => navigate("/locations")}>
                <FaMapLocationDot className="w-10 h-8 ml-8 pr-2 " />
                <div className="font-bold text-xl mt-1">
                  Our Services Locaions
                </div>
              </div>
            </div>

            {/* Mobile Menu Icon */}
            <button className="md:hidden ml-4">
              <Menu
                className="h-6 w-6 text-zinc-800"
                onClick={() => {
                  navigate("/menu");
                }}
              />
            </button>
          </div>

          {/* Right Section: Search + Quote Button */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="bg-red-700 text-white text-base md:text-2xl font-medium font-['Poppins'] py-2 px-5 md:px-6 rounded-full shadow-lg transition-all duration-300 hover:bg-red-800"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </header>
      {/* Main Navigation */}
      <nav className="w-full bg-rose-200/40 py-4 px-4 md:px-8 flex items-center justify-between flex-wrap">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            className="w-16 h-16 md:w-20 md:h-20 mr-2"
            src={logo}
            alt="Logo"
          />
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
          {/* Hamburger icon placeholder - typically handled with JS for mobile menu */}
          <BsMenuButtonFill
            className="w-11 h-9 "
            onClick={() => navigate("/menu")}
          />
        </div>
      </nav>
      {/* Main Content Area - Slider & Why Choose Us */}
      <main className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Image Slider Section */}
        <section
          className="relative w-full overflow-hidden rounded-xl shadow-lg mb-12"
          style={{ height: "565px" }}
        >
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* Slider Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2 rounded-full bg-black/50">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                  currentSlide === index
                    ? "bg-violet-500"
                    : "bg-neutral-400 opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slider Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full focus:outline-none transition-colors duration-300 hover:bg-black/75"
            aria-label="Previous slide"
          >
            &#9664; {/* Left arrow */}
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full focus:outline-none transition-colors duration-300 hover:bg-black/75"
            aria-label="Next slide"
          >
            &#9654; {/* Right arrow */}
          </button>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 bg-white rounded-xl shadow-lg px-4">
          <h2 className="text-center text-3xl md:text-6xl font-bold font-['Poppins'] text-red-700 mb-8 [text-shadow:7px_4px_4px_rgb(0_0_0/_0.25)]">
            WHY CHOOSE MOVE MY STUFFS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone-300 rounded-xl shadow-md p-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                {/* Icon Placeholder 1 */}
                <div className="w-8 h-8 relative">
                  <div className="w-3.5 h-3 absolute bg-blue-500" />
                  <div className="w-4 h-4 absolute bg-blue-500 top-2" />
                </div>
              </div>
              <h3 className="text-slate-800 text-lg font-normal font-['Inter'] mb-2">
                10+ Years Experience
              </h3>
              <p className="text-gray-600 text-base font-normal font-['Inter']">
                Reliable service with a proven track record.
              </p>
            </div>

            <div className="bg-stone-300 rounded-xl shadow-md p-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                {/* Icon Placeholder 2 */}
                <div className="w-8 h-8 relative">
                  <div className="w-5 h-7 absolute bg-green-500" />
                  <div className="w-2 h-1.5 absolute bg-green-500 top-3 left-3" />
                </div>
              </div>
              <h3 className="text-slate-800 text-lg font-normal font-['Inter'] mb-2">
                GST Registered & I.B.A Approved
              </h3>
              <p className="text-gray-600 text-base font-normal font-['Inter']">
                Certified and trusted by industry standards.
              </p>
            </div>

            <div className="bg-stone-300 rounded-xl shadow-md p-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                {/* Icon Placeholder 3 */}
                <div className="w-8 h-8 relative">
                  <div className="w-7 h-7 absolute bg-purple-500" />
                  <div className="w-2.5 h-7 absolute bg-purple-500 left-4" />
                  <div className="w-7 h-0 absolute bg-purple-500 top-4" />
                </div>
              </div>
              <h3 className="text-slate-800 text-lg font-normal font-['Inter'] mb-2">
                Pan India Network
              </h3>
              <p className="text-gray-600 text-base font-normal font-['Inter']">
                Extensive reach with 10 branches across India.
              </p>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-12 bg-stone-100/50 rounded-xl shadow-lg px-4 mt-12">
          <h2 className="text-center text-3xl md:text-6xl font-bold font-['Poppins'] underline mb-4">
            <span className="text-red-700">OUR</span>{" "}
            <span className="text-zinc-800">SERVICES</span>
          </h2>
          <p className="text-center text-black text-xl md:text-2xl font-bold font-['Fira_Sans'] mb-8">
            We offer a range of moving services designed to meet all of your
            relocation needs!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1: Local Shifting */}
            <div className="bg-white/75 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 relative mb-4">
                {/* Complex icon, simplified for example */}
                <div className="w-14 h-12 bg-stone-200" />
                <div className="w-9 h-7 bg-red-500 absolute top-0" />
                <div className="w-9 h-7 bg-red-500 absolute top-0 right-0" />
              </div>
              <h3 className="text-zinc-800 text-2xl md:text-3xl font-normal font-['Fira_Sans'] mb-2">
                Local Shifting
              </h3>
              <p className="text-zinc-800 text-base md:text-xl font-normal font-['Fira_Sans']">
                Our team arrived on time packed everything carefully & ensured a
                smooth & safe move within the city.
              </p>
            </div>

            {/* Service Card 2: OutStation Shifting */}
            <div className="bg-white/75 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 relative mb-4 overflow-hidden">
                {/* Complex icon, simplified for example */}
                <div className="w-10 h-8 bg-gray-500 absolute top-4 left-4" />
                <div className="w-5 h-6 bg-red-500 absolute top-6 left-1" />
              </div>
              <h3 className="text-zinc-800 text-2xl md:text-3xl font-normal font-['Fira_Sans'] mb-2">
                OutStation Shifting
              </h3>
              <p className="text-zinc-800 text-base md:text-xl font-normal font-['Fira_Sans']">
                Our team was professional & handled our belongings with great
                care. Everything was packed and delivered on time without any
                damage.
              </p>
            </div>

            {/* Service Card 3: Transport Service */}
            <div className="bg-white/75 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <img
                className="w-12 h-12 mb-4"
                src="https://placehold.co/50x50"
                alt="Transport Icon"
              />
              <h3 className="text-zinc-800 text-2xl md:text-3xl font-normal font-['Fira_Sans'] mb-2">
                Transport Service
              </h3>
              <p className="text-zinc-800 text-base md:text-xl font-normal font-['Fira_Sans']">
                Our expert team ensures your vehicles are handled with care and
                delivered without any scratch.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications and Trust Section */}
        <section className="py-12 bg-white rounded-xl shadow-lg px-4 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <img
                className="w-32 h-32 md:w-40 md:h-36 mb-4"
                src="https://placehold.co/152x149"
                alt="ISO Certified"
              />
              <h3 className="text-neutral-800 text-xl font-normal font-['Poppins'] leading-tight mb-2">
                ISO 9001:2015
              </h3>
              <p className="text-black text-base font-normal font-['Poppins'] leading-tight">
                Certificate No: 2713SAFV2021, for Courier Services, Packers &
                Movers, Transportation and Storage of Goods.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <img
                className="w-32 h-32 md:w-40 md:h-36 mb-4"
                src="https://placehold.co/152x150"
                alt="5 Star Ratings"
              />
              <h3 className="text-neutral-800 text-xl font-normal font-['Poppins'] leading-tight mb-2">
                5 Star Ratings
              </h3>
              <p className="text-black text-base font-normal font-['Poppins'] leading-tight">
                We have been rated 5 stars by our valuable clients in multiple
                platforms like Google, Facebook etc.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              {/* Icon placeholder for Registered Trademark */}
              <div className="w-40 h-40 rounded-full border-[10px] border-orange-600 flex items-center justify-center mb-4">
                <img
                  className="w-32 h-8"
                  src="https://placehold.co/154x44"
                  alt="Trademark Logo"
                />
              </div>
              <h3 className="text-neutral-800 text-xl font-normal font-['Poppins'] leading-tight mb-2">
                Registered Trademark
              </h3>
              <p className="text-black text-base font-normal font-['Poppins'] leading-tight">
                Certificate No 4939471, Our Logo is registered under the Trade
                Marks Act 1999, Section 23 (2), Rule 56 (1).
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <img
                className="w-32 h-32 md:w-40 md:h-40 mb-4"
                src="https://placehold.co/152x152"
                alt="10 Years of Trust"
              />
              <h3 className="text-neutral-800 text-xl font-normal font-['Poppins'] leading-tight mb-2">
                10 Years of Trust
              </h3>
              <p className="text-black text-base font-normal font-['Poppins'] leading-tight">
                Since 2007, we are at your service expanding all over the
                country to be one of the best Packers and Movers company.
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6">
        <a
          href="https://wa.me/917253055609" // Example WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 rounded-full shadow-lg p-4 flex items-center space-x-2 transition-all duration-300 hover:bg-green-600"
        >
          <div className="w-6 h-6 relative">
            {/* WhatsApp icon placeholder */}
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              {/* You can replace this with an actual WhatsApp SVG icon */}
              <span className="text-green-500 font-bold">WA</span>
            </div>
          </div>
          <span className="text-white text-base font-normal font-['Inter']">
            Chat on WhatsApp
          </span>
        </a>
      </div>
      {/* Footer */}
      <footer className="w-full bg-zinc-800 text-gray-400 py-8 px-4 md:px-8 mt-12">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h3 className="text-gray-200 text-xl md:text-3xl font-normal font-['Poppins'] leading-9 mb-2">
              Registered Address
            </h3>
            <p className="text-base md:text-lg">
              Office No. 123, ABC Tower, XYZ Road, City, State - 123456
            </p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            {/* Social Media Icons (placeholders) */}
            <a
              href="#"
              aria-label="Facebook"
              className="w-7 h-7 bg-white rounded-full"
            />
            <a
              href="#"
              aria-label="Twitter"
              className="w-7 h-7 bg-white rounded-full"
            />
            <a
              href="#"
              aria-label="Instagram"
              className="w-7 h-7 bg-white rounded-full"
            />
          </div>
          <p className="text-sm md:text-xl font-normal font-['Poppins']">
            © 2025 Move My Stuffs. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
