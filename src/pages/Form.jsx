import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    phone: "",
    time: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { from, to, phone, time, service, message } = formData;

    const msg = `Name: ${from}\nMoving To: ${to}\nPhone: ${phone}\nTime: ${time}\nService: ${service}\nMessage: ${message}`;
    const whatsappNumber = "919123456789"; // replace with real number

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold underline mb-4 text-center">
        Best Packers and Movers in Chennai
      </h1>
      <p className="text-xl md:text-2xl mb-6 text-center text-gray-700">
        Home &gt; Chennai
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-lg border"
      >
        <div>
          <label className="block text-lg mb-1">Moving From*</label>
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
            required
            className="w-full p-3 border border-orange-600 rounded-xl"
          />
        </div>

        <div>
          <label className="block text-lg mb-1">Moving To*</label>
          <input
            type="text"
            name="to"
            value={formData.to}
            onChange={handleChange}
            required
            className="w-full p-3 border border-orange-600 rounded-xl"
          />
        </div>

        <div>
          <label className="block text-lg mb-1">Phone*</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-orange-600 rounded-xl"
          />
        </div>

        <div>
          <label className="block text-lg mb-1">Moving Time*</label>
          <input
            type="datetime-local"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-3 border border-orange-600 rounded-xl"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-lg mb-1">Select Service</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 border border-orange-600 rounded-xl"
            required
          >
            <option value="">Choose a service</option>
            <option value="Home Shifting">Home Shifting</option>
            <option value="Office Shifting">Office Shifting</option>
            <option value="Vehicle Shifting">Vehicle Shifting</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-lg mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border border-orange-600 rounded-xl"
            placeholder="Any additional info..."
          />
        </div>

        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-10 py-4 rounded-xl text-xl hover:bg-indigo-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
