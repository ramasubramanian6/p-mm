import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFormData } from "../pages/redux/formSlice";
import { motion } from "framer-motion";

const branches = [
  { name: "Agra", image: "/images/agra.jpg" },
  { name: "Ahmedabad", image: "/images/ahmedabad.jpg" },
  { name: "Bangalore", image: "/images/bangalore.jpg" },
  { name: "Bhopal", image: "/images/bhopal.jpg" },
  { name: "Bhubaneswar", image: "/images/bhubaneswar.jpg" },
  { name: "Chandigarh", image: "/images/chandigarh.jpg" },
  { name: "Chennai", image: "/images/chennai.jpg" },
  { name: "Coimbatore", image: "/images/coimbatore.jpg" },
  { name: "Delhi NCR", image: "/images/delhi.jpg" },
  { name: "Ghaziabad", image: "/images/ghaziabad.jpg" },
  { name: "Gurgaon", image: "/images/gurgaon.jpg" },
  { name: "Hyderabad", image: "/images/hyderabad.jpg" },
  { name: "Indore", image: "/images/indore.jpg" },
  { name: "Jaipur", image: "/images/jaipur.jpg" },
  { name: "Kanpur", image: "/images/kanpur.jpg" },
  { name: "Kolkata", image: "/images/kolkata.jpg" },
  { name: "Lucknow", image: "/images/lucknow.jpg" },
  { name: "Ludhiana", image: "/images/ludhiana.jpg" },
  { name: "Madurai", image: "/images/madurai.jpg" },
  { name: "Mangalore", image: "/images/mangalore.jpg" },
  { name: "Mumbai", image: "/images/mumbai.jpg" },
  { name: "Mysore", image: "/images/mysore.jpg" },
  { name: "Nagpur", image: "/images/nagpur.jpg" },
  { name: "Noida", image: "/images/noida.jpg" },
  { name: "Patna", image: "/images/patna.jpg" },
  { name: "Pune", image: "/images/pune.jpg" },
  { name: "Raipur", image: "/images/raipur.jpg" },
  { name: "Ranchi", image: "/images/ranchi.jpg" },
  { name: "Surat", image: "/images/surat.jpg" },
  { name: "Thane", image: "/images/thane.jpg" },
  { name: "Trichy", image: "/images/trichy.jpg" },
  { name: "Vadodara", image: "/images/vadodara.jpg" },
  { name: "Varanasi", image: "/images/varanasi.jpg" },
  { name: "Vijayawada", image: "/images/vijayawada.jpg" },
  { name: "Visakhapatnam", image: "/images/visakhapatnam.jpg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.3,
    },
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

  const handleSelect = (branch) => {
    dispatch(setFormData({ from: branch.name }));
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
        {branches.map((branch) => (
          <motion.div
            key={branch.name}
            className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
            variants={cardVariants}
            whileHover="hover"
            onClick={() => handleSelect(branch)}
          >
            <motion.img
              src={branch.image}
              alt={branch.name}
              loading="lazy"
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
            <div className="p-4 text-center font-semibold text-lg text-gray-700">
              {branch.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Branches;
