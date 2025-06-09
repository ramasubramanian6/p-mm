import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

// Structured content for each service, including path for navigation and SEO details
const services = [
  {
    title: "Home Shifting",
    description:
      "Our comprehensive home shifting services ensure a smooth and stress-free relocation experience. We handle everything from careful packing and secure loading to efficient transportation and timely unloading at your new residence. Trust us for a hassle-free move with zero breakage.",
    bulletPoints: [
      "Professional Packing & Unpacking",
      "Secure Loading & Unloading",
      "Efficient Transportation across India",
      "Furniture Disassembly & Reassembly",
      "Insurance Coverage for Valuables",
    ],
    keywords:
      "household shifting, home relocation, residential movers, house shifting services, flat shifting, local home movers",
    path: "/household",
    callToAction: "Get a Free Home Shifting Quote",
  },
  {
    title: "Office Relocation",
    description:
      "Minimize downtime and ensure a seamless transition for your business with our expert office relocation services. We meticulously plan and execute office moves, handling sensitive equipment and important documents with utmost care and confidentiality.",
    bulletPoints: [
      "Systematic Planning & Execution",
      "Safe Handling of Office Equipment",
      "Confidential Document Relocation",
      "Minimal Business Disruption",
      "IT Infrastructure Moving Solutions",
    ],
    keywords:
      "office movers, business relocation, corporate shifting, commercial moving services, IT relocation",
    path: "/office",
    callToAction: "Plan Your Office Move",
  },
  {
    title: "Vehicle Transportation",
    description:
      "Transport your car or bike safely and securely across any distance in India. Our specialized vehicle carriers ensure your beloved vehicle reaches its destination without a scratch, offering both open and enclosed carrier options.",
    bulletPoints: [
      "Door-to-Door Vehicle Delivery",
      "Open & Enclosed Car Carriers",
      "Two-Wheeler Transportation",
      "Real-time Tracking",
      "Comprehensive Insurance",
    ],
    keywords:
      "car transport, bike courier, vehicle shifting, auto movers, vehicle logistics, car relocation",
    path: "/vehicle",
    callToAction: "Transport Your Vehicle Now",
  },
  {
    title: "Packing Services",
    description:
      "Don't stress over packing! Our professional packers use high-quality, durable packing materials and advanced techniques to safeguard your belongings. From fragile items to bulky furniture, everything is packed with precision and care.",
    bulletPoints: [
      "Full Packing & Partial Packing",
      "Custom Crating for Fragile Items",
      "High-Quality Packing Materials (Bubble Wrap, Cartons, etc.)",
      "Labeling and Inventory Management",
      "Eco-friendly Packing Options",
    ],
    keywords:
      "professional packing, moving supplies, fragile item packing, packing and unpacking services, premium packing solutions",
    path: "/ourservices",
    callToAction: "Request Packing Assistance",
  },
  {
    title: "Warehouse Storage",
    description:
      "Need extra space during relocation or renovation? Our secure and flexible warehouse storage solutions are available for short-term and long-term needs. Each facility is monitored 24/7 with proper ventilation and hygiene.",
    bulletPoints: [
      "Short-Term & Long-Term Storage Plans",
      "24x7 Surveillance & Fire Safety",
      "Climate-Controlled & Pest-Free Environment",
      "Barcode-Based Inventory Management",
      "Easy Retrieval & Scheduled Delivery",
    ],
    keywords:
      "warehouse storage, household storage, business inventory storage, temporary storage facility, storage with pickup",
    path: "/warehouse",
    callToAction: "Book Your Storage Space",
  },
  {
    title: "Intercity & Outstation Moving",
    description:
      "Relocating to another city? Our long-distance relocation services ensure a smooth and secure transition with timely delivery. We serve all major cities and towns across India with real-time tracking and dedicated support.",
    bulletPoints: [
      "Pan-India Coverage with Door-to-Door Service",
      "Dedicated Moving Coordinators",
      "Real-Time Location Tracking",
      "Affordable Pricing with Flexible Packages",
      "Free Pre-Move Survey & Consultation",
    ],
    keywords:
      "long distance moving, intercity relocation, city to city shifting, outstation movers, India-wide packers and movers",
    path: "/household",
    callToAction: "Schedule Your Outstation Move",
  },
];

export default function OurServices() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Helper function to navigate to a specific path and scroll to the top of the page
  const navigateAndScroll = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Ensures scroll to top on navigation
  };

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
          Our Comprehensive Services
        </h2>
        <p className="mt-2 text-gray-600 text-base md:text-lg font-fira">
          At Move My Stuffs, we offer a wide range of reliable and efficient
          packing and moving solutions tailored to your unique needs. Whether
          it's a household shift, an office relocation, or vehicle
          transportation, our expert team ensures a seamless experience.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {services.map(
          (
            service,
            idx // Use 'service' object directly
          ) => (
            <motion.div
              key={service.title} // Use title as key
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-white border border-red-100 rounded-lg p-5 shadow-sm hover:shadow-md transition duration-300 cursor-pointer" // Add cursor-pointer
              onClick={() => navigateAndScroll(service.path)} // Navigate on click
            >
              <h3 className="text-lg md:text-xl font-semibold text-red-600 mb-2 font-fira">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base font-fira leading-relaxed mb-4">
                {service.description}
              </p>
              {service.bulletPoints && service.bulletPoints.length > 0 && (
                <ul className="list-disc list-inside text-gray-600 text-sm md:text-base mb-4">
                  {service.bulletPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
              <button
                onClick={(e) => {
                  // Prevent card click from propagating when button is clicked
                  e.stopPropagation();
                  navigateAndScroll(service.path);
                }}
                className="mt-2 inline-block bg-[#B02C1A] text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300 text-sm md:text-base"
              >
                {service.callToAction || "Learn More"}
              </button>
              {/* Optional: Add a hidden meta tag for keywords if this component is used in a <head> management system */}
              {/* <meta name="keywords" content={service.keywords} /> */}
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
