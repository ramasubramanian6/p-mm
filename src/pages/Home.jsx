import React, { useState, useEffect } from "react";
import { Menu, Search } from "lucide-react";
import logo from "../../src/assets/logo.png";
import Footer from "../../src/pages/Footer";
import { useNavigate } from "react-router";
import Branch from "../pages/Branch";
import ve from "../../src/assets/home/ve.jpg"
import vehicle from "../../src/assets/home/vehicle.png";
import homeimage from "../../src/assets/home/home.png";
import homeimage2 from "../../src/assets/home/2.jpg"
import office from "../../src/assets/home/office.png";
import vehicle2 from "../../src/assets/home/vehicle2.png";
import office2shifting from "../../src/assets/home/office-shifting.jpg";
import img1 from "../../src/assets/icon/img1.png";
import img2 from "../../src/assets/icon/img2.png";
import iso from "../../src/assets/icon/iso.png";
import logo1 from "../../src/assets/icon/logo1.png";
import icon1 from "../../src/assets/New folder/icon2.png";
import HomeAbout from "../pages/HomeAbout";
import { motion } from "framer-motion";
import WorkProcess from "../pages/WorkProcess";
import warehouse from "../../src/assets/home/warehouse.jpg";
import local from "../../src/assets/home/local.jpg";
import outstation from "../../src/assets/office/2.jpg";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [ homeimage2, office, office2shifting,ve, vehicle2,];

  const slideContent = [
    {
      title: "Home Relocation Services",
      subtitle: "Safe & Secure Moving",
      description:
        "We ensure your household items reach the new destination on time and damage-free.",
    },
    {
      title: "Office Relocation Experts",
      subtitle: "Minimal Downtime, Maximum Efficiency",
      description:
        "We relocate office spaces with precision and planning, keeping your business on track.",
    },
    {
      title: "All India Network",
      subtitle: "10+ Branches Across India",
      description:
        "From Chennai to Delhi, we move your stuff safely anywhere in India.",
    },
    {
      title: "Move My Stuffs",
      subtitle: "Trusted Packers and Movers Since 2014",
      description:
        "Reliable local and national relocation with 10+ years of excellence.",
    },
    {
      title: "Professional Packing",
      subtitle: "We Handle With Care",
      description:
        "From bubble wrap to moving blankets — your items are protected every step of the way.",
    }
    
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
    }),
  };

  const services = [
    {
      title: "Household Shifting",
      description:
        "We pack and move your household items safely, ensuring zero damage and timely delivery.",
      image: homeimage,
      link: "/household",
    },
    {
      title: "Office Goods Shifting",
      description:
        "We ensure smooth relocation of office equipment, documents, and furniture with minimal disruption.",
      image: office,
      link: "/office",
    },
    {
      title: "Car & Bike Relocation",
      description:
        "We transport your vehicle safely using specialized carriers and ensure timely delivery.",
      image: vehicle,
      link: "/vehicle",
    },
    {
      title: "Local Shifting",
      description:
        "Our team arrived on time, packed everything carefully & ensured a smooth & safe move within the city.",
      image: local,
      link: "/household",
    },
    {
      title: "Outstation Shifting",
      description:
        "Our team handled belongings with care. Everything was packed and delivered on time without damage.",
      image: outstation,
      link: "/office",
    },
    {
      title: "Warehouse & Storage",
      description:
        "Safe and secure short- and long-term storage options for all your belongings.",
      image: warehouse,
      link: "/warehouse", // You can replace this with a specific path like `/warehouse` if you have it
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      {/* Main Navigation */}
      <nav className="w-full bg-rose-200/40 py-4 px-4 md:px-8 flex items-center justify-between flex-wrap shadow-sm">
        {/* Left: Logo and Brand */}
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 md:w-full md:h-20  md:object-cover "
            src={icon1}
            alt="Logo"
          />

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <p className="text-zinc-800 text-lg md:text-xl font-semibold tracking-wide font-poppins">
              PACKERS AND MOVERS
            </p>
          </motion.div>
        </div>

        {/* Right: Slogan */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="text-red-700 text-lg md:text-2xl font-medium font-poppins transition-all"
        >
          MAKE YOUR MOVE EASY
        </motion.div>
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
              <div
                key={index}
                className="w-full flex-shrink-0 relative h-[565px]"
              >
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
                {/* Content Over Image */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 bg-black/40 text-white">
                  <h2 className="text-4xl md:text-6xl font-bold font-['Poppins'] mb-4">
                    {slideContent[index].title}
                  </h2>
                  <p className="text-lg md:text-2xl font-medium max-w-2xl">
                    {slideContent[index].subtitle}
                  </p>
                  <p className="mt-4 text-base md:text-lg max-w-2xl">
                    {slideContent[index].description}
                  </p>
                  <button
                    onClick={() => navigate("/form")}
                    className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-lg rounded-full shadow-lg"
                  >
                    Get Free Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2 rounded-full bg-black/50">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                  currentSlide === index
                    ? "bg-red-600"
                    : "bg-neutral-400 opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/75"
            aria-label="Previous slide"
          >
            &#9664;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/75"
            aria-label="Next slide"
          >
            &#9654;
          </button>
                
        </section>

        <section className="py-12 bg-white rounded-xl shadow-lg px-4">
          <h2 className="text-center text-3xl md:text-6xl font-bold font-['Poppins'] text-red-700 mb-8 [text-shadow:7px_4px_4px_rgb(0_0_0/_0.25)]">
            WHY CHOOSE MOVE MY STUFFS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Experience */}
            <div className="bg-stone-300 rounded-xl shadow-md p-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                  />
                </svg>
              </div>
              <h3 className="text-slate-800 text-lg font-normal font-['Inter'] mb-2">
                10+ Years Experience
              </h3>
              <p className="text-gray-600 text-base font-normal font-['Inter']">
                Reliable service with a proven track record.
              </p>
            </div>

            {/* GST & IBA */}
            <div className="bg-stone-300 rounded-xl shadow-md p-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m1-7H8a2 2 0 00-2 2v16l6-3 6 3V5a2 2 0 00-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-slate-800 text-lg font-normal font-['Inter'] mb-2">
                GST Registered & I.B.A Approved
              </h3>
              <p className="text-gray-600 text-base font-normal font-['Inter']">
                Certified and trusted by industry standards.
              </p>
            </div>

            {/* Pan India */}
            <div className="bg-stone-300 rounded-xl shadow-md p-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2a10 10 0 00-7.94 16.06L4 22l3.94-1.06A10 10 0 1012 2z"
                  />
                </svg>
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
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="bg-white/75 rounded-xl shadow-lg p-6 flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariant}
                onClick={() => navigate(service.link)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 object-contains mb-4 rounded-2xl "
                />
                <h3 className="text-zinc-800 text-2xl md:text-3xl font-normal font-['Fira_Sans'] mb-2">
                  {service.title}
                </h3>
                <p className="text-zinc-800 text-base md:text-xl font-normal font-['Fira_Sans']">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <HomeAbout />

        {/* Certifications and Trust Section */}
        <section className="py-12 bg-white rounded-xl shadow-lg px-4 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <img
                className="w-32 h-32 md:w-40 md:h-36 mb-4"
                src={iso}
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
                src={img1}
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

              <img
                className="w-40 h-40 object-contain"
                src={logo1}
                alt="Trademark Logo"
              />

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
                src={img2}
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
         <WorkProcess />
       
      </main>
    </div>
  );
}

export default Home;
