import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Home Shifting",
    description:
      "Secure packing, careful handling, and reliable transport to your new home.",
  },
  {
    title: "Office Relocation",
    description:
      "Quick, organized office moves with minimal business disruption.",
  },
  {
    title: "Vehicle Transportation",
    description:
      "Safe delivery of your car or bike across cities and states.",
  },
  {
    title: "Packing Services",
    description:
      "Expert packing with high-quality materials for complete protection.",
  },
];

export default function OurServices() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins">
          Our Services
        </h2>
        <p className="mt-2 text-gray-600 text-base md:text-lg font-fira">
          Reliable solutions for your shifting and moving needs.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map(({ title, description }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="bg-white border border-red-100 rounded-lg p-5 shadow-sm hover:shadow-md transition duration-300"
          >
            <h3 className="text-lg md:text-xl font-semibold text-red-600 mb-2 font-fira">
              {title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base font-fira leading-relaxed">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
