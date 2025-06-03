import React from "react";

// Hero Section Component
function HeroSection() {
  return (
    <div className="relative w-full min-h-[300px] md:min-h-[60vh]">
      
      <div className="relative bg-white/80 rounded-lg w-full overflow-hidden max-w-none">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a73b3305b41e840773e5088287f701f3cfccbf54?placeholderIfAbsent=true&apiKey=470e3fb85abc4def9f16af01c936a829"
          className="w-full object-contain object-center"
          style={{ aspectRatio: "4.24" }}
          alt="Hero banner"
        />
      </div>
    </div>
  );
}

// About Content Component
function AboutContent() {
  return (
    <div className="flex mt-10 md:mt-16 w-full px-4 md:px-8 flex-col items-stretch max-w-none">
      {/* Main Title */}
      <div className="text-black text-3xl md:text-5xl font-bold leading-tight font-['Fira_Sans'] underline self-start max-w-full">
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
    </div>
  );
}

// Image Gallery Component
function ImageGallery() {
  return (
    <div className="mt-10 md:mt-14 max-w-full">
      {/* First Row of Images */}
      <div className="flex flex-col md:flex-row gap-4">
        {[
          "04dd9c9fb508706eb8aba48c7bd9bd81ce897523",
          "752f8ebd30b9e81b800376d12e6519636270f218",
          "669aa8ee8ab41dec3f7285c8a7cc796724855e4c",
        ].map((id, idx) => (
          <div className="flex flex-col w-full md:w-1/3" key={idx}>
            <img
              src={`https://cdn.builder.io/api/v1/image/assets/TEMP/${id}?placeholderIfAbsent=true&apiKey=470e3fb85abc4def9f16af01c936a829`}
              className="w-full rounded-lg object-cover object-center aspect-[1.09]"
              alt={`Gallery image ${idx + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Second Row of Images */}
      <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-10">
        {[
          "1f13e788d94a71e6e569097eab5bdbfdae6a6e0c",
          "1e0d7d70388902a4b65f50c96cef6c84bd310631",
          "1f22c5e08f558890b048a6d8a438a2df263fa2e7",
        ].map((id, idx) => (
          <div className="flex flex-col w-full md:w-1/3" key={idx}>
            <img
              src={`https://cdn.builder.io/api/v1/image/assets/TEMP/${id}?placeholderIfAbsent=true&apiKey=470e3fb85abc4def9f16af01c936a829`}
              className="w-full rounded-lg object-cover object-center aspect-[1.09]"
              alt={`Gallery image ${idx + 4}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// Verification Section Component
function VerificationSection() {
  return (
    <div className="bg-[#B02C1A] flex mt-10 md:mt-16 w-full px-4 md:px-10 py-10 md:py-16 flex-col items-center max-w-full">
      <div className="text-black text-2xl md:text-4xl font-['Fira_Sans'] font-bold leading-tight text-center max-w-full">
        We're Verified Business by
      </div>
      <div className="text-black text-base md:text-xl font-['Fira_Sans'] font-medium leading-relaxed text-center mt-6 md:mt-8 max-w-full">
        We're verified by various Organizations. We're running business with more than 10+ Years.
        <br />
        We pack your Things, store your Things and Deliver your Things.
      </div>
      {/* Verification Cards */}
      <div className="w-full max-w-5xl mt-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Google Map Verification */}
          <div className="flex-1 flex flex-col items-center bg-white/80 rounded-lg p-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6b7191f7fd831a3c94d8fb6df588459195290fd?placeholderIfAbsent=true&apiKey=470e3fb85abc4def9f16af01c936a829"
              className="w-20 h-20 object-contain"
              alt="Google verification"
            />
            <div className="mt-2 text-lg font-semibold">We're Verified by Google Map</div>
            <div className="text-sm mt-2 text-center">
              Verified by Google Map with hundreds of reviews and 4.9 overall rating.
            </div>
          </div>
          {/* Justdial Verification */}
          <div className="flex-1 flex flex-col items-center bg-white/80 rounded-lg p-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/531dc226d59e49c2b2aa152f9463b292f2c87a10?placeholderIfAbsent=true&apiKey=470e3fb85abc4def9f16af01c936a829"
              className="w-20 h-20 object-contain"
              alt="Justdial verification"
            />
            <div className="mt-2 text-lg font-semibold">Justdial Verified</div>
            <div className="text-sm mt-2 text-center">
              Also verified by Justdial with lots of reviews and positive feedback.
            </div>
          </div>
          {/* Assure Shift Verification */}
          <div className="flex-1 flex flex-col items-center bg-white/80 rounded-lg p-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/16c476b078717571413ed5c32d70016d9c95478a?placeholderIfAbsent=true&apiKey=470e3fb85abc4def9f16af01c936a829"
              className="w-20 h-20 object-contain"
              alt="Assure Shift verification"
            />
            <div className="mt-2 text-lg font-semibold">Assure Shift Verified</div>
            <div className="text-sm mt-2 text-center">
              Also verified by Assure Shift with lots of reviews and positive feedback.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer Section Component
function FooterSection() {
  return (
    <div className="bg-[#B02C1A] mt-6 w-full px-4 md:px-8 py-10 md:py-16 overflow-hidden max-w-full">
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
                    <li>Company History</li>
                    <li>Why Choose Us</li>
                    <li>Our Branches</li>
                    <li>For Franchise Enquiry</li>
                    <li className="text-[#C2FB09]">Submit a Complaint</li>
                  </ul>
                </div>
                {/* Services */}
                <div className="flex-1">
                  <div className="text-white text-lg md:text-xl font-['Poppins'] font-semibold mb-2">
                    Services
                  </div>
                  <ul className="list-none space-y-1">
                    <li>Home shifting</li>
                    <li>Office shifting</li>
                    <li>Vehicle transportation</li>
                    <li>Household loading</li>
                    <li>Household Unloading</li>
                  </ul>
                </div>
              </div>
              {/* Social Media */}
              <div className="flex items-center gap-4 mt-2 font-['Poppins'] text-lg md:text-xl text-white font-semibold">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f38bfff39b59c4081d1f258fed06a372b424a54?placeholderIfAbsent=true&apiKey=470e3fb85abc4def9f16af01c936a829"
                  className="w-10 h-10 object-contain"
                  alt="Social media icon 1"
                />
                <span>Follow Us :</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c808212b64560d63cedea158027cc56f0b6b586f?placeholderIfAbsent=true&apiKey=470e3fb85abc4def9f16af01c936a829"
                  className="w-10 h-10 object-contain"
                  alt="Social media icon 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-white mt-8 w-full max-w-7xl mx-auto" />
      {/* Location Links */}
      <div className="mt-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white font-['Poppins'] text-base md:text-lg font-medium">
        {/* Column 1 */}
        <div className="space-y-1">
          <div>Packers & Movers in Chennai</div>
          <div>Packers & Movers in Bangalore</div>
          <div>Packers & Movers in Mumbai</div>
          <div>Packers & Movers in Delhi NCR</div>
          <div>Packers & Movers in Hyderabad</div>
          <div>Packers & Movers in Kolkata</div>
          <div>Packers & Movers in Pune</div>
          <div>Packers & Movers in Ahmedabad</div>
          <div>Packers & Movers in Coimbatore</div>
          <div>Packers & Movers in Madurai</div>
        </div>
        {/* Column 2 */}
        <div className="space-y-1">
          <div>Packers & Movers in Trichy</div>
          <div>Packers & Movers in Salem</div>
          <div>Packers & Movers in Tirunelveli</div>
          <div>Packers & Movers in Erode</div>
          <div>Packers & Movers in Vellore</div>
          <div>Packers & Movers in Thoothukudi</div>
          <div>Packers & Movers in Nagpur</div>
          <div>Packers & Movers in Nashik</div>
          <div>Packers & Movers in Aurangabad</div>
          <div>Packers & Movers in Solapur</div>
        </div>
        {/* Column 3 */}
        <div className="space-y-1">
          <div>Packers & Movers in Amravati</div>
          <div>Packers & Movers in Jalgoan</div>
          <div>Packers & Movers in Kolhapur</div>
          <div>Packers & Movers in Maharastra</div>
          <div>Packers & Movers in Madhyapradesh</div>
          <div>Packers & Movers in Rajasthan</div>
          <div>Packers & Movers in Uttarpradesh</div>
          <div>Packers & Movers in Uttarkhand</div>
          <div>Packers & Movers in Andhrapradesh</div>
          <div>Packers & Movers in Telungana</div>
        </div>
        {/* Column 4 */}
        <div className="space-y-1">
          <div>Packers & Movers in Odisha</div>
          <div>Packers & Movers in Bihar</div>
          <div>Packers & Movers in West Bengal</div>
          <div>Packers & Movers in Himachalpradesh</div>
          <div>Packers & Movers in Mathura</div>
          <div>Packers & Movers in Kasganj</div>
          <div>Packers & Movers in Haldwani</div>
          <div>Packers & Movers in Gwalior</div>
          <div>Packers & Movers in Firozabad</div>
          <div>Packers & Movers in Aligarh</div>
        </div>
      </div>
    </div>
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