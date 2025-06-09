import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id", // Replace with your service ID
        "your_template_id", // Replace with your template ID
        formData,
        "your_user_id" // Replace with your public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", phone: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-yellow-50 px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto bg-white shadow-2xl border-l-4 border-red-500 rounded-3xl p-8 md:p-12"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-zinc-800 mb-6"
        >
          Contact <span className="text-red-600">Move My Stuffs</span>
        </motion.h1>

        {/* Mission */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-700 text-center text-lg mb-10 leading-relaxed"
        >
          At <strong>Move My Stuffs Packers & Movers</strong>, our mission is to deliver
          seamless, trustworthy, and efficient moving services that give you peace of mind.
          We envision a world where every relocation is smooth and stress-free —
          with care at the heart of everything we do.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="space-y-6"
        >
          {["name", "phone", "email"].map((field) => (
            <motion.div
              key={field}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <label className="block text-gray-800 font-medium mb-1 capitalize">
                {field}
              </label>
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={`Your ${field}`}
                required
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none bg-white"
              />
            </motion.div>
          ))}

          {/* Message */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            <label className="block text-gray-800 font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="2"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              required
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none resize-none bg-white"
            />
          </motion.div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 via-pink-500 to-red-600 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            🚚 Send Your Message
          </motion.button>
        </motion.form>

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 space-y-6 text-gray-800"
        >
          <h2 className="text-2xl font-bold text-red-700 border-b-4 border-red-400 inline-block pb-1 mb-4">
            📍 Our Branches
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm md:text-base">
            {[
              {
                title: "Head Office – Chennai",
                address: "No 3 A, Mettu Kalazni Street, Adambakkam, Chennai – 600088",
              },
              {
                title: "Bangalore",
                address:
                  "No 63/201, 2nd Cross, JC Road, Kalasipalyam, Bengaluru – 560002",
              },
              {
                title: "Coimbatore",
                address:
                  "Sridevi Nagar, Saibaba Colony, K K Pudur, Coimbatore – 641025",
              },
              {
                title: "Hyderabad",
                address:
                  "Old Bowenpally, Balaji, Secunderabad, Hyderabad – 500011",
              },
              {
                title: "Delhi NCR",
                address: "Dabua Colony near Durga Mandir, Faridabad",
              },
              {
                title: "Agra",
                address: "Kaulakha Crossing, Ukharra Road, Rajpur Chungi, Agra",
              },
            ].map((branch, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-zinc-800">{branch.title}</h4>
                <p className="text-gray-600">{branch.address}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-14 bg-green-50 border border-green-200 p-6 rounded-xl text-center shadow-md"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            💼 Ready for a Hassle-Free Move?
          </h2>
          <p className="text-gray-700 mb-4">
            Get your free quote and let our team handle everything professionally!
          </p>
          <p className="font-semibold text-gray-800 mb-1">
            📞 Sales & Marketing: +91 90878 93000
          </p>
          <p className="font-semibold text-gray-800">
            📞 Help Line: +91 72530 55609
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-lg"
            onClick={() => window.open("https://wa.me/919087893000", "_blank")}
          >
            💬 Chat on WhatsApp
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contactus;
