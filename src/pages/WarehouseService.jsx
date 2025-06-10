import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Replace with your actual warehouse images
import w1 from "../assets/warehouse/w1.jpg";
import w2 from "../assets/warehouse/w2.jpg";
import w3 from "../assets/warehouse/w3.jpg";
import w4 from "../assets/warehouse/w4.jpg";
import w5 from "../assets/warehouse/w5.jpg";
import w6 from "../assets/warehouse/w6.jpg";

// Animation variants
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

const WarehouseService = () => {
  const images = [w1, w2, w3, w4, w5, w6];
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
          Secure & Flexible Warehousing Solutions
        </h1>
        <motion.p
          className="mt-4 text-lg text-gray-700"
          variants={textVariants}
        >
          Trusted Storage & Inventory Management Across India
        </motion.p>
      </motion.header>

      <motion.section className="mb-16" variants={textVariants}>
        <p className="text-gray-800 leading-relaxed">
          <span className="font-semibold text-indigo-700">{companyName}</span>{" "}
          offers fully secured warehouse facilities for short-term and
          long-term storage of goods, merchandise, and household items. Whether
          you're in between moves or need industrial storage, we ensure safety
          and accessibility at all times.
        </p>
        <motion.ul
          className="list-disc pl-5 mt-6 text-gray-700 space-y-3"
          variants={containerVariants}
        >
          <motion.li variants={listItemVariants}>
            Flexible storage durations (days to months).
          </motion.li>
          <motion.li variants={listItemVariants}>
            24x7 security monitoring & CCTV surveillance.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Temperature-controlled and dust-free units.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Barcode tracking & digital inventory reports.
          </motion.li>
          <motion.li variants={listItemVariants}>
            Easy pickup and drop scheduling.
          </motion.li>
        </motion.ul>
      </motion.section>

      <section className="mb-16">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8"
          variants={headingVariants}
        >
          Warehouse Glimpses
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
                alt={`Warehouse ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          className="mt-6 text-center text-sm text-gray-500 italic"
          variants={textVariants}
        >
          Trusted warehouse management solutions across multiple Indian cities.
        </motion.p>
      </section>

      <section>
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-indigo-700 mb-8"
          variants={headingVariants}
        >
          Why Choose {companyName} Warehousing?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.ul className="space-y-6" variants={containerVariants}>
            <motion.li
              className="flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-green-600 text-xl">✔</span>
              <span>
                <strong>Secure Premises:</strong> 24/7 guarded and monitored.
              </span>
            </motion.li>
            <motion.li
              className="flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-blue-600 text-xl">✔</span>
              <span>
                <strong>Flexible Space:</strong> Units to suit all storage
                sizes.
              </span>
            </motion.li>
            <motion.li
              className="flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-purple-600 text-xl">✔</span>
              <span>
                <strong>Real-Time Inventory:</strong> Digital tracking and
                reports.
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
                <strong>Clean & Maintained:</strong> Hygienic and pest-free
                facilities.
              </span>
            </motion.li>
            <motion.li
              className="flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-red-600 text-xl">✔</span>
              <span>
                <strong>Pan-India Network:</strong> Facilities in all major
                cities.
              </span>
            </motion.li>
            <motion.li
              className="flex items-start gap-3"
              variants={listItemVariants}
            >
              <span className="text-teal-600 text-xl">✔</span>
              <span>
                <strong>Affordable Rates:</strong> Pay only for what you use.
              </span>
            </motion.li>
          </motion.ul>
        </div>

        <motion.div className="mt-10 text-center" variants={textVariants}>
          <Link
            to="/form"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300"
          >
            Request Storage Quote
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default WarehouseService;
