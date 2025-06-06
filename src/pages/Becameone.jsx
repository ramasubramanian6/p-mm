import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import icon from "../assets/New folder/icon.png"

export default (props) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Replace with your EmailJS service ID, template ID, and Public Key
        const serviceId = 'YOUR_SERVICE_ID'; // e.g., 'service_xxxxxxx'
        const templateId = 'YOUR_TEMPLATE_ID'; // e.g., 'template_xxxxxxx'
        const publicKey = 'YOUR_PUBLIC_KEY'; // e.g., 'YOUR_PUBLIC_KEY' (found in Account > API Keys)

        const templateParams = {
            from_name: fullName,
            from_email: email,
            phone_number: phoneNumber,
            city: city,
            message: message,
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            alert('Your message has been sent successfully!');
            handleClear(); // Clear the form after successful submission
        } catch (error) {
            console.error('Failed to send message:', error);
            alert('Failed to send message. Please try again later.');
        }
    };

    const handleClear = () => {
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setCity('');
        setMessage('');
    };

    return (
        <div className="min-h-screen w-full bg-white flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
            {/* Main banner image at the top */}
            <div className="relative w-full max-w-6xl mb-12">
                <img
                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/oGkckgQyEn/n1wb7cc7_expires_30_days.png"}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                    alt="Moving company services banner"
                />
            </div>

            {/* Title and description section */}
            <div className="w-full max-w-4xl text-center mb-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                    Become our Partner
                </h1>
            </div>

            {/* Form and Image Side-by-Side Container */}
            {/* This flex container arranges the form and the illustration */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-start justify-center gap-8 lg:gap-12">

                {/* The Form - now takes up more width on larger screens */}
                <form onSubmit={handleSubmit} className="w-full md:w-2/3 bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="p-3 sm:p-4 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-base sm:text-lg"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-3 sm:p-4 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-base sm:text-lg"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="p-3 sm:p-4 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-base sm:text-lg"
                            required
                        />
                        <input
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="p-3 sm:p-4 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-base sm:text-lg"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <textarea
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="1" // Reduced rows slightly for better balance with image
                            className="w-full p-3 sm:p-4 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-base sm:text-lg resize-y"
                            required
                        ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            type="submit"
                            className="flex-1 sm:flex-none bg-[#B02C1A] text-white text-lg sm:text-xl font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out shadow-md"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={handleClear}
                            className="flex-1 sm:flex-none bg-white text-[#B02C1A] text-lg sm:text-xl font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg border-2 border-[#B02C1A] hover:bg-red-50 transition duration-300 ease-in-out shadow-md"
                        >
                            Clear
                        </button>
                    </div>
                </form>

                {/* The "icon" (image) on the right side of the form */}
                <div className="w-full md:w-1/3 flex justify-center items-start pt-8"> {/* Added pt-8 for small screens to prevent overlap if form is taller */}
                    <img
                        src={icon}
                        className="w-full max-w-sm h-auto object-contain rounded-lg shadow-lg md:max-w-full"
                        alt="Partner benefits illustration"
                    />
                </div>
            </div>
        </div>
    );
};