import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
// import o1 from '../../assets/office/o1.jpg';
// import o2 from '../../assets/office/o2.jpg';
// import o3 from '../../assets/office/o3.jpg';
// import o4 from '../../assets/office/o4.jpg';
// import o6 from '../../assets/office/o6.jpg';
// import o5 from '../../assets/office/o5.jpg';

// Animation variants
const sectionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      delayChildren: 0.4,
      staggerChildren: 0.15,
    },
  },
};

const headingVariants = {
  initial: { opacity: 0, y: -15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const textVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.2,
    },
  },
};

const listItemVariants = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const galleryItemVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const galleryContainerVariants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const OfficeService = () => {
  const off = ['o1',' o2',' o3', 'o4', 'o5', 'o6'];
  const companyName = 'Your Corporate Movers';

  return (
    <motion.div
      className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-20 bg-white rounded-xl shadow-2xl"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.header className="text-center mb-10 md:mb-14" variants={headingVariants}>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 tracking-tight mb-4">
          Expert Commercial & Office Relocation
        </h1>
        <motion.p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto" variants={textVariants}>
          Minimize disruption and maximize efficiency with our specialized office moving services. We plan and execute every detail for a smooth transition.
        </motion.p>
      </motion.header>

      <motion.section className="mb-12 md:mb-16" variants={textVariants}>
        <p className="text-lg text-gray-800 leading-relaxed">
          Relocating your office is a critical process that demands meticulous planning and execution to ensure business continuity. At <span className="font-semibold text-blue-700">{companyName}</span>, we specialize in providing comprehensive office relocation services designed to minimize downtime and stress for your employees.
        </p>
        <motion.ul className="list-disc list-inside mt-6 text-gray-700 leading-relaxed space-y-2" variants={containerVariants}>
          <motion.li variants={listItemVariants}>Detailed pre-move planning and consultation.</motion.li>
          <motion.li variants={listItemVariants}>Specialized packing for electronics and fragile office equipment.</motion.li>
          <motion.li variants={listItemVariants}>Efficient labeling and inventory management.</motion.li>
          <motion.li variants={listItemVariants}>Safe transportation with a modern, secure fleet.</motion.li>
          <motion.li variants={listItemVariants}>Systematic unpacking and setup at your new location.</motion.li>
          <motion.li variants={listItemVariants}>Coordination with building management teams.</motion.li>
        </motion.ul>
      </motion.section>

      <section className="mb-12 md:mb-16">
        <motion.h2 className="text-3xl font-semibold mb-6 text-gray-900" variants={headingVariants}>
          Our Work in Action
        </motion.h2>
        <motion.p className="text-gray-600 mb-8 italic" variants={textVariants}>
          (A selection of images showcasing our professional office moving services will be available soon.)
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={galleryContainerVariants}
          initial="initial"
          animate="animate"
        >
          {[...Array(6)].map((_, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 aspect-video rounded-lg shadow-xl overflow-hidden relative border border-gray-200 flex items-center justify-center text-gray-400 text-sm"
              variants={galleryItemVariants}
            >
              <img src={off[index]} alt={`Office ${index + 1}`} className="object-cover w-full h-full" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mt-12 md:mt-16">
        <motion.h3 className="text-3xl font-semibold text-blue-800 mb-6" variants={headingVariants}>
          Why Partner with <span className="font-bold">{companyName}</span>?
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.ul className="list-none space-y-5" variants={containerVariants}>
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong className="font-semibold text-gray-900">Proven Experience:</strong> Decades of successful commercial relocations.</span>
            </motion.li>
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span><strong className="font-semibold text-gray-900">Strategic Planning:</strong> Tailored plans to minimize business interruption.</span>
            </motion.li>
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg className="w-6 h-6 text-indigo-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span><strong className="font-semibold text-gray-900">Secure Handling:</strong> Utmost care for your valuable assets and data.</span>
            </motion.li>
          </motion.ul>
          <motion.ul className="list-none space-y-5" variants={containerVariants}>
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span><strong className="font-semibold text-gray-900">Efficiency & Speed:</strong> Executing your move quickly and effectively.</span>
            </motion.li>
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span><strong className="font-semibold text-gray-900">End-to-End Service:</strong> From packing and IT disconnect to setup and reconnect.</span>
            </motion.li>
            <motion.li className="flex items-start" variants={listItemVariants}>
              <svg className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 0A9.95 9.95 0 0112 5.013C7.452 5.013 3.646 8.123 2.457 12c1.189 3.877 4.995 6.987 9.543 6.987 1.962 0 3.83-.604 5.395-1.65l3.536 3.536" />
              </svg>
              <span><strong className="font-semibold text-gray-900">Dedicated Support:</strong> Responsive and helpful service throughout your move.</span>
            </motion.li>
          </motion.ul>
        </div>
      </section>

      <motion.section className="mt-16 text-center bg-blue-50 py-10 px-6 rounded-lg shadow-inner border border-blue-100" variants={textVariants}>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4">
          Plan Your Office Move Today
        </h2>
        <motion.p className="text-lg text-gray-700 leading-relaxed mb-8" variants={textVariants}>
          Ready for a seamless and efficient office relocation? Contact <span className="font-semibold text-blue-700">{companyName}</span> to discuss your specific requirements and get a customized quote.
        </motion.p>
        <motion.div variants={listItemVariants}>
          <Link
            to="/form"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Request a Commercial Moving Quote
          </Link>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default OfficeService;
