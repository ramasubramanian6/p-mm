import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated, useInView } from 'react-spring';

// Hero Section Component
function HeroSection() {
  return (
    <div className="relative w-full min-h-[300px] md:min-h-[60vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://via.placeholder.com/1500x800" // Replaced suspicious link with a placeholder
          className="w-full h-full object-cover object-center"
          alt="Hero banner"
        />
        <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
          {/* You can add text or other elements here that will be on top of the image */}
        </div>
      </div>
    </div>
  );
}

// About Content Component
function AboutContent() {
  const [ref, inView] = useInView({ once: true });
  const fadeScale = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.95)',
    config: { mass: 0.5, tension: 200, friction: 20 },
  });

  return (
    <animated.div ref={ref} style={fadeScale} className="flex mt-10 md:mt-16 w-full px-4 md:px-8 flex-col items-stretch max-w-none">
      {/* Main Title */}
      <div className="text-black text-3xl md:text-5xl font-bold leading-tight font-['Fira_Sans'] underline self-start max-w-full mb-4 md:mb-8">
        <span className="font-['Poppins'] no-underline">ABOUT </span>
        <span className="font-['Poppins'] text-[#B02C1A]">MOVE</span>
        <span className="font-['Poppins'] no-underline"> MY STUFFS:</span>
      </div>

      {/* First Description Paragraph */}
      <div className="text-black text-lg md:text-2xl font-['Fira_Sans'] font-medium leading-relaxed mt-6 md:mt-10 max-w-full">
        <span className="font-normal">
          Welcome to Move My Stuffs, your trusted partners for all packing and moving needs. Established in
        </span>
        <span className="font-normal"> 2014</span>
        <span className="font-normal">
          , we have over 10 years of experience providing reliable, safe, and cost-effective packing and moving services. As a{" "}
        </span>
        <span className="font-bold">GST-registered company</span>
        <span className="font-normal"> with certifications including </span>
        <span className="font-bold">IBA Approved</span>
        <span className="font-normal">, government Approved and GST Approved. </span>
        <span className="font-normal">
          We pride ourselves on delivering top-quality services to make every move smooth and stress-free.
        </span>
      </div>

      {/* Second Description Paragraph */}
      <div className="text-black text-lg md:text-2xl font-['Fira_Sans'] font-normal leading-relaxed mt-6 max-w-full">
        At Move My Stuffs, we understand the challenges of relocating, which is why our expert team is committed to offering personalized services designed to meet your unique needs. Whether you're moving locally or across the country, we ensure your belongings are handled with the utmost care.
      </div>

      {/* Third Description Paragraph */}
      <div className="text-black text-lg md:text-2xl font-['Fira_Sans'] font-normal leading-relaxed mt-4 max-w-full">
        When it comes to moving—whether you're relocating your home, office, or vehicle—the process can often seem overwhelming. That's where Move My Stuffs comes in: your reliable, efficient, and trusted packers and movers with over{" "}
        <span className="font-bold">10 years of experience</span> in the industry. We pride ourselves on offering seamless moving solutions tailored to meet your specific needs.
      </div>
    </animated.div>
  );
}


