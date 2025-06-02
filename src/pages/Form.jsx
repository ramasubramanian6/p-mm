// src/Form.js
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useSelector, useDispatch } from "react-redux";
import {
  setFormData,
  openMapModal,
  closeMapModal,
  setSelectedLocation,
} from "./redux/formSlice";

// Fix Leaflet icon URLs
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

Modal.setAppElement("#root");

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

function Form() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const mapModal = useSelector((state) => state.form.mapModal);
  const selectedLocation = useSelector((state) => state.form.selectedLocation);
  const debouncedLocation = useDebounce(selectedLocation, 500);

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
          data.address?.county ||
          data.address?.state ||
          "Selected Location";

        dispatch(setFormData({ [mapModal.type]: city }));
      } catch (err) {
        console.error("Reverse geocoding failed:", err);
      }
    };

    fetchCity();
  }, [debouncedLocation, mapModal.open, mapModal.type, dispatch]);

  const handleChange = (e) => {
    dispatch(setFormData({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { from, to, phone, time, service, message } = formData;
    const msg = `Pickup: ${from}\nDrop: ${to}\nPhone: ${phone}\nTime: ${time}\nService: ${service}\nMessage: ${message}`;
    const whatsappNumber = "91908789300";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
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
            rows="2"
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
        onClose={() => dispatch(closeMapModal())}
        selectedLocation={selectedLocation}
        setSelectedLocation={(loc) => dispatch(setSelectedLocation(loc))}
      />
    </motion.div>
  );
}

// Shared field components
function InputField({ label, name, value, onChange, type }) {
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
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          required
          className="flex-grow p-3 border border-orange-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
        />
        <button
          type="button"
          onClick={onMapOpen}
          className="p-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition"
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
      dragend() {}, // no-op
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
      className="bg-white rounded-xl p-4 max-w-3xl w-full mx-4 max-h-[90vh] overflow-auto"
    >
      <button
        onClick={onClose}
        className="mb-4 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
      >
        Close
      </button>
      <MapContainer
        center={selectedLocation}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
    </Modal>
  );
}

export default Form;
