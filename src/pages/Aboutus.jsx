import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 * i },
  }),
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const branches = [
  {
    city: "Chennai (Head Office)",
    address: "No 3 A, Mettu Kalazni Street, Adambakkam, Chennai 600088",
  },
  {
    city: "Bangalore",
    address:
      "No 63/201, 2nd Cross, JC Road Kalasipalyam New Extension, Bengaluru - 560002",
  },
  {
    city: "Coimbatore",
    address:
      "Sridevi Nagar, Giri Nagar, Saibaba Colony, K K Pudur, Coimbatore, Tamil Nadu 641025",
  },
  {
    city: "Hyderabad",
    address:
      "H No. 8/7 95/3, Old Bowenpally, Balaji Secundrabad, Hyderabad, Telangana, 500011",
  },
  {
    city: "Delhi NCR",
    address: "Dabua Colony near Durga Mandir, Faridabad",
  },
  {
    city: "Agra",
    address:
      "Kaulakha Crossing Ukharra Road, Rajpur Chungi, Agra",
  },
];

function AboutUs() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-red-50 to-white px-6 md:px-16 py-12 font-['Fira_Sans']">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto space-y-16"
      >
        {/* Header */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-bold text-center text-red-700 font-['Poppins']"
        >
          About Us
        </motion.h1>

        {/* Mission & Vision */}
        <motion.div variants={item} className="text-center text-gray-800 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Our Mission & Vision</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            At <strong>Move My Stuffs Packers & Movers</strong>, our mission is to deliver seamless, trustworthy, and efficient moving services that give you peace of mind. We envision a world where every relocation is smooth and stress-free — with care at the heart of everything we do.
          </p>
        </motion.div>

        {/* Branches */}
        <motion.div variants={item} className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-zinc-800">Branches & Network Cities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                variants={item}
                className="border border-red-200 rounded-lg p-6 bg-white shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-red-600 mb-2">{branch.city}</h3>
                <p className="text-gray-700">{branch.address}</p>
                <p className="mt-3 text-sm text-gray-600">
                  📞 +91 90878 93000<br />
                  📞 +91 72530 55609
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={item} className="text-center space-y-4 mt-12">
          <h2 className="text-3xl font-semibold text-zinc-800">Ready for a Hassle-Free Move?</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
            Experience a seamless and stress-free relocation process with our expert team. Contact us today for a free consultation and personalized quote!
          </p>
          <div className="text-lg mt-4 space-y-2">
            <p><strong>Sales & Marketing:</strong> +91 90878 93000</p>
            <p><strong>Help Line:</strong> +91 72530 55609</p>
          </div>
          <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">
            Get Free Quote
          </button>
        </motion.div>

        {/* Footer */}
        <motion.footer variants={item} className="text-center text-sm text-gray-600 mt-16">
          <p><strong>Registered Address:</strong> No 3A, Mettu Kalazni Street, Adambakkam, Chennai - 600088</p>
          <p className="mt-2">© 2025 Move My Stuffs. All Rights Reserved.</p>
        </motion.footer>
      </motion.div>
    </div>
  );
}

export default AboutUs;
