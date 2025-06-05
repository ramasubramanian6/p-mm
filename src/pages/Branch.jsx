import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFormData } from "../pages/redux/formSlice";
import { motion } from "framer-motion";

// Import logo and state/district images without renaming
import logo from "../assets/New folder/icon.png";

// State images
import chennai from "../assets/chennai.png";
import mumbai from "../assets/mumbai.png";
import kolkata from "../assets/kolkata.png";
import delhi from "../assets/delhi ncr.png";
import hyderabad from "../assets/hyderabad.png";
import mathura from "../assets/mathura.png";

// District images
import coimbatore from "../assets/coimbatore.png";
import madurai from "../assets/madurai.png";
import trichy from "../assets/trichy.png";
import salem from "../assets/salem.png";
import thoothukudi from "../assets/thoothukudi.png";
import tirunelveli from "../assets/tirunelveli.png";
import erode from "../assets/erode.png";
import vellore from "../assets/vellore.png";
import nagpur from "../assets/nagpur.png";
import pune from "../assets/pune.png";
import nashik from "../assets/nashik.png";
import aurangabad from "../assets/aurangabad.png";
import kolhapur from "../assets/kolhapur.png";
import amravati from "../assets/amravati.png";
import solapur from "../assets/solapur.png";
import jalgaon from "../assets/jalgoan.png";
import warangal from "../assets/warangal.jpg";
import karimnagar from "../assets/karimnagar.jpg";
import nizamabad from "../assets/nizamabad.jpg";
import khammam from "../assets/khammam.jpg";
import howrah from "../assets/howrah.jpg";
import durgapur from "../assets/durgapur.jpg";
import asansol from "../assets/asansol.jpg";
import siliguri from "../assets/siliguri.jpg";
import kharagpur from "../assets/kharagpur.jpg";
import ahmedabad from "../assets/ahmedabad.png";
import bhopal from "../assets/bhopal.jpg";
import indore from "../assets/indore.jpg";
import gwalior from "../assets/gwalior.png";
import jabalpur from "../assets/jabalpur.jpg";
import ujjain from "../assets/ujjain.jpg";
import sagar from "../assets/sagar.jpg";
import jaipur from "../assets/jaipur.jpg";
import jodhpur from "../assets/jodhpur.jpg";
import udaipur from "../assets/udaipur.jpg";
import kota from "../assets/kota.jpg";
import bikaner from "../assets/bikaner.jpg";
import ajmer from "../assets/ajmer.jpg";
import bharatpur from "../assets/bharatpur.jpg";
import lucknow from "../assets/lucknow.jpg";
import kanpur from "../assets/kanpur.jpg";
import varanasi from "../assets/varanasi.jpg";
import allahabad from "../assets/allahabad.jpg";
import agra from "../assets/agra.jpg";
import meerut from "../assets/meerut.jpg";
import etah from "../assets/etah.jpg";
import mainpuri from "../assets/mainpuri.jpg";
import hathras from "../assets/hathras.jpg";
import etawah from "../assets/etawah.jpg";
import dehradun from "../assets/dehradun.jpg";
import haridwar from "../assets/haridwar.jpg";
import rudrapur from "../assets/rudrapur.jpg";
import haldwani from "../assets/haldwani.png";
import vijayawada from "../assets/vijayawada.jpg";
import visakhapatnam from "../assets/visakhapatnam.jpg";
import guntur from "../assets/guntur.jpg";
import tirupati from "../assets/tirupati.jpg";
import rajahmundry from "../assets/rajahmundry.jpg";
import kakinada from "../assets/kakinada.jpg";
import bhubaneswar from "../assets/bhubaneswar.jpg";
import cuttack from "../assets/cuttack.jpg";
import rourkela from "../assets/rourkela.jpg";
import sambalpur from "../assets/sambalpur.jpg";
import balasore from "../assets/balasore.jpg";
import patna from "../assets/patna.jpg";
import gaya from "../assets/gaya.jpg";
import bhagalpur from "../assets/bhagalpur.jpg";
import muzaffarpur from "../assets/muzaffarpur.jpg";
import purnia from "../assets/purnia.jpg";
import shimla from "../assets/shimla.jpg";
import manali from "../assets/manali.jpg";
import dharamshala from "../assets/dharamshala.jpg";
import mandi from "../assets/mandi.jpg";
import noida from "../assets/noida.jpg";
import gurgaon from "../assets/gurgaon.jpg";
import ghaziabad from "../assets/ghaziabad.jpg";
//import noida from "../assets/noida.png";
import faridabad from "../assets/faridabad.jpg";
// import jalgoan from "../assets/jalgoan.png";

