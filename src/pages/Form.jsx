import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFormData,
  openMapModal,
  closeMapModal,
  setSelectedLocation,
} from "./redux/formSlice";
import appov from "../assets/New folder/appov.png"; // Import the IBA approved image
import year from "../assets/New folder/10.png"; // Import the 10+ years trust image
import icon from "../assets/New folder/icon.png"; // Import the icon image

// Fix Leaflet icon URLs for proper display.
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

Modal.setAppElement("#root");

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

// Define your service areas
const SUPPORTED_CITIES = [
  "Mumbai",
  "Pune",
  "Nagpur",
  "Nashik",
  "Aurangabad",
  "Solapur",
  "Amravati",
  "Jalgaon",
  "Kolhapur",
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Trichy",
  "Salem",
  "Tirunelveli",
  "Erode",
  "Vellore",
  "Thoothukudi",
  "Bangalore",
  "Delhi",
  "Noida",
  "Gurgaon",
  "Faridabad",
  "Ghaziabad",
  "Hyderabad",
  "Warangal",
  "Karimnagar",
  "Nizamabad",
  "Khammam",
  "Kolkata",
  "Howrah",
  "Durgapur",
  "Asansol",
  "Siliguri",
  "Kharagpur",
  "Ahmedabad",
  "Indore",
  "Bhopal",
  "Gwalior",
  "Jabalpur",
  "Ujjain",
  "Sagar",
  "Jaipur",
  "Jodhpur",
  "Udaipur",
  "Kota",
  "Bikaner",
  "Ajmer",
  "Bharatpur",
  "Lucknow",
  "Kanpur",
  "Varanasi",
  "Allahabad",
  "Agra",
  "Meerut",
  "Aligarh",
  "Firozabad",
  "Mathura",
  "Etah",
  "Mainpuri",
  "Kasganj",
  "Hathras",
  "Etawah",
  "Dehradun",
  "Haridwar",
  "Rudrapur",
  "Haldwani",
  "Vijayawada",
  "Visakhapatnam",
  "Guntur",
  "Tirupati",
  "Rajahmundry",
  "Kakinada",
  "Bhubaneswar",
  "Cuttack",
  "Rourkela",
  "Sambalpur",
  "Balasore",
  "Patna",
  "Gaya",
  "Bhagalpur",
  "Muzaffarpur",
  "Purnia",
  "Shimla",
  "Manali",
  "Dharamshala",
  "Mandi",
];

