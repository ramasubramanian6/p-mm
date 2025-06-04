import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated, useInView } from 'react-spring';
import Whychooseus from '../../src/assets/whychooseus/whychooseus.png'
import aboutpng from '../../src/assets/whychooseus/aboutpng.png'
import vech from "../../src/assets/home/vehicle2.png"
import home from "../../src/assets/home/home.png"
import office from "../../src/assets/home/office.png"
import load from "../../src/assets/whychooseus/load.jpg"
import sec from "../../src/assets/whychooseus/sec.jpg"

// Hero Section Component
function HeroSection() {
  return (
    <div className="relative w-full h-[350px] md:h-[60vh] overflow-hidden bg-gradient-to-r from-gray-100 to-gray-300 mb-16 md:mb-20">
      <div className="absolute inset-0">
        <img
          src={aboutpng}
          className="w-full h-full  object-fit opacity-40"
          alt="Professional moving truck and team providing reliable packers and movers solutions"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight font-['Poppins'] drop-shadow-lg">
            About Move My Stuffs: Your Trusted Packers and Movers
          </h1>
          <p className="text-white text-lg md:text-2xl font-medium mt-4 font-['Fira_Sans']">
            Your Reliable Partner for Seamless Relocations across India.
          </p>
        </div>
      </div>
    </div>
  );
}

// Section introducing the company and its core values
function AboutIntroduction() {
  const [ref, inView] = useInView({ once: true, threshold: 0.2 });
  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 200, friction: 20 },
  });

  return (
    <animated.section ref={ref} style={springProps} className="max-w-7xl mx-auto mb-16 md:mb-20 px-4 md:px-8">
      <h2 className="text-black text-3xl md:text-5xl font-bold font-['Poppins'] text-center mb-10">
        Who We Are: Experienced & Certified Movers
      </h2>
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <img
            src={Whychooseus}
            alt="Professional moving team efficiently packing and handling items"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
        <div className="md:w-1/2 text-black text-lg md:text-xl font-['Fira_Sans'] leading-relaxed">
          <p className="mb-4">
            Welcome to <span className="font-bold">Move My Stuffs</span>, your trusted partners for all packing and moving needs. Established in <span className="font-bold">2014</span>, we boast over <span className="font-bold">10 years of experience</span> in providing reliable, safe, and cost-effective packing and moving services across India.
          </p>
          <p className="mb-4">
            As a <span className="font-bold">GST-registered company</span>, we adhere to the highest standards of professionalism and transparency. Our certifications, including <span className="font-bold text-[#B02C1A]">IBA Approved</span> and Government Approved status, underscore our commitment to quality and customer satisfaction.
          </p>
          <p>
            We pride ourselves on delivering top-quality services to make every move smooth, efficient, and completely stress-free. Your peace of mind is our priority.
          </p>
        </div>
      </div>
    </animated.section>
  );
}

// Our Core Values Section
function OurCoreValues() {
  const [ref, inView] = useInView({ once: true, threshold: 0.3 });
  const values = [
    {
      icon: '🎯',
      title: 'Customer Satisfaction',
      description: 'We prioritize your needs, striving to exceed expectations with every move.',
    },
    {
      icon: '✅',
      title: 'Integrity & Trust',
      description: 'Operating with transparency and honesty in all our dealings.',
    },
    {
      icon: '✨',
      title: 'Excellence in Service',
      description: 'Committed to delivering top-tier packing and moving solutions.',
    },
    {
      icon: '🤝',
      title: 'Teamwork & Care',
      description: 'Our expert team works cohesively, handling your belongings with utmost care.',
    },
  ];

  return (
    <animated.section ref={ref} className="bg-white max-w-7xl mx-auto py-16 px-4 md:px-8 mb-16 md:mb-20">
      <h2 className="text-black text-3xl md:text-5xl font-bold font-['Poppins'] text-center mb-12">
        Our Core Values Driving Quality Relocation Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <animated.div
            key={index}
            style={useSpring({
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(30px)',
              delay: 150 * index,
              config: { mass: 1, tension: 200, friction: 20 },
            })}
            className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="text-6xl mb-4">{value.icon}</div>
            <h3 className="text-xl md:text-2xl font-bold text-[#B02C1A] mb-2 font-['Poppins']">
              {value.title}
            </h3>
            <p className="text-gray-700 font-['Fira_Sans'] text-base">
              {value.description}
            </p>
          </animated.div>
        ))}
      </div>
    </animated.section>
  );
}