import aligarh from "../assets/aligarh.png";
import kasganj from "../assets/kasganj.png";
import firozabad from "../assets/firozabad.png";

const stateDistrictMap = [
  {
    state: "Tamil Nadu",
    image: coimbatore,
    districts: [
      { name: "Chennai", image: chennai },
      { name: "Coimbatore", image: coimbatore },
      { name: "Madurai", image: madurai },
      { name: "Trichy", image: trichy },
      { name: "Salem", image: salem },
      { name: "Thoothukudi", image: thoothukudi },
      { name: "Tirunelveli", image: tirunelveli },
      { name: "Erode", image: erode },
      { name: "Vellore", image: vellore },
    ],
  },
  {
    state: "Maharashtra",
    image: mumbai,
    districts: [
      { name: "Mumbai", image: mumbai },
      { name: "Pune", image: pune },
      { name: "Nagpur", image: nagpur },
      { name: "Nashik", image: nashik },
      { name: "Aurangabad", image: aurangabad },
      { name: "Solapur", image: solapur },
      { name: "Amravati", image: amravati },
      { name: "Jalgaon", image: jalgaon},
      { name: "Kolhapur", image: kolhapur },
    ],
  },
  {
    state: "Delhi NCR",
    image: delhi,
    districts: [
      { name: "Delhi", image: delhi },
      { name: "Noida", image: noida },
      { name: "Gurgaon", image: gurgaon },
      { name: "Faridabad", image: faridabad },
      { name: "Ghaziabad", image: ghaziabad },
    ],
  },
  {
    state: "Telangana",
    image: hyderabad,
    districts: [
      { name: "Hyderabad", image: hyderabad },
      { name: "Warangal", image: warangal },
      { name: "Karimnagar", image: karimnagar },
      { name: "Nizamabad", image: nizamabad },
      { name: "Khammam", image: khammam },
    ],
  },
  {
    state: "West Bengal",
    image: kolkata,
    districts: [
      { name: "Kolkata", image: kolkata },
      { name: "Howrah", image: howrah },
      { name: "Durgapur", image: durgapur },
      { name: "Asansol", image: asansol },
      { name: "Siliguri", image: siliguri },
      { name: "Kharagpur", image: kharagpur },
    ],
  },
  {
    state: "Gujarat",
    image: ahmedabad,
    districts: [{ name: "Ahmedabad", image: ahmedabad }],
  },
  {
    state: "Madhya Pradesh",
    image: bhopal,
    districts: [
      { name: "Indore", image: indore },
      { name: "Bhopal", image: bhopal },
      { name: "Gwalior", image: gwalior },
      { name: "Jabalpur", image: jabalpur },
      { name: "Ujjain", image: ujjain },
      { name: "Sagar", image: sagar },
    ],
  },
  {
    state: "Rajasthan",
    image: jaipur,
    districts: [
      { name: "Jaipur", image: jaipur },
      { name: "Jodhpur", image: jodhpur },
      { name: "Udaipur", image: udaipur },
      { name: "Kota", image: kota },
      { name: "Bikaner", image: bikaner },
      { name: "Ajmer", image: ajmer },
      { name: "Bharatpur", image: bharatpur },
    ],
  },
  {
    state: "Uttar Pradesh",
    image: lucknow,
    districts: [
      { name: "Lucknow", image: lucknow },
      { name: "Kanpur", image: kanpur },
      { name: "Varanasi", image: varanasi },
      { name: "Allahabad", image: allahabad },
      { name: "Agra", image: agra },
      { name: "Meerut", image: meerut },
      { name: "Aligarh", image: aligarh },
      { name: "Firozabad", image: firozabad },
      { name: "Mathura", image: mathura },
      { name: "Etah", image: etah },
      { name: "Mainpuri", image: mainpuri },
      { name: "Kasganj", image: kasganj },
      { name: "Hathras", image: hathras },
      { name: "Etawah", image: etawah },
    ],
  },
  {
    state: "Uttarakhand",
    image: dehradun,
    districts: [
      { name: "Dehradun", image: dehradun },
      { name: "Haridwar", image: haridwar },
      { name: "Rudrapur", image: rudrapur },
      { name: "Haldwani", image: haldwani },
    ],
  },
  {
    state: "Andhra Pradesh",
    image: vijayawada,
    districts: [
      { name: "Vijayawada", image: vijayawada },
      { name: "Visakhapatnam", image: visakhapatnam },
      { name: "Guntur", image: guntur },
      { name: "Tirupati", image: tirupati },
      { name: "Rajahmundry", image: rajahmundry },
      { name: "Kakinada", image: kakinada },
    ],
  },
  {
    state: "Odisha",
    image: bhubaneswar,
    districts: [
      { name: "Bhubaneswar", image: bhubaneswar },
      { name: "Cuttack", image: cuttack },
      { name: "Rourkela", image: rourkela },
      { name: "Sambalpur", image: sambalpur },
      { name: "Balasore", image: balasore },
    ],
  },
  {
    state: "Bihar",
    image: patna,
    districts: [
      { name: "Patna", image: patna },
      { name: "Gaya", image: gaya },
      { name: "Bhagalpur", image: bhagalpur },
      { name: "Muzaffarpur", image: muzaffarpur },
      { name: "Purnia", image: purnia },
    ],
  },
  {
    state: "Himachal Pradesh",
    image: shimla,
    districts: [
      { name: "Shimla", image: shimla },
      { name: "Manali", image: manali },
      { name: "Dharamshala", image: dharamshala },
      { name: "Mandi", image: mandi },
    ],
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

  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (state) => {
    setSelectedState(state);
  };

  const handleBack = () => {
    setSelectedState(null);
  };

  const handleSelect = (location) => {
    dispatch(setFormData({ from: location }));
    navigate("/form");
  };

  return (
    <div className="py-10 px-4 sm:px-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        Branches We Serve
      </h2>

      {!selectedState && (
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
              onClick={() => handleStateClick(item.state)}
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
              <div className="absolute top-3 left-3 rounded-full bg-white shadow-md">
                <img src={logo} alt="Logo" className="w-18 h-18 object-fit" />
              </div>

              <div className="p-4 text-center font-semibold text-lg text-gray-700">
                {item.state}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Show districts of selected state */}
      {selectedState && (
        <>
          <div className="max-w-7xl mx-auto mb-6 flex items-center gap-4">
            <button
              onClick={handleBack}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              ← Back to States
            </button>
            <h3 className="text-2xl font-semibold text-gray-800">
              Districts of {selectedState}
            </h3>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {stateDistrictMap
              .find((s) => s.state === selectedState)
              ?.districts.map((district) => (
                <motion.div
                  key={district.name}
                  className="relative cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 group"
                  variants={cardVariants}
                  whileHover="hover"
                  onClick={() => handleSelect(district.name)}
                >
                  <motion.img
                    src={district.image}
                    alt={district.name}
                    loading="lazy"
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Logo */}
                  <div className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md">
                    <img src={logo} alt="Logo" className="w-18 h-18 object-contain" />
                  </div>

                  <div className="p-4 text-center font-semibold text-lg text-gray-700">
                    {district.name}
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </>
      )}
    </div>
  );
}

export default Branches;
