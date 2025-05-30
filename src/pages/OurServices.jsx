import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Home Shifting",
    description:
      "Whether you’re moving across the street or across the country, we ensure your household items are packed securely, loaded with care, and transported safely to your new home.",
  },
  {
    title: "Office Relocation",
    description:
      "Need to move your office without disrupting operations? Our team is experienced in handling office furniture, electronics, and sensitive documents ensuring a smooth and quick relocation.",
  },
  {
    title: "Vehicle Transportation",
    description:
      "Whether it’s your car, bike or any other vehicle, we offer safe and reliable vehicle transportation services ensuring your vehicle reaches its destination in perfect condition.",
  },
  {
    title: "Packing Services",
    description:
      "We use high-quality packing materials and professional techniques to pack your items securely so everything arrives at your new location intact and undamaged.",
  },
];

export default function OurServices() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16 bg-white rounded-lg shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 underline font-poppins">
          Our Services
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-700 font-fira">
          We offer a range of moving services designed to meet all of your
          relocation needs:
        </p>
      </motion.div>

      <div className="grid gap-10 md:grid-cols-2">
        {services.map(({ title, description }, idx) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            className="bg-red-50 rounded-lg p-6 shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 font-fira text-red-700">
              {title}
            </h3>
            <p className="text-gray-800 text-lg font-fira leading-relaxed">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
