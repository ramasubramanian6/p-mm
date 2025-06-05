import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFormData } from "../pages/redux/formSlice";
import { motion } from "framer-motion";
import ahmedabad from "../assets/ahmedabad.png";
import aligarh from "../assets/aligarh.png";
import amravati from "../assets/amravati.png";
import andhraPradesh from "../assets/andhra pradesh.png";
import aurangabad from "../assets/aurangabad.png";
import bangalore from "../assets/bangalore.png";
import bihar from "../assets/bihar.png";
import chennai from "../assets/chennai.png";
import coimbatore from "../assets/coimbatore.png";
import delhiNcr from "../assets/delhi ncr.png";
import erode from "../assets/erode.png";
import firozabad from "../assets/firozabad.png";
import gwalior from "../assets/gwalior.png";
import haldwani from "../assets/haldwani.png";
import himachalPradesh from "../assets/himachal pradesh.png";
import hyderabad from "../assets/hyderabad.png";
import jalgoan from "../assets/jalgoan.png";
import kasganj from "../assets/kasganj.png";
import kolhapur from "../assets/kolhapur.png";
import kolkata from "../assets/kolkata.png";
import logo from "../assets/logo.png";
import madhyaPradesh from "../assets/madhya pradesh.png";
import madurai from "../assets/madurai.png";
import maharastra from "../assets/maharastra.png";
import mathura from "../assets/mathura.png";
import mumbai from "../assets/mumbai.png";
import nagpur from "../assets/nagpur.png";
import nashik from "../assets/nashik.png";
import odisha from "../assets/odisha.png";
import pune from "../assets/pune.png";
import rajasthan from "../assets/rajasthan.png";
import salem from "../assets/salem.png";
import solapur from "../assets/solapur.png";
import telangana from "../assets/telungana.png";
import thoothukudi from "../assets/thoothukudi.png";
import tirunelveli from "../assets/tirunelveli.png";
import trichy from "../assets/trichy.png";
import uttarKhand from "../assets/uttar khand.png";
import uttarPradesh from "../assets/uttar pradesh.png";
import vellore from "../assets/vellore.png";
import westBengal from "../assets/west bengal.png";


const branches = [
  { name: "Ahmedabad", image: ahmedabad },
  { name: "Aligarh", image: aligarh },
  { name: "Amravati", image: amravati },
  { name: "Andhra Pradesh", image: andhraPradesh },
  { name: "Aurangabad", image: aurangabad },
  { name: "Bangalore", image: bangalore },
  { name: "Bihar", image: bihar },
  { name: "Chennai", image: chennai },
  { name: "Coimbatore", image: coimbatore },
  { name: "Delhi NCR", image: delhiNcr },
  { name: "Erode", image: erode },
  { name: "Firozabad", image: firozabad },
  { name: "Gwalior", image: gwalior },
  { name: "Haldwani", image: haldwani },
  { name: "Himachal Pradesh", image: himachalPradesh },
  { name: "Hyderabad", image: hyderabad },
  { name: "Jalgoan", image: jalgoan },
  { name: "Kasganj", image: kasganj },
  { name: "Kolhapur", image: kolhapur },
  { name: "Kolkata", image: kolkata },
  { name: "Madhya Pradesh", image: madhyaPradesh },
  { name: "Madurai", image: madurai },
  { name: "Maharastra", image: maharastra },
  { name: "Mathura", image: mathura },
  { name: "Mumbai", image: mumbai },
  { name: "Nagpur", image: nagpur },
  { name: "Nashik", image: nashik },
  { name: "Odisha", image: odisha },
  { name: "Pune", image: pune },
  { name: "Rajasthan", image: rajasthan },
  { name: "Salem", image: salem },
  { name: "Solapur", image: solapur },
  { name: "Telangana", image: telangana },
  { name: "Thoothukudi", image: thoothukudi },
  { name: "Tirunelveli", image: tirunelveli },
  { name: "Trichy", image: trichy },
  { name: "Uttar Khand", image: uttarKhand },
  { name: "Uttar Pradesh", image: uttarPradesh },
  { name: "Vellore", image: vellore },
  { name: "West Bengal", image: westBengal },
];

const stateDistrictMap = [
  {
    state: "Tamil Nadu",
    image: coimbatore,
    districts: ["Chennai", "Coimbatore", "Madurai", "Trichy", "Salem", "Thoothukudi", "Tirunelveli", "Erode", "Vellore"],
  },
  {
    state: "Maharashtra",
    image: mumbai,
    districts: ["Mumbai", "Nagpur", "Pune", "Nashik", "Aurangabad", "Kolhapur", "Amravati", "Solapur", "Jalgoan"],
  },
  {
    state: "West Bengal",
    image: kolkata,
    districts: ["Kolkata", "Other Districts"],
  },
  {
    state: "Delhi NCR",
    image: delhiNcr,
    districts: ["Delhi", "Gurgaon", "Noida", "Faridabad"],
  },
  {
    state: "Telangana",
    image: hyderabad,
    districts: ["Hyderabad", "Other Districts"],
  },
  {
    state: "Uttar Pradesh",
    image: mathura,
    districts: ["Mathura", "Aligarh", "Kasganj", "Firozabad"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, duration: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
  hover: { scale: 1.05 },
};

function Branches() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSelect = (state) => {
    dispatch(setFormData({ from: state }));
    navigate("/form");
  };

  return (
    <div className="py-10 px-4 sm:px-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        Branches We Serve
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {stateDistrictMap.map((item) => (
          <motion.div
            key={item.state}
            className="relative cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 group"
            variants={cardVariants}
            whileHover="hover"
            onClick={() => handleSelect(item.state)}
          >
            <motion.img
              src={item.image}
              alt={item.state}
              loading="lazy"
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />

            {/* Big Logo */}
            <div className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md">
              <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
            </div>

            <div className="p-4 text-center font-semibold text-lg text-gray-700">
              {item.state}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* District List below cards on hover */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {stateDistrictMap.map((item) => (
          <div
            key={item.state + "-districts"}
            className="bg-white rounded-xl shadow p-6 transition duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-2">
              <img src={logo} alt="Logo" className="w-8 h-8" />
              <h3 className="text-xl font-bold text-gray-800">{item.state}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 text-sm">
              {item.districts.map((district) => (
                <li key={district}>{district}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Branches;