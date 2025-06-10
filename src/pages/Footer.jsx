import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFormData } from "../pages/redux/formSlice"; // adjust path if needed
import { Star } from "lucide-react"; // Importing Star icon from lucide-react

const allCities = [
  "Chennai", "Coimbatore", "Madurai", "Trichy", "Salem", "Tirunelveli", "Erode", "Vellore", "Thoothukudi",
  "Bangalore",
  "Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur", "Amravati", "Jalgaon", "Kolhapur",
  "Delhi", "Noida", "Gurgaon", "Faridabad", "Ghaziabad",
  "Hyderabad", "Warangal", "Karimnagar", "Nizamabad", "Khammam",
  "Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Kharagpur",
  "Ahmedabad",
  "Indore", "Bhopal", "Gwalior", "Jabalpur", "Ujjain", "Sagar",
  "Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner", "Ajmer", "Bharatpur",
  "Lucknow", "Kanpur", "Varanasi", "Allahabad", "Agra", "Ghaziabad", "Meerut", "Aligarh", "Firozabad", "Mathura", "Etah", "Mainpuri", "Kasganj", "Hathras", "Etawah",
  "Dehradun", "Haridwar", "Rudrapur", "Haldwani",
  "Vijayawada", "Visakhapatnam", "Guntur", "Tirupati", "Rajahmundry", "Kakinada",
  "Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur", "Balasore",
  "Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia",
  "Shimla", "Manali", "Dharamshala", "Mandi",
];

function Footer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCityClick = (city) => {
    dispatch(setFormData({ from: city }));
    navigate("/form");
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top after navigation
  };

  const navigateAndScroll = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on navigation
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* City List Section */}
      <div className="bg-[#B02C1A] text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 underline">Service Cities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm">
            {allCities.map((city, idx) => (
              <div
                key={idx}
                onClick={() => handleCityClick(city)}
                className="hover:text-yellow-300 cursor-pointer transition duration-200"
              >
                Packers & Movers in {city}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-black text-gray-300 px-6 md:px-12 pt-20 pb-8">
        <div className="max-w-7xl mx-auto space-y-20">

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
            {/* Company Info */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Move My Stuffs</h2>
              <p className="text-base md:text-lg">
                Leading Packers & Movers since 2014. ISO certified and IBA approved. Trusted across India.
              </p>
              <div className="space-y-1">
                <p className="text-lg md:text-xl font-semibold text-white">Support:</p>
                <p className="text-xl md:text-2xl font-bold text-white">+91-9087893000</p>
                <p className="text-xl md:text-2xl font-bold text-white">+91-7253055609</p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">Services</h3>
              <ul className="space-y-2 text-base md:text-lg">
                <li
                  className="hover:text-white cursor-pointer"
                  onClick={() => navigateAndScroll("/household")} // Added scroll-to-top
                >
                  Home Shifting
                </li>
                <li
                  className="hover:text-white cursor-pointer"
                  onClick={() => navigateAndScroll("/office")} // Added scroll-to-top
                >
                  Office Shifting
                </li>
                <li
                  className="hover:text-white cursor-pointer"
                  onClick={() => navigateAndScroll("/vehicle")} // Added scroll-to-top
                >
                  Vehicle Transportation
                </li>
                <li
                  className="hover:text-white cursor-pointer"
                  onClick={() => navigateAndScroll("/warehouse")} // Added scroll-to-top
                >
                  Ware House Shifting
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl md::text-2xl font-semibold text-white mb-3">Quick Links</h3>
              <ul className="space-y-2 text-base md:text-lg">
                <li
                  className="hover:text-white cursor-pointer"
                  onClick={() => navigateAndScroll("/about")} // Added scroll-to-top
                >
                  About Us
                </li>
                <li
                  className="hover:text-white cursor-pointer"
                  onClick={() => navigateAndScroll("/branch")} // Added scroll-to-top
                >
                  Branches
                </li>
                <li
                  className="hover:text-white cursor-pointer"
                  onClick={() => navigateAndScroll("/becameoneofus")} // Added scroll-to-top
                >
                  Franchise Enquiry
                </li>
                <li
                  className=" hover:text-yellow-300 cursor-pointer"
                  onClick={() => navigateAndScroll("/whychoose")} // Added scroll-to-top
                >
                 Why Choose Us
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition" onClick={() => navigateAndScroll("/review")}>
                 Reviews
              </li>
              </ul>
            </div>

            {/* Office Address & Social Links */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">Registered Office</h3>
              <p className="text-base md:text-lg leading-relaxed">
                No 3A, Mettu Kalazni Street,<br />
                Adambakkam, Chennai - 600088
              </p>
              <div className="flex gap-4 mt-6">
                <a href="https://www.facebook.com/people/Move-My-Stuffs-Packers-Movers/100076636426701/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-700 hover:bg-blue-600 transition">
                  <FaFacebookF className="text-white text-xl" />
                </a>
                <a href="https://www.instagram.com/move_mystuffs/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-700 hover:bg-pink-500 transition">
                  <FaInstagram className="text-white text-xl" />
                </a>
                <a href="https://www.youtube.com/@movemystuffs" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-700 hover:bg-red-600 transition">
                  <FaYoutube className="text-white text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
            © 2025 Move My Stuffs. All rights reserved.
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;