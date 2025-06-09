import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFormData } from "./redux/formSlice";
import logo from "../assets/New folder/icon.png";

// Branch Images
import chennai from "../assets/chennai.png";
import coimbatore from "../assets/coimbatore.png";
import bangalore from "../assets/bangalore.png";
import madurai from "../assets/madurai.png";
import trichy from "../assets/trichy.png";
import delhi from "../assets/delhi ncr.png";
import agra from "../assets/agra.jpg";
import jaipur from "../assets/jaipur.jpg";
import hyderabad from "../assets/hyderabad.png";
import mathura from "../assets/mathura.png";

const branches = [
  { name: "Chennai", image: chennai },
  { name: "Coimbatore", image: coimbatore },
  { name: "Bangalore", image: bangalore },
  { name: "Madurai", image: madurai },
  { name: "Trichy", image: trichy },
  { name: "Delhi NCR", image: delhi },
  { name: "Agra", image: agra },
  { name: "Jaipur", image: jaipur },
  { name: "Hyderabad", image: hyderabad },
  { name: "Mathura", image: mathura },
];

const HomeAbout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBranchClick = (branchName) => {
    dispatch(setFormData({ from: branchName }));
    navigate("/form");
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-5xl text-center font-bold underline mb-12 text-zinc-800">
        Our Branches & Networks
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {branches.map((branch, index) => (
          <motion.div
            key={branch.name}
            className="relative cursor-pointer bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            onClick={() => handleBranchClick(branch.name)}
          >
            <img
              src={branch.image}
              alt={branch.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />

            {/* Logo at bottom-right */}
            <div className="absolute bottom-10 right-3 bg-white p-1.5 rounded-full shadow">
              <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            </div>

            <div className="p-4 text-center text-lg font-semibold text-zinc-700">
              {branch.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HomeAbout;