function Form() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const mapModal = useSelector((state) => state.form.mapModal);
  const selectedLocation = useSelector((state) => state.form.selectedLocation);

  const debouncedSelectedLocation = useDebounce(selectedLocation, 500); // For map interaction
  const debouncedFromCity = useDebounce(formData.from, 700); // Debounce typed 'from' city
  const debouncedToCity = useDebounce(formData.to, 700);     // Debounce typed 'to' city

  const [currentCity, setCurrentCity] = useState("Chennai");
  const [unservedCityMessage, setUnservedCityMessage] = useState("");
  const [previousFormData, setPreviousFormData] = useState({}); // To revert if city is unserved

  useEffect(() => {
    if (formData.from && formData.from.trim() !== "") {
      setCurrentCity(formData.from);
    } else {
      setCurrentCity("Chennai");
    }
  }, [formData.from]);

  // Effect for handling city selected via map
  useEffect(() => {
    if (!mapModal.open || !debouncedSelectedLocation[0]) { // Only run if modal is open and location is set
      setUnservedCityMessage(""); // Clear message when modal closes
      return;
    }

    const fetchCity = async () => {
      const [lat, lon] = debouncedSelectedLocation;
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
        );
        const data = await res.json();
        const city =
          data.address?.city ||
          data.address?.town ||
          data.address?.village ||
          data.address?.county ||
          data.address?.state ||
          "Selected Location";

        // Check if the city is in the supported list
        const isCityServed = SUPPORTED_CITIES.some(supportedCity => city.toLowerCase().includes(supportedCity.toLowerCase()));

        if (isCityServed) {
          dispatch(setFormData({ [mapModal.type]: city }));
          setUnservedCityMessage(""); // Clear any previous unserved message
        } else {
          setUnservedCityMessage(
            `Currently, service is not available in ${city}. Please select a different location.`
          );
          // Optionally, revert the form field to its previous valid value if map selection is unserved
          // This ensures the input doesn't show an unserved city if the map was used.
          dispatch(setFormData({ [mapModal.type]: previousFormData[mapModal.type] || "" }));
        }
      } catch (err) {
        console.error("Reverse geocoding failed:", err);
        setUnservedCityMessage(
          "Could not determine location from map. Please try again or type manually."
        );
      }
    };

    fetchCity();
  }, [debouncedSelectedLocation, mapModal.open, mapModal.type, dispatch, previousFormData]);



  // New effect for validating typed cities
  useEffect(() => {
    const validateCity = (city, fieldName) => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (city && city.trim() !== "") {
        const isServed = SUPPORTED_CITIES.some(supportedCity => city.toLowerCase().includes(supportedCity.toLowerCase()));
        if (!isServed) {
          setUnservedCityMessage(
            `Currently, service is not available in "${city}" for '${fieldName}' field. Please enter a different location or select from map.`
          );
        } else {
          setUnservedCityMessage(""); // Clear message if a supported city is typed
        }
      } else {
        setUnservedCityMessage(""); // Clear message if input is empty
      }
    };

    if (mapModal.open) return; // Don't validate typed input if map modal is open

    if (debouncedFromCity) {
      validateCity(debouncedFromCity, "Moving From");
    } else if (debouncedToCity) {
      validateCity(debouncedToCity, "Moving To");
    }
  }, [debouncedFromCity, debouncedToCity, mapModal.open]);


  const handleChange = (e) => {
    setPreviousFormData(formData); // Save current form data before potential change
    dispatch(setFormData({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { from, to, phone, time, service, message } = formData;

    // Final check before submitting if the selected cities are served
    const fromCityServed = SUPPORTED_CITIES.some(city => formData.from.toLowerCase().includes(city.toLowerCase()));
    const toCityServed = SUPPORTED_CITIES.some(city => formData.to.toLowerCase().includes(city.toLowerCase()));

    if (!fromCityServed || !toCityServed) {
      alert("Please ensure both 'Moving From' and 'Moving To' locations are in our service areas.");
      return;
    }

    const msg = `Pickup: ${from}\nDrop: ${to}\nPhone: ${phone}\nTime: ${time}\nService: ${service}\nMessage: ${message}`;
    const whatsappNumber = "919087893000";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const replaceCityInContent = (text) => {
    return text.replace(/Chennai/gi, currentCity);
  };

  return (
    <div className="bg-white font-sans">
      <div className="flex flex-col items-center self-stretch bg-white pb-12">
        {/* Header Image Section */}
        <div className="w-full mb-8 md:mb-12">
          <img
            src={
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/oGkckgQyEn/wfrsxkto_expires_30_days.png"
            }
            className="w-full h-64 md:h-96 object-cover rounded-b-xl shadow-lg"
            alt="Packers and Movers Banner 1"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/1200x384/cccccc/000000?text=Banner+Image+Unavailable";
            }}
          />
        </div>

        {/* Functional Form Section - now placed directly after the banner */}
        <div className="flex flex-col shrink-0 items-center bg-gray-100 p-6 sm:p-8 rounded-xl shadow-lg w-full mb-16 mx-4 sm:mx-8 md:mx-12 lg:mx-auto max-w-4xl">
          {" "}
          {/* Adjusted max-w to control form width better if needed, or remove for full width */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
            Get Your Free Moving Quote
          </h2>
          {unservedCityMessage && (
            <p className="text-red-500 text-center mb-4 font-semibold">
              {unservedCityMessage}
            </p>
          )}

          <motion.form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 w-full"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <LocationField
              label="Moving From*"
              name="from"
              value={formData.from}
              onChange={handleChange}
              onMapOpen={() => dispatch(openMapModal("from"))}
            />
            <LocationField
              label="Moving To*"
              name="to"
              value={formData.to}
              onChange={handleChange}
              onMapOpen={() => dispatch(openMapModal("to"))}
            />
            <InputField
              label="Phone*"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
            />
            <InputField
              label="Moving Time*"
              name="time"
              value={formData.time}
              onChange={handleChange}
              type="datetime-local"
            />
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">
                Select Service*
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full p-3 border border-orange-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              >
                <option value="">Choose a service</option>
                <option value="Home Shifting">Home Shifting</option>
                <option value="Office Shifting">Office Shifting</option>
                <option value="Vehicle Shifting">Vehicle Shoption</option>
              </select>
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="Any additional info..."
                className="w-full p-3 border border-orange-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out shadow-md"
              >
                Submit Inquiry
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* Introduction Text - now placed below the form */}
        <div className="flex flex-col items-center self-stretch mb-16 mx-4 sm:mx-8 md:mx-12 lg:mx-auto max-w-7xl">
          <span className="flex-1 text-gray-800 text-lg md:text-xl leading-relaxed mt-4 md:mt-6">
            <h1 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-4">
              {replaceCityInContent("Chennai Packers and Movers")}
            </h1>
            <p className="text-gray-700">
              {replaceCityInContent(
                "Packers and Movers in Chennai, We aim at providing professional level of service at an affordable cost. We offer the best packers and movers services in Chennai with better convenience for you to shift to your desired destination from or to Chennai. We have rendered our services in Chennai in such a way that comes out high on the expectations of our clients."
              )}
            </p>
          </span>
        </div>

        {/* Services and Certifications Section */}
        <div className="flex flex-col lg:flex-row items-start mb-16 mx-4 sm:mx-8 md:mx-12 lg:mx-auto gap-8 max-w-7xl">
          <span className="flex-1 text-gray-800 text-base md:text-lg leading-relaxed mt-4">
            <h2 className="text-xl md:text-2xl font-bold text-indigo-700 mb-4">
              The packers & movers services are offered with following features:
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{replaceCityInContent("Packing - Loading - Unloading - Unpacking in Chennai.")}</li>
              <li>{replaceCityInContent("Car Shifting in Chennai.")}</li>
              <li>Customized Cartons for Fancy Items</li>
              <li>Guaranteed Safety</li>
              <li>{replaceCityInContent("Reasonable Rates in Chennai.")}</li>
              <li>{replaceCityInContent("Timely service in Chennai.")}</li>
              <li>{replaceCityInContent("Custom clearance service in Chennai.")}</li>
              <li>{replaceCityInContent("Warehouse & storage services in Chennai.")}</li>
              <li>{replaceCityInContent("Insurance services in Chennai.")}</li>
              <li>{replaceCityInContent("Corporate relocation in Chennai.")}</li>
              <li>{replaceCityInContent("Office Relocation in Chennai.")}</li>
              <li>{replaceCityInContent("Factory Shifting in Chennai.")}</li>
            </ul>
          </span>
          <div className="flex flex-col shrink-0 items-center lg:items-start gap-6 bg-yellow-50 p-6 rounded-xl shadow-inner w-full lg:w-1/3">
            <span className="text-red-600 text-lg font-bold">
              Beware of frauds
            </span>
            <p className="text-gray-700 text-center lg:text-left">
              {replaceCityInContent(
                "ISO Certified, Govt Authorized, 10+ Years of Trust for Packers & Movers, Transportation and Storage of Goods. Get free quote for Chennai."
              )}
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a
                href="https://www.facebook.com/people/Move-My-Stuffs-Packers-Movers/100076636426701/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-zinc-800 text-white hover:bg-blue-600 transition hover:scale-110"
              >
                <Facebook size={30} />
              </a>
              <a
                href="https://www.instagram.com/move_mystuffs/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-zinc-800 text-white hover:bg-pink-600 transition hover:scale-110"
              >
                <Instagram size={30} />
              </a>
              <a
                href="https://www.youtube.com/@movemystuffs"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-zinc-800 text-white hover:bg-red-600 transition hover:scale-110"
              >
                <Youtube size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Office Shifting Section */}
        <div className="flex flex-col lg:flex-row items-center mb-16 mx-4 sm:mx-8 md:mx-12 lg:mx-auto gap-8 bg-blue-50 p-6 sm:p-8 rounded-xl shadow-lg max-w-7xl">
          <img
            src={
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/oGkckgQyEn/8wwvhrb7_expires_30_days.png"
            }
            className="w-full lg:w-1/2 h-64 md:h-80 object-cover rounded-lg shadow-md"
            alt="Office Shifting"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x320/cccccc/000000?text=Office+Shifting";
            }}
          />
          <span className="flex-1 text-gray-800 text-base md:text-lg leading-relaxed mt-4 lg:mt-0">
            <h2 className="text-xl md:text-2xl font-bold text-indigo-700 mb-4">
              {replaceCityInContent("Office Shifting in Chennai")}
            </h2>
            <p className="text-gray-700">
              {replaceCityInContent(
                "We all understand that time is money. Corporate relocation from best Packers and Movers in Chennai necessitates a well-informed and meticulously trained team. With years of Commercial Packers And Movers experience, Move My Stuffs Packers and Movers in Chennai has the proper Packers And Movers equipment and resources to successfully perform any commercial transfer. For your commercial relocation, we provide the best corporate Packers And Movers solution. Move My Stuffs Packers and Movers, Commercial Movers has the experience and equipment to perform your commercial relocation professionally and with the least downtime. We understand that each company is unique, and understanding the proper questions to ask may make all the difference when it comes to planning and implementing corporate Packers And Movers in Chennai."
              )}
            </p>
          </span>
        </div>

        {/* Home Shifting Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center mb-16 mx-4 sm:mx-8 md:mx-12 lg:mx-auto gap-8 bg-green-50 p-6 sm:p-8 rounded-xl shadow-lg max-w-7xl">
          <img
            src={
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/oGkckgQyEn/9orqvo9o_expires_30_days.png"
            }
            className="w-full lg:w-1/2 h-64 md:h-80 object-cover rounded-lg shadow-md"
            alt="Home Shifting"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x320/cccccc/000000?text=Home+Shifting";
            }}
          />
          <span className="flex-1 text-gray-800 text-base md:text-lg leading-relaxed mt-4 lg:mt-0">
            <h2 className="text-xl md:text-2xl font-bold text-indigo-700 mb-4">
              {replaceCityInContent("Home Shifting in Chennai")}
            </h2>
            <p className="text-gray-700">
              {replaceCityInContent(
                "To find best Packers and Movers in Chennai for home shifting, we are at your service in Chennai. Packing and moving out of your Chennai home may be a stressful experience for any family. We have been able to deliver trustworthy and economical International Residential Household Goods Packers And Movers Services in Chennai with the help of our qualified employees. With the help of a large warehouse and packing facility overseen by our professionals, we have been able to provide these services in the most efficient manner possible. We provide all forms of packaging services to our Chennai clients, depending on their needs. We transport their household stuff in Chennai in a timely and damage-free manner. With our experience and professionalism, Move My Stuffs Packers and Movers can help make this relocation as stress-free as possible."
              )}
            </p>
          </span>
        </div>

        {/* Transportation Section */}
        <div className="flex flex-col lg:flex-row items-center mb-16 mx-4 sm:mx-8 md:mx-12 lg:mx-auto gap-8 bg-purple-50 p-6 sm:p-8 rounded-xl shadow-lg max-w-7xl">
          <img
            src={
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/oGkckgQyEn/l6tf3zno_expires_30_days.png"
            }
            className="w-full lg:w-1/2 h-64 md:h-80 object-cover rounded-lg shadow-md"
            alt="Transportation"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x320/cccccc/000000?text=Transportation";
            }}
          />
          <span className="flex-1 text-gray-800 text-base md:text-lg leading-relaxed mt-4 lg:mt-0">
            <h2 className="text-xl md:text-2xl font-bold text-indigo-700 mb-4">
              {replaceCityInContent("Transportation in Chennai")}
            </h2>
            <p className="text-gray-700">
              {replaceCityInContent(
                "You've come to the perfect location if you're looking for safe car transportation in Chennai. Move My Stuffs Packers and Movers is India's best movers and packers in Chennai. We'll connect you to the person who will deliver your vehicle to any location from Chennai. We provide you with an unbiased assessment of every automobile relocation service in Chennai based on our and our customers' experiences, so you can make an informed selection. Move My Stuffs packers and movers is your one-stop shop for everything you need to know about car relocation services in Chennai."
              )}
            </p>
          </span>
        </div>

        {/* Loading & Unloading Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center mb-16 mx-4 sm:mx-8 md:mx-12 lg:mx-auto gap-8 bg-red-50 p-6 sm:p-8 rounded-xl shadow-lg max-w-7xl">
          <img
            src={
              "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/oGkckgQyEn/d3uqclj0_expires_30_days.png"
            }
            className="w-full lg:w-1/2 h-64 md:h-80 object-cover rounded-lg shadow-md"
            alt="Loading & Unloading"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x320/cccccc/000000?text=Loading+Unloading";
            }}
          />
          <span className="flex-1 text-gray-800 text-base md:text-lg leading-relaxed mt-4 lg:mt-0">
            <h2 className="text-xl md:text-2xl font-bold text-indigo-700 mb-4">
              {replaceCityInContent("Loading & Unloading in Chennai")}
            </h2>
            <p className="text-gray-700">
              {replaceCityInContent(
                "In Chennai, Loading and Unloading of goods is a risky job and should only be handled by professionals. We have experience handyman for loading and unloading of goods and assets in Chennai."
              )}
            </p>
          </span>
        </div>

        <div className="self-stretch bg-gray-300 h-[1px] my-8 mx-4 sm:mx-8 md:mx-12 lg:mx-auto max-w-7xl rounded-full"></div>

        {/* IBA Approved Packers and Movers Section */}
        <div className="flex flex-col lg:flex-row items-center mb-16 mx-4 sm:mx-8 md:mx-12 lg:mx-auto gap-8 bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg max-w-7xl">
          <span className="flex-1 text-gray-800 text-base md:text-lg leading-relaxed mt-4 lg:mt-0">
            <h2 className="text-xl md:text-2xl font-bold text-indigo-700 mb-4">
              {replaceCityInContent("IBA Approved Packers and Movers in Chennai")}
            </h2>
            <p className="text-gray-700">
              {replaceCityInContent(
                "Our IBA Approved Packers and Movers in Chennai give the best Packer and Mover service to our valued customers. Many packers and movers work in India, but we are just there to deliver the best and safest packers and movers. Our staff works to help our clients by providing insured services. Move My Stuffs Packers and Movers is an IBA Approved Packers and Movers in Chennai that will make your relocation a breeze. We provide IBA (India Bank Approval) Approved Transporters and Packers Movers Company in Chennai providing IBA Approved Bills and the highest quality packing services."
              )}
            </p>
          </span>
          <img
            src={appov}
            className="w-full lg:w-1/3 h-48 md:h-64 object-contain rounded-lg shadow-md"
            alt="IBA Approved Certification"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/400x256/cccccc/000000?text=IBA+Approved";
            }}
          />
        </div>

        {/* Reputable Packers and Movers in Chennai Section */}
        <div className="relative flex flex-col lg:flex-row items-center mb-16 mx-4 sm:mx-8 md:mx-12 lg:mx-auto gap-8 bg-blue-100 p-6 sm:p-8 rounded-xl shadow-lg max-w-7xl">
          <img
            src={year}
            className="w-full lg:w-1/2 h-64 md:h-80 object-cover rounded-lg shadow-md"
            alt="Reputable Movers"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x320/cccccc/000000?text=Reputable+Movers";
            }}
          />
          <span className="text-gray-800 text-base md:text-lg leading-relaxed mt-4 lg:mt-0 lg:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold text-indigo-700 mb-4">
              {replaceCityInContent("Reputable Packers and Movers in Chennai:")}
            </h2>
            <p className="text-gray-700">
              {replaceCityInContent(
                "Over a Decade of Safe, Dependable, and Stress-Free Relocation Services. With Over a Decade of Local Experience Serving individuals, families, and businesses throughout Chennai, we are among the most reputable packers and movers in the region thanks to our more than ten years of experience in the relocation sector. We guarantee a seamless and stress-free relocation—whether you're moving within Chennai."
              )}
            </p>
          </span>
        </div>

        {/* Customer Support Section */}
        <div className="flex flex-col lg:flex-row items-start self-stretch mx-4 sm:mx-8 md:mx-12 lg:mx-auto gap-8 bg-gray-100 p-6 sm:p-8 rounded-xl shadow-lg max-w-7xl">
          <span className="flex-1 text-gray-800 text-base md:text-lg leading-relaxed mt-4 lg:mt-0">
            <h2 className="text-xl md:text-2xl font-bold text-indigo-700 mb-4">
              {replaceCityInContent(
                "Customer Support For Complaints and Bills Related Issues in Chennai."
              )}
            </h2>
            <p className="mb-4 text-gray-700">
              {replaceCityInContent(
                "Move My Stuffs Packers And Movers in Chennai stands out in the relocation services industry, providing safe, reliable, and comprehensive moving solutions throughout India. We are committed to customer satisfaction, treating every move with the highest level of care, whether it's in Chennai local or long-distance. Our expert team ensures that your belongings are transported securely and on time, making your moving experience as smooth as possible. In addition to transportation, we offer strong support, helping clients with billing questions, resolving complaints, and providing personalized guidance every step of the way. With Move My Stuffs Packers And Movers in Chennai, you not only enjoy a hassle-free relocation but also receive dedicated service that focuses on your peace of mind."
              )}
            </p>
            <p className="font-bold text-lg md:text-xl text-green-700">
              Contact Us: +91 9087893000
            </p>
          </span>
          <img
            src={icon}
            className="w-full lg:w-1/2 h-64 md:h-80 object-cover rounded-lg shadow-md mt-4 lg:mt-25"
            alt="Customer Support"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x320/cccccc/000000?text=Customer+Support";
            }}
          />
        </div>
      </div>
      <MapModal
        isOpen={mapModal.open}
        onClose={() => dispatch(closeMapModal())}
        selectedLocation={selectedLocation}
        setSelectedLocation={(loc) => dispatch(setSelectedLocation(loc))}
      />
    </div>
  );
}

