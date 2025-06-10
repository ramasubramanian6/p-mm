// src/components/Gallery.jsx

import React from 'react';

// Import all images from your specified asset folders
// household images
import household2 from '../assets/household/2.jpg';
import household3 from '../assets/household/3.png'; // Assuming 3.png from the image, but your previous code shows .jpg
import household4 from '../assets/household/4.jpg';
import household5 from '../assets/household/5.jpg';
import household6 from '../assets/household/6.jpg';
import householdH1 from '../assets/household/h1.jpg';

// office images
import office1 from '../assets/office/1.jpg';
import office2 from '../assets/office/2.jpg';
import office3 from '../assets/office/3.jpg';
import office4 from '../assets/office/4.jpg';
import office5 from '../assets/office/5.jpg';
import office6 from '../assets/office/6.jpg';

// review images (from your previous component, just for completeness if needed in gallery)
// import kol from '../assets/reciew/kol.png'; // You've used these in Review component
// import reg from '../assets/reciew/rag.png';
// import raghu from '../assets/reciew/raghu.png';
// import res from '../assets/reciew/res.png';
// import riz from '../assets/reciew/riz.png';

// vehicle images
import vehicle1 from '../assets/vehicle/v1.jpg';
import vehicle2 from '../assets/vehicle/v2.jpg';
import vehicle3 from '../assets/vehicle/v3.jpg';
import vehicle4 from '../assets/vehicle/v4.jpg';
import vehicle5 from '../assets/vehicle/v5.jpg';
import vehicle6 from '../assets/vehicle/v6.jpg';

// warehouse images
import warehouse1 from '../assets/warehouse/w1.jpg';
import warehouse2 from '../assets/warehouse/w2.jpg';
import warehouse3 from '../assets/warehouse/w3.jpg';
import warehouse4 from '../assets/warehouse/w4.jpg';
import warehouse5 from '../assets/warehouse/w5.jpg';
import warehouse6 from '../assets/warehouse/w6.jpg';


const Gallery = () => {
  // Group your images by category for easier rendering
  const galleries = [
    {
      title: "Household Shifting Gallery",
      images: [
        { src: household2, alt: "Household item 2" },
        { src: household3, alt: "Household item 3" },
        { src: household4, alt: "Household item 4" },
        { src: household5, alt: "Household item 5" },
        { src: household6, alt: "Household item 6" },
        { src: householdH1, alt: "Household item h1" },
      ],
    },
    {
      title: "Office Shifting Gallery",
      images: [
        { src: office1, alt: "Office item 1" },
        { src: office2, alt: "Office item 2" },
        { src: office3, alt: "Office item 3" },
        { src: office4, alt: "Office item 4" },
        { src: office5, alt: "Office item 5" },
        { src: office6, alt: "Office item 6" },
      ],
    },
    {
      title: "Vehicle Transport Gallery",
      images: [
        { src: vehicle1, alt: "Vehicle transport 1" },
        { src: vehicle2, alt: "Vehicle transport 2" },
        { src: vehicle3, alt: "Vehicle transport 3" },
        { src: vehicle4, alt: "Vehicle transport 4" },
        { src: vehicle5, alt: "Vehicle transport 5" },
        { src: vehicle6, alt: "Vehicle transport 6" },
      ],
    },
    {
      title: "Warehouse and Storage Gallery",
      images: [
        { src: warehouse1, alt: "Warehouse storage 1" },
        { src: warehouse2, alt: "Warehouse storage 2" },
        { src: warehouse3, alt: "Warehouse storage 3" },
        { src: warehouse4, alt: "Warehouse storage 4" },
        { src: warehouse5, alt: "Warehouse storage 5" },
        { src: warehouse6, alt: "Warehouse storage 6" },
      ],
    },
    // You can add more galleries here if you have other image categories
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-['Poppins'] py-16 md:py-24 lg:py-32"> {/* Adjusted responsive padding here */}
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl md:text-6xl font-bold text-gray-800 mb-16 underline">Our Galleries</h2>

        {galleries.map((gallery, index) => (
          <section key={index} className="mb-20">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-700 mb-12 text-center md:text-left">
              {gallery.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {gallery.images.map((image, imgIndex) => (
                <div key={imgIndex} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold px-4 text-center">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Gallery;