// Our Seamless Process Section
function OurProcess() {
  const [ref, inView] = useInView({ once: true, threshold: 0.3 });
  const steps = [
    {
      icon: '📝',
      title: '1. Initial Inquiry & Quote',
      description: 'Contact us with your moving details. We provide a transparent, no-obligation quote tailored to your specific needs.',
    },
    {
      icon: '🗓️',
      title: '2. Schedule & Plan',
      description: 'Once you confirm, we help you plan and schedule your move at your convenience. Our experts strategize for efficiency.',
    },
    {
      icon: '📦',
      title: '3. Expert Packing & Loading',
      description: 'Our professional team arrives to carefully pack, secure, and load your belongings using high-quality materials and techniques.',
    },
    {
      icon: '🚚',
      title: '4. Safe Transportation',
      description: 'Your goods are transported securely to the new location in our well-maintained and GPS-enabled fleet.',
    },
    {
      icon: '🏡',
      title: '5. Unloading & Unpacking',
      description: 'At the destination, we meticulously unload and, if requested, unpack and arrange your items, ensuring a smooth settling-in.',
    },
    {
      icon: '✨',
      title: '6. Post-Move Support',
      description: 'Our service doesn\'t end with delivery. We ensure everything is to your satisfaction and address any post-move queries.',
    },
  ];

  return (
    <animated.section ref={ref} className="bg-gray-50 max-w-full mx-auto py-16 px-4 md:px-8 mb-16 md:mb-20">
      <h2 className="text-black text-3xl md:text-5xl font-bold font-['Poppins'] text-center mb-12">
        Our Seamless Packers and Movers Process
      </h2>
      <div className="relative flex flex-col items-center">
        {/* Timeline Line (for larger screens) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#B02C1A] z-0 top-0 bottom-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-16 max-w-6xl mx-auto relative z-10">
          {steps.map((step, index) => (
            <animated.div
              key={index}
              style={useSpring({
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                delay: 150 * index,
                config: { mass: 1, tension: 200, friction: 20 },
              })}
              className={`flex items-start md:items-center gap-4 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} `}
            >
              <div className={`hidden md:flex flex-col items-center ${index % 2 === 0 ? 'order-2 ml-4' : 'order-1 mr-4'}`}>
                <div className="w-12 h-12 flex items-center justify-center bg-[#B02C1A] text-white rounded-full shadow-lg text-2xl font-bold flex-shrink-0">
                  {step.icon}
                </div>
              </div>
              <div className="flex-1 p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2 font-['Poppins']">
                  {step.title}
                </h3>
                <p className="text-gray-700 font-['Fira_Sans'] text-base md:text-lg">
                  {step.description}
                </p>
              </div>
              <div className="md:hidden flex flex-col items-center mr-4 flex-shrink-0"> {/* For mobile alignment */}
                 <div className="w-12 h-12 flex items-center justify-center bg-[#B02C1A] text-white rounded-full shadow-lg text-2xl font-bold">
                  {step.icon}
                </div>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </animated.section>
  );
}

// Service Showcase Carousel Component
function ServiceShowcaseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({ once: true, threshold: 0.2 });

  const slides = [
    {
      id: 1,
      image: home,
      title: "Expert Packing & Protection",
      description: "Our skilled team uses high-quality materials to securely pack all your belongings, from fragile items to large furniture.",
      alt: "Professional movers carefully packing fragile items in boxes"
    },
    {
      id: 2,
      image: load,
      title: "Efficient Loading & Moving",
      description: "We handle loading and unloading with utmost care, ensuring the safety of your valuables throughout the process.",
      alt: "Movers loading furniture and boxes onto a moving truck"
    },
    {
      id: 3,
      image: sec,
      title: "Secure Transportation",
      description: "With our well-maintained fleet and experienced drivers, your goods are transported safely and efficiently to your new destination.",
      alt: "Modern moving truck driving on a highway, symbolizing secure transportation"
    },
    {
      id: 4,
      image: office,
      title: "Hassle-Free Office Relocation",
      description: "Minimize downtime with our specialized office moving services, designed for quick and seamless business transitions.",
      alt: "Office movers relocating desks and computer equipment"
    },
    {
      id: 5,
      image: vech,
      title: "Safe Vehicle Shifting",
      description: "We provide reliable and secure transportation for your cars and bikes across long distances.",
      alt: "Car being loaded onto a specialized vehicle transport carrier"
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 200, friction: 20 },
  });

  const slideAnimation = useSpring({
    transform: `translateX(-${currentIndex * 100}%)`,
    config: { mass: 1, tension: 200, friction: 30 },
  });

  return (
    <animated.section ref={ref} style={springProps} className="mb-16 md:mb-20 max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="text-black text-3xl md:text-5xl font-bold font-['Poppins'] text-center mb-10">
        Our Comprehensive Packers and Movers Services
      </h2>
      <div className="relative overflow-hidden rounded-lg shadow-xl bg-white">
        <div className="flex">
          <animated.div
            style={slideAnimation}
            className="flex flex-row w-full"
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0 flex flex-col md:flex-row items-center p-6 md:p-10 gap-6">
                <div className="md:w-1/2">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-auto rounded-lg object-cover aspect-[1.5]"
                  />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#B02C1A] mb-3 font-['Poppins']">
                    {slide.title}
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg font-['Fira_Sans']">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </animated.div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
          aria-label="Previous slide"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10"
          aria-label="Next slide"
        >
          &gt;
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#B02C1A]' : 'bg-gray-400'} transition-colors`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </animated.section>
  );
}