// Shared field components
function InputField({ label, name, value, onChange, type, placeholder }) {
  return (
    <div>
      <label className="block text-base font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full p-3 border border-orange-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
      />
    </div>
  );
}

function LocationField({ label, name, value, onChange, onMapOpen }) {
  return (
    <div>
      <label className="block text-base font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="flex gap-4">
        <input
          type="text" // Allow typing
          name={name}
          value={value}
          onChange={onChange}
          required
          placeholder={`Enter your ${label.toLowerCase()}`} // Added placeholder
          className="flex-grow p-3 border border-orange-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />
        <button
          type="button"
          onClick={onMapOpen}
          className="p-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition shadow-md"
        >
          📍
        </button>
      </div>
    </div>
  );
}

function MapModal({ isOpen, onClose, selectedLocation, setSelectedLocation }) {
  function LocationMarker() {
    useMapEvents({
      // We keep dragend here to update the selectedLocation in the Redux store
      // The actual city validation happens in the Form component's useEffect
      dragend(e) {
        const latlng = e.target.getLatLng();
        setSelectedLocation([latlng.lat, latlng.lng]);
      },
      // You can add a click event listener if you want to update location on map click
      click(e) { // Added click event to update location
        const latlng = e.latlng;
        setSelectedLocation([latlng.lat, latlng.lng]);
      },
    });
    return (
      <Marker
        draggable={true}
        position={selectedLocation}
        eventHandlers={{
          dragend(e) {
            const latlng = e.target.getLatLng();
            setSelectedLocation([latlng.lat, latlng.lng]);
          },
        }}
      />
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Select Location on Map"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      className="bg-white rounded-xl p-4 max-w-3xl w-full mx-4 max-h-[90vh] overflow-auto shadow-2xl"
    >
      <button
        onClick={onClose}
        className="mb-4 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition shadow-md"
      >
        Close
      </button>
      <MapContainer
        center={selectedLocation}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
      </MapContainer>
    </Modal>
  );
}

export default Form;