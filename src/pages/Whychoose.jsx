import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import Whychooseus from "../../src/assets/whychooseus/whychooseus.png";

function Whychoose() {
  const navigate = useNavigate();

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
    "Happy Customers Across India",
    "Trusted & Experienced – 10+ years in the moving industry.",
    "Fast & Secure Delivery – On-time and damage-free shifting.",
    "Affordable & Transparent Pricing – No hidden charges.",
  ];

  return (
    <div className="w-full bg-white py-16 px-4 md:px-12 lg:px-20">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl md:text-5xl font-bold font-poppins underline text-center mb-12"
      >
        Why Choose Us?
      </motion.h2>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        {/* Left Text */}
        <div className="flex-1 space-y-6 text-lg md:text-xl font-fira_sans">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="font-bold">Trusted Experts With 10+ Years of Experience:</span>{" "}
            Our trained professionals understand the logistical challenges of moving, offering meticulous planning, packing, and execution.
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="font-bold">Certified & Transparent:</span>{" "}
            We’re GST‑registered, IBA‑approved, and Government certified—delivering clear, no hidden cost pricing that builds trust.
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="font-bold">Comprehensive Moving Solutions:</span>{" "}
            From secure packing, safe loading/unloading, vehicle transportation to storage, we manage every step of your relocation.
          </motion.div>

          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="font-bold">Customer-First Approach:</span>{" "}
            We tailor each move to your needs—residential or commercial—ensuring minimal disruption and maximum satisfaction.
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="font-bold">Premium Packing Quality:</span>{" "}
            We use high-grade materials and expert techniques—bubble wrap, corrugated boxes, stretch films—to protect your items safely.
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.img
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          src={Whychooseus}
          alt="Why Choose Us"
          className="rounded-xl w-full md:w-[500px] h-auto object-cover shadow-lg"
        />
      </div>

      {/* Highlighted Points */}
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

      {/* Process Section */}
      <div className="mb-16 space-y-4 font-fira_sans">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">How It Works – Simple & Stress-Free</h3>
        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="list-decimal list-inside space-y-3 text-lg"
        >
          <li>Get a free, no-obligation quote with detailed cost breakdown.</li>
          <li>Customize your move plan and confirm the moving date.</li>
          <li>We handle packing, loading, transportation, unloading, and unpacking.</li>
          <li>Enjoy a smooth and worry-free shifting experience with post-move support.</li>
        </motion.ol>
      </div>

      {/* CTA Button */}
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
