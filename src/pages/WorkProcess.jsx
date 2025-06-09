import React from "react";
import { motion } from "framer-motion";

// Step images — use your actual paths
import img1 from "../assets/Workprocess/workprocess.jpg";
import img2 from "../assets/home/home.png";
import img4 from "../assets/Workprocess/workprocess.jpg";
import img3 from "../assets/Workprocess/transport.jpg";


const steps = [
  {
    number: "01",
    title: "Assign us Service",
    description:
      "After you are satisfied with our quotation, you book our service",
    image: 'img1',
  },
  {
    number: "02",
    title: "Packing and Loading",
    description:
      "We will pack all your goods and load it in our vehicle safely",
    image: img2,
  },
  {
    number: "03",
    title: "Transportation Service",
    description: "Our vehicle will deliver your goods to your destination",
    image: img3,
  },
  {
    number: "04",
    title: "Unloading and Unpacking",
    description:
      "We will unload the goods and safely relocate in your destination",
    image: img4,
  },
];

const WorkProcess = () => {
  return (
    <section className="bg-white py-16 px-4 mt-10 sm:px-10 md:px-20 shadow-2xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h4 className="text-sm text-yellow-500 font-bold tracking-wide uppercase mb-2">
          How We Work
        </h4>
        <h2 className="text-3xl md:text-5xl font-bold">
          Check Out Our <span className="text-red-600">Shifting Process</span>
        </h2>
        <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center text-center group"
          >
            {/* Number badge - OUTSIDE left */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-10">
              <div className="w-12 h-12 bg-red-600 text-white font-bold rounded-full flex items-center justify-center shadow-md border-4 border-white text-lg">
                {step.number}
              </div>
            </div>

            {/* Circle Image */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold mt-6 text-zinc-800">
              {step.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-base md:text-lg text-gray-600 px-4">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