function ImageGallery() {
  const galleryRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(galleryRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  const imageConfigs = [
    { id: "04dd9c9fb508706eb8aba48c7bd9bd81ce897523", alt: "Gallery image 1" },
    { id: "752f8ebd30b9e81b800376d12e6519636270f218", alt: "Gallery image 2" },
    { id: "669aa8ee8ab41dec3f7285c8a7cc796724855e4c", alt: "Gallery image 3" },
    { id: "1f13e788d94a71e6e569097eab5bdbfdae6a6e0c", alt: "Gallery image 4" },
    { id: "1e0d7d70388902a4b65f50c96cef6c84bd310631", alt: "Gallery image 5" },
    { id: "1f22c5e08f558890b048a6d8a438a2df263fa2e7", alt: "Gallery image 6" },
  ];

  return (
    <div ref={galleryRef} className="mt-10 md:mt-14 max-w-full">
      {/* First Row of Images */}
      <div className="flex flex-col md:flex-row gap-4">
        {imageConfigs.slice(0, 3).map((img, idx) => (
          <animated.div
            key={img.id}
            className="flex flex-col w-full md:w-1/3 overflow-hidden rounded-lg"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${100 * idx}ms`, // Corrected string interpolation
            }}
          >
            <img
              src={`https://cdn.builder.io/api/v1/image/assets/TEMP/${img.id}?placeholderIfAbsent=true&apiKey=470e3fb85abc4def9f16af01c936a829`}
              className="w-full object-cover object-center aspect-[1.09] transition-transform duration-300 hover:scale-105"
              alt={img.alt}
            />
          </animated.div>
        ))}
      </div>
      {/* Second Row of Images */}
      <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-10">
        {imageConfigs.slice(3).map((img, idx) => (
          <animated.div
            key={img.id}
            className="flex flex-col w-full md:w-1/3 overflow-hidden rounded-lg"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${100 * (idx + 3)}ms`, // Corrected string interpolation
            }}
          >
            <img
              src={`https://cdn.builder.io/api/v1/image/assets/TEMP/${img.id}?placeholderIfAbsent=true&apiKey=470e3fb85abc4def9f16af01c936a829`}
              className="w-full object-cover object-center aspect-[1.09] transition-transform duration-300 hover:scale-105"
              alt={img.alt}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
}

function VerificationSection() {
  const [ref, inView] = useInView({ threshold: 0.3, once: true });
  const verificationData = [
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c6b7191f7fd831a3c94d8fb6df588459195290fd?placeholderIfAbsent=true&apiKey=470e3fb85abc4def9f16af01c936a829", // Corrected '&amp;' to '&'
      alt: "Google verification",
      title: "We're Verified by Google Map",
      description: "Verified by Google Map with hundreds of reviews and 4.9 overall rating.",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/531dc226d59e49c2b2aa152f9463b292f2c87a10?placeholderIfAbsent=true&apiKey=470e3fb85abc4def9f16af01c936a829", // Corrected '&amp;' to '&'
      alt: "Justdial verification",
      title: "Justdial Verified",
      description: "Also verified by Justdial with lots of reviews and positive feedback.",
    },
    {
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/16c476b078717571413ed5c32d70016d9c95478a?placeholderIfAbsent=true&apiKey=470e3fb85abc4def9f16af01c936a829", // Corrected '&amp;' to '&'
      alt: "Assure Shift verification",
      title: "Assure Shift Verified",
      description: "Also verified by Assure Shift with lots of reviews and positive feedback.",
    },
  ];

  return (
    <animated.div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
      }}
      className="bg-[#B02C1A] flex mt-10 md:mt-16 w-full px-4 md:px-10 py-10 md:py-16 flex-col items-center max-w-full"
    >
      <div className="text-white text-2xl md:text-4xl font-['Fira_Sans'] font-bold leading-tight text-center max-w-full">
        We're Verified Business by
      </div>
      <div className="text-white text-base md:text-xl font-['Fira_Sans'] font-medium leading-relaxed text-center mt-6 md:mt-8 max-w-full">
        We're verified by various Organizations. We're running business with more than 10+ Years.
        <br />
        We pack your Things, store your Things and Deliver your Things.
      </div>
      {/* Verification Cards */}
      <div className="w-full max-w-5xl mt-8">
        <div className="flex flex-col md:flex-row gap-4">
          {verificationData.map((item, index) => (
            <animated.div
              key={index}
              className="flex-1 flex flex-col items-center bg-white/80 rounded-lg p-4 transition-transform duration-300 hover:scale-105"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${200 * index}ms`, // Corrected string interpolation
              }}
            >
              <img
                src={item.imgSrc}
                className="w-20 h-20 object-contain"
                alt={item.alt}
              />
              <div className="mt-2 text-lg font-semibold text-black">{item.title}</div>
              <div className="text-sm mt-2 text-center text-gray-700">{item.description}</div>
            </animated.div>
          ))}
        </div>
      </div>
    </animated.div>
  );
}

function FooterSection() {
  const [ref, inView] = useInView({ threshold: 0.2, once: true });
  const footerFade = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: { mass: 0.3, tension: 150, friction: 20 },
  });

  return (
    <animated.div ref={ref} style={footerFade} className="bg-[#B02C1A] mt-6 w-full px-4 md:px-8 py-10 md:py-16 overflow-hidden max-w-full">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Company Info */}
          <div className="flex-1">
            <div className="text-white text-xl md:text-2xl font-['Inter'] font-normal leading-snug mt-2 max-w-full">
              <span className="font-['Poppins'] font-bold text-2xl md:text-3xl text-white">
                Move My Stuffs PACKERS AND MOVERS
              </span>
              <br />
              <span className="font-['Poppins'] font-medium text-lg md:text-xl text-white">
                Since 2014, as a leading moving company, we have been an ISO 9001:2015 and ISO 39001:2012 certified, IBA approved Packers and Movers company, promising and delivering throughout India.
              </span>
              <br />
              <br />
              <span className="font-['Poppins'] font-medium text-2xl md:text-3xl text-white">
                All India Customer Support
              </span>
              <br />
              <span className="font-['Poppins'] font-bold text-3xl md:text-4xl text-white">
                +91-9087893000
              </span>
            </div>
          </div>
          {/* Links and Social */}
          <div className="flex-1">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Quick Links */}
                <div className="flex-1">
                  <div className="text-white text-lg md:text-xl font-['Poppins'] font-semibold mb-2">
                    Quick Links
                  </div>
                  <ul className="list-none space-y-1">
                    <li className="hover:text-gray-300 transition-colors duration-200">Company History</li>
                    <li className="hover:text-gray-300 transition-colors duration-200">Why Choose Us</li>
                    <li className="hover:text-gray-300 transition-colors duration-200">Our Branches</li>
                    <li className="hover:text-gray-300 transition-colors duration-200">For Franchise Enquiry</li>
                    <li className="text-[#C2FB09] hover:text-[#a9d107] transition-colors duration-200">Submit a Complaint</li>
                  </ul>
                </div>
                {/* Services */}
                <div className="flex-1">
                  <div className="text-white text-lg md:text-xl font-['Poppins'] font-semibold mb-2">
                    Services
                  </div>
                  <ul className="list-none space-y-1">
                    <li className="hover:text-gray-300 transition-colors duration-200">Home shifting</li>
                    <li className="hover:text-gray-300 transition-colors duration-200">Office shifting</li>
                    <li className="hover:text-gray-300 transition-colors duration-200">Vehicle transportation</li>
                    <li className="hover:text-gray-300 transition-colors duration-200">Household loading</li>
                    <li className="hover:text-gray-300 transition-colors duration-200">Household Unloading</li>
                  </ul>
                </div>
              </div>
              {/* Social Media */}
              <div className="flex items-center gap-4 mt-2 font-['Poppins'] text-lg md:text-xl text-white font-semibold">
                <img
                  src="[https://via.placeholder.com/40](https://via.placeholder.com/40)" // Replaced suspicious link with placeholder
                  className="w-10 h-10 object-contain cursor-pointer hover:opacity-80 transition-opacity duration-200"
                  alt="Facebook icon"
                />
                <span>Follow Us :</span>
                <img
                  src="[https://via.placeholder.com/40](https://via.placeholder.com/40)" // Replaced suspicious link with placeholder
                  className="w-10 h-10 object-contain cursor-pointer hover:opacity-80 transition-opacity duration-200"
                  alt="Twitter icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-white mt-8 w-full max-w-7xl mx-auto opacity-70" />
      {/* Location Links */}
      <div className="mt-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white font-['Poppins'] text-base md:text-lg font-medium">
        {/* Column 1 */}
        <div className="space-y-1">
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Chennai</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Bangalore</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Mumbai</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Delhi NCR</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Hyderabad</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Kolkata</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Pune</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Ahmedabad</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Coimbatore</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Madurai</div>
        </div>
        {/* Column 2 */}
        <div className="space-y-1">
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Trichy</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Salem</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Tirunelveli</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Erode</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Vellore</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Thoothukudi</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Nagpur</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Nashik</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Aurangabad</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Solapur</div>
        </div>
        {/* Column 3 */}
        <div className="space-y-1">
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Amravati</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Jalgoan</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Kolhapur</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Maharastra</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Madhyapradesh</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Rajasthan</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Uttarpradesh</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Uttarkhand</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Andhrapradesh</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Telungana</div>
        </div>
        {/* Column 4 */}
        <div className="space-y-1">
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Odisha</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Bihar</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in West Bengal</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Himachalpradesh</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Mathura</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Kasganj</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Haldwani</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Gwalior</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Firozabad</div>
          <div className="hover:text-gray-300 transition-colors duration-200">Packers & Movers in Aligarh</div>
        </div>
      </div>
    </animated.div>
  );
}

// Main About Us Component
function AboutUs() {
  return (
    <div className="bg-white">
      <HeroSection />
      <div className="relative rounded-lg bg-white w-full overflow-hidden max-w-none">
        <AboutContent />
        <ImageGallery />
        <VerificationSection />
        <FooterSection />
      </div>
    </div>
  );
}

export default AboutUs;