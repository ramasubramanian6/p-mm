import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Contact Office",
    description: "",
  },
  {
    number: "02",
    title: "Book Our Services",
    description: "",
  },
  {
    number: "03",
    title: "Packing Day",
    description: "",
  },
  {
    number: "04",
    title: "Safe Delivery",
    description: "",
  },
];

function WorkProcess() {
  return (
    <div className="bg-white py-16 px-6 sm:px-12 lg:px-24 max-w-screen-xl mx-auto">
      {/* Title */}
      <h2 className="text-center text-4xl sm:text-5xl font-bold font-mono underline decoration-red-700 decoration-4 mb-12">
        <span className="text-red-700">Our </span>
        <span className="text-zinc-800">Work Process</span>
      </h2>

      {/* Steps container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map(({ number, title }, idx) => (
          <motion.div
            key={number}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
            className="bg-white shadow-lg border-l-8 border-b-8 border-stone-300 rounded-md p-6 relative"
          >
            {/* Step number badge */}
            <div className="absolute -top-6 left-6 bg-red-700 rounded shadow-lg w-12 h-12 flex items-center justify-center text-white font-mulish font-semibold text-xl">
              {number}
            </div>

            {/* Icon bar (green line block) */}
            <div className="w-8 h-8 bg-green-950 mb-4 rounded"></div>

            {/* Title */}
            <h3 className="text-zinc-800 font-mulish text-xl font-semibold">{title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WorkProcess;
