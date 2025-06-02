import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
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

function Form() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    phone: "",
    time: "",
    service: "",
    message: "",
  });

  // Store lat/lng separately for from and to locations
  const [locations, setLocations] = useState({
    from: [20.5937, 78.9629], // default India center
    to: [20.5937, 78.9629],
  });

  const [mapModal, setMapModal] = useState({ open: false, type: "from" });
  const [selectedLocation, setSelectedLocation] = useState([20.5937, 78.9629]);
  const debouncedLocation = useDebounce(selectedLocation, 500);

  // Update lat/lng for either from or to when debouncedLocation changes
  useEffect(() => {
    if (!mapModal.open) return;
    setLocations((prev) => ({
      ...prev,
      [mapModal.type]: debouncedLocation,
    }));
  }, [debouncedLocation, mapModal.type, mapModal.open]);

  // Reverse Geocode to get city/town/village name from lat/lng
  useEffect(() => {
    if (!mapModal.open) return;

    const fetchCity = async () => {
      const [lat, lon] = debouncedLocation;
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
        );
        const data = await res.json();
        const city =
          data.address?.city ||
          data.address?.town ||
          data.address?.village ||
          data.address?.state ||
          "Selected Location";
        setFormData((prev) => ({
          ...prev,
          [mapModal.type]: city,
        }));
      } catch (err) {
        console.error("Error reverse geocoding:", err);
      }
    };
    fetchCity();
  }, [debouncedLocation, mapModal.type, mapModal.open]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { from, to, phone, time, service, message } = formData;

    // Compose WhatsApp message with Google Maps links
    const msg = `Pickup: ${from}
https://www.google.com/maps?q=${locations.from[0]},${locations.from[1]}

Drop: ${to}
https://www.google.com/maps?q=${locations.to[0]},${locations.to[1]}

Phone: ${phone}
Time: ${time}
Service: ${service}
Message: ${message}`;

    const whatsappNumber = "919384121577"; // Replace with your WhatsApp number
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-4 py-12 max-w-5xl mx-auto"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 underline text-gray-800">
        Best Packers and Movers
      </h1>

      <motion.form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
      >
        <LocationField
          label="Moving From*"
          name="from"
          value={formData.from}
          onChange={handleChange}
          onMapOpen={() => {
            setMapModal({ open: true, type: "from" });
            setSelectedLocation(locations.from);
          }}
        />
        <LocationField
          label="Moving To*"
          name="to"
          value={formData.to}
          onChange={handleChange}
          onMapOpen={() => {
            setMapModal({ open: true, type: "to" });
            setSelectedLocation(locations.to);
          }}
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

        <div className="md:col-span-2">
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
            <option value="Vehicle Shifting">Vehicle Shifting</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-base font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="1"
            placeholder="Any additional info..."
            className="w-full p-3 border border-orange-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>

        <div className="md:col-span-2 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-indigo-600 text-white px-10 py-4 rounded-xl text-lg hover:bg-indigo-700 transition"
          >
            Submit
          </motion.button>
        </div>
      </motion.form>

      <MapModal
        isOpen={mapModal.open}
        onClose={() => setMapModal({ ...mapModal, open: false })}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
    </motion.div>
  );
}

function InputField({ label, name, value, onChange, type }) {
  return (
    <div>
      <label className="block text-base font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full p-3 border border-orange-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
      />
    </div>
  );
}

function LocationField({ label, name, value, onChange, onMapOpen }) {
  return (
    <div>
      <label className="block text-base font-medium text-gray-700 mb-1">{label}</label>
      <div className="flex gap-2">
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          required
          className="flex-1 p-3 border border-orange-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />
        <button
          type="button"
          onClick={onMapOpen}
          className="bg-gray-200 hover:bg-gray-300 text-sm px-4 py-2 rounded-xl"
        >
          Select on Map
        </button>
      </div>
    </div>
  );
}

function LocationSelector({ setSelectedLocation }) {
  useMapEvents({
    click(e) {
      setSelectedLocation([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
}

function MapModal({ isOpen, onClose, selectedLocation, setSelectedLocation }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Select Location"
      className="p-4 bg-white rounded-xl shadow-xl w-full max-w-6xl h-[90vh] overflow-hidden outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <h2 className="text-xl font-bold mb-4">Select Location</h2>
      <div className="w-full h-[70vh] rounded-xl overflow-hidden">
        <MapContainer
          center={selectedLocation}
          zoom={5}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={selectedLocation}
            draggable={true}
            eventHandlers={{
              dragend: (e) => {
                const marker = e.target;
                const position = marker.getLatLng();
                setSelectedLocation([position.lat, position.lng]);
              },
            }}
          />
          <LocationSelector setSelectedLocation={setSelectedLocation} />
        </MapContainer>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-600">
          Lat: {selectedLocation[0].toFixed(4)}, Lng: {selectedLocation[1].toFixed(4)}
        </div>
        <button
          onClick={onClose}
          className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition"
        >
          Done
        </button>
      </div>
    </Modal>
  );
}

export default Form;