// Verification Section
function VerificationSection() {
  const [ref, inView] = useInView({ threshold: 0.3, once: true });
  const verificationData = [
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6b7191f7fd831a3c94d8fb6df588459195290fd?placeholderIfAbsent=true&apiKey=470e3fb85abc4def9f16af01c936a829",
      alt: "Google Maps logo and reviews for Move My Stuffs",
      title: "Google Map Verified",
      description: "Trusted by hundreds with a 4.9 overall rating on Google Maps.",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/531dc226d59e49c2b2aa152f9463b292f2c87a10?placeholderIfAbsent=true&apiKey=470e3fb85abc4def9f16af01c936a829",
      alt: "Justdial logo and verification stamp",
      title: "Justdial Verified",
      description: "Also verified by Justdial, with numerous positive testimonials.",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/16c476b078717571413ed5c32d70016d9c95478a?placeholderIfAbsent=true&apiKey=470e3fb85abc4def9f16af01c936a829",
      alt: "Assure Shift logo for verified movers",
      title: "Assure Shift Verified",
      description: "Recognized and verified by Assure Shift for reliable services.",
    },
  ];

  return (
    <animated.section
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
      }}
      className="bg-[#B02C1A] flex w-full px-4 md:px-10 py-10 md:py-16 flex-col items-center max-w-full mb-16 md:mb-20"
    >
      <h2 className="text-white text-3xl md:text-5xl font-['Poppins'] font-bold leading-tight text-center max-w-full mb-8">
        Our Verified Credentials & Trust Badges
      </h2>
      <p className="text-white text-base md:text-xl font-['Fira_Sans'] font-medium leading-relaxed text-center mt-6 md:mt-8 max-w-3xl">
        We are a business built on trust and transparency, officially verified by leading organizations to assure you of our legitimate and high-quality services.
      </p>
      {/* Verification Cards */}
      <div className="w-full max-w-5xl mt-12">
        <div className="flex flex-col md:flex-row gap-6">
          {verificationData.map((item, index) => (
            <animated.div
              key={index}
              className="flex-1 flex flex-col items-center bg-white/90 rounded-lg p-6 shadow-xl transition-transform duration-300 hover:scale-105"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${200 * index}ms`,
              }}
            >
              <img
                src={item.imgSrc}
                className="w-24 h-24 object-contain mb-4"
                alt={item.alt}
              />
              <h3 className="text-xl font-semibold text-black text-center font-['Poppins']">{item.title}</h3>
              <div className="text-base mt-2 text-center text-gray-700 font-['Fira_Sans']">{item.description}</div>
            </animated.div>
          ))}
        </div>
      </div>
    </animated.section>
  );
}


// Main About Us Component
function AboutUs() {
  // Define schema markup for LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Move My Stuffs Packers and Movers",
    "image": "https://www.movemystuffs.com/logo.png", // Replace with your actual logo URL
    "@id": "https://www.movemystuffs.com/about-us", // Canonical URL for the About Us page
    "url": "https://www.movemystuffs.com/about-us",
    "telephone": "+91-9876543210", // Replace with your actual phone number
    "email": "info@movemystuffs.com", // Replace with your actual email
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Road", // Replace with your actual street address
      "addressLocality": "Tirunelveli", // Current location specified by user
      "addressRegion": "Tamil Nadu", // Current region
      "postalCode": "627001", // Example postal code for Tirunelveli
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "priceRange": "$$", // Indicating a moderate price range
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Moving Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Household Shifting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Office Relocation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vehicle Transportation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Packing and Unpacking Services"
          }
        }
      ]
    },
    "description": "Move My Stuffs provides reliable and trusted packers and movers services in Tirunelveli, Tamil Nadu, with over 10 years of experience. We offer seamless household shifting, office relocation, and vehicle transportation.",
    "aggregateRating": { // Example, update with actual if you have consistent review data
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250"
    },
    "sameAs": [
      "https://www.facebook.com/your-company-page", // Replace with your social media links
      "https://www.linkedin.com/company/your-company-page",
      "https://www.instagram.com/your-company-page"
    ]
  };

  return (
    <div className="bg-white font-['Fira_Sans']">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <HeroSection />
      <AboutIntroduction />
      <OurCoreValues />
      <OurProcess />
      <ServiceShowcaseCarousel />
      <VerificationSection />
      {/* Final generous spacing at the bottom of the page */}
      <div className="pb-20 md:pb-32"></div>
    </div>
  );
}

export default AboutUs;