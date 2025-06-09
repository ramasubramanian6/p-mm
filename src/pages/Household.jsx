import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import h1 from "../assets/household/h1.jpg";
import h2 from "../assets/household/2.jpg";
import h3 from "../assets/household/3.png";
import h4 from "../assets/household/4.jpg";
import h5 from "../assets/household/5.jpg";
import h6 from "../assets/household/6.jpg";

// Variants
const containerVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const headingVariants = {
  initial: { opacity: 0, y: -20, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
};

const listItemVariants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageBoxVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const galleryVariants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const HouseholdService = () => {
  const images = [h1, h2, h3, h4, h5, h6];
  const companyName = "SafeShifting Packers & Movers";
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <motion.div
      className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto mt-20 md:mt-28 bg-white rounded-3xl shadow-xl border border-gray-200"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.header className="text-center mb-12" variants={headingVariants}>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Professional Household Relocation
        </h1>
        <motion.p
          className="mt-4 text-lg text-gray-700"
          variants={textVariants}
        >
          Secure, Timely & Hassle-Free Home Shifting Services Across India.
        </motion.p>
      </motion.header>

      <motion.section className="mb-16" variants={textVariants}>
        <p className="text-gray-800 leading-relaxed">
          At{" "}
          <span className="font-semibold text-indigo-700">{companyName}</span>,
          we provide end-to-end household shifting services with utmost care and
          professionalism. From safe packing to secure delivery, we ensure a
          smooth moving experience for your family.
        </p>
        <motion.ul
          className="list-disc pl-5 mt-6 text-gray-700 space-y-3"
          variants={containerVariants}
        >
          <motion.li variants={listItemVariants}>
            Customized moving plans as per your location and item size.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Use of high-quality packaging for maximum safety.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Trained crew for safe loading and unloading.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Timely doorstep delivery across all major cities.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Optional unpacking and arrangement support.
          </motion.li>
        </motion.ul>
      </motion.section>

      <section className="mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8"
          variants={headingVariants}
        >
          Glimpse of Our Recent Work
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={galleryVariants}
          initial="initial"
          animate="animate"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="h-[18rem] rounded-xl overflow-hidden border shadow-lg"
              variants={imageBoxVariants}
            >
              <img
                src={img}
                alt={`Household ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className="mt-6 text-center text-sm text-gray-500 italic"
          variants={textVariants}
        >
          Photos from recent household moves handled with precision and care.
        </motion.p>
      </section>

      <section>
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-indigo-700 mb-8"
          variants={headingVariants}
        >
          Why {companyName}?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.ul className="space-y-6" variants={containerVariants}>
            <motion.li
              className="flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-green-600 text-xl">✔</span>
              <span>
                <strong>Trained Professionals:</strong> Skilled team with years
                of experience.
              </span>
            </motion.li>
            <motion.li
              className="flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-blue-600 text-xl">✔</span>
              <span>
                <strong>Secure Transport:</strong> Enclosed vehicles & GPS
                tracking.
              </span>
            </motion.li>
            <motion.li
              className="flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-purple-600 text-xl">✔</span>
              <span>
                <strong>Affordable Pricing:</strong> No hidden charges or
                surprises.
              </span>
            </motion.li>
          </motion.ul>
          <motion.ul className="space-y-6" variants={containerVariants}>
            <motion.li
              className="flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-yellow-600 text-xl">✔</span>
              <span>
                <strong>All India Coverage:</strong> From metro cities to tier-2
                towns.
              </span>
            </motion.li>
            <motion.li
              className="flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-red-600 text-xl">✔</span>
              <span>
                <strong>Customer First:</strong> 24/7 support and dedicated
                coordination.
              </span>
            </motion.li>
            <motion.li
              className="flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-teal-600 text-xl">✔</span>
              <span>
                <strong>End-to-End Service:</strong> Packing, transport,
                delivery, unpacking.
              </span>
            </motion.li>
          </motion.ul>
        </div>

        <motion.div className="mt-10 text-center" variants={textVariants}>
          <Link
            to="/form"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300"
          >
            Request Free Quote
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default HouseholdService;
