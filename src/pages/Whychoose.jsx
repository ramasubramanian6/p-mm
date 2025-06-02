import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import Whychooseus from '../../src/assets/whychooseus/whychooseus.png'

function Whychoose() {
  const navigate=useNavigate();
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  const points = [
    "Government Approved & IBA Certified",
    "GST Registered Company",
    "Happy Customers",
    "Trusted & Experienced – 10+ years in the moving industry.",
    "Fast & Secure Delivery – On-time and damage-free shifting.",
    "Affordable & Transparent Pricing – No hidden charges.",
  ];

  return (
    <div className="w-full bg-white py-16 px-4 md:px-12 lg:px-20">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl md:text-5xl font-bold font-poppins underline text-center mb-12"
      >
        Why Choose Us?
      </motion.h2>

      {/* Side-by-side section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        {/* Text content */}
        <div className="flex-1 space-y-8 text-lg md:text-xl font-fira_sans">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="font-bold">Experience You Can Trust:</span> With a
            decade of experience in the moving industry, we understand the
            unique challenges that come with every move.
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="font-bold">Certified and Approved:</span> We are a
            GST-registered company and hold certifications including{" "}
            <span className="font-semibold">IBA Approved</span>,{" "}
            <span className="font-semibold">Government Approved</span> and{" "}
            <span className="font-semibold">GST Approved</span>.
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="font-bold">Comprehensive Services:</span> From
            packing and loading to transportation and unpacking, we offer a full
            range of services tailored to meet your needs.
          </motion.div>
        </div>

        {/* Image */}
        <motion.img
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          src={Whychooseus}
          alt="Why Choose Us"
          className="rounded-xl w-full md:w-[500px] h-auto object-cover shadow-lg"
        />
      </div>

      {/* Highlight Points Section */}
      <div className="bg-red-700 text-white px-6 py-10 rounded-xl shadow-md mb-12">
        <div className="grid gap-6 md:grid-cols-2">
          {points.map((point, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-xl font-semibold"
            >
              • {point}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <button
          onClick={() => navigate("/form")}
          className="bg-zinc-800 text-white text-lg px-8 py-4 rounded-2xl hover:bg-zinc-900 transition"
        >
          Book Your Free Consultation Now!
        </button>
      </motion.div>
    </div>
  );
}

export default Whychoose;
