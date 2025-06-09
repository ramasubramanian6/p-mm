import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import v1 from "../assets/vehicle/v1.jpg";
import v2 from "../assets/vehicle/v2.jpg";
import v3 from "../assets/vehicle/v3.jpg";
import v4 from "../assets/vehicle/v4.jpg";
import v5 from "../assets/vehicle/v5.jpg";
import v6 from "../assets/vehicle/v6.jpg";

// Animation Variants
const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delayChildren: 0.4,
      staggerChildren: 0.15,
    },
  },
};

const headingVariants = {
  initial: { opacity: 0, y: -15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const textVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const listItemVariants = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const galleryItemVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const galleryContainerVariants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const VehicleService = () => {
  const vehicles = [v6, v2, v3, v4, v5, v1];
  const companyName = "Your Trusted Transporters"; // Replace with your actual name
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.div
      className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20 bg-white rounded-xl shadow-2xl"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Header */}
      <motion.header className="text-center mb-10" variants={headingVariants}>
        <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
          Reliable Vehicle Transport Solutions
        </h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          variants={textVariants}
        >
          Safe, secure, and timely transport for your car, bike, or other
          vehicles.
        </motion.p>
      </motion.header>

      {/* Description */}
      <motion.section className="mb-12" variants={textVariants}>
        <p className="text-lg text-gray-800 leading-relaxed">
          At <span className="font-semibold text-teal-700">{companyName}</span>,
          we offer expert vehicle transport services. Whether it’s a bike, car,
          or specialty vehicle, our team ensures damage-free, reliable, and
          timely relocation.
        </p>
        <motion.ul
          className="list-disc list-inside mt-6 text-gray-700 space-y-2"
          variants={containerVariants}
        >
          <motion.li variants={listItemVariants}>
            Secure loading & handling
          </motion.li>
          <motion.li variants={listItemVariants}>
            Open/enclosed transport options
          </motion.li>
          <motion.li variants={listItemVariants}>Real-time tracking</motion.li>
          <motion.li variants={listItemVariants}>
            Comprehensive inspection
          </motion.li>
          <motion.li variants={listItemVariants}>Flexible schedules</motion.li>
          <motion.li variants={listItemVariants}>Transparent pricing</motion.li>
        </motion.ul>
      </motion.section>

      {/* Gallery */}
      <section className="mb-12">
        <motion.h2
          className="text-3xl font-semibold mb-6 text-gray-900"
          variants={headingVariants}
        >
          Vehicles We've Transported
        </motion.h2>
        <motion.p className="text-gray-600 mb-8 italic" variants={textVariants}>
          (Sample vehicles we’ve transported recently)
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={galleryContainerVariants}
          initial="initial"
          animate="animate"
        >
          {vehicles.map((img, index) => (
            <motion.div
              key={index}
              className="aspect-video rounded-lg overflow-hidden shadow-xl border border-gray-200"
              variants={galleryItemVariants}
            >
              <img
                src={img}
                alt={`vehicle-${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-12">
        <motion.h3
          className="text-3xl font-semibold text-teal-800 mb-6"
          variants={headingVariants}
        >
          Why Choose <span className="font-bold">{companyName}</span>?
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.ul className="space-y-5" variants={containerVariants}>
            <motion.li className="flex" variants={listItemVariants}>
              ✅ Experienced team for safe handling
            </motion.li>
            <motion.li className="flex" variants={listItemVariants}>
              ✅ Real-time tracking and updates
            </motion.li>
            <motion.li className="flex" variants={listItemVariants}>
              ✅ Both open & enclosed carriers
            </motion.li>
          </motion.ul>
          <motion.ul className="space-y-5" variants={containerVariants}>
            <motion.li className="flex" variants={listItemVariants}>
              ✅ Damage-free guaranteed
            </motion.li>
            <motion.li className="flex" variants={listItemVariants}>
              ✅ On-time delivery promise
            </motion.li>
            <motion.li className="flex" variants={listItemVariants}>
              ✅ Transparent pricing
            </motion.li>
          </motion.ul>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="mt-16 text-center bg-teal-50 py-10 px-6 rounded-lg shadow-inner border border-teal-100"
        variants={textVariants}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-teal-800 mb-4">
          Get a Free Vehicle Transport Quote
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Secure your vehicle transport now with {companyName}.
        </p>
        <motion.div variants={listItemVariants}>
          <Link
            to="/form"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Request Quote
          </Link>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default VehicleService;
