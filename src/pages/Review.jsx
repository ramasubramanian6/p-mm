import React from "react";
import kol from "../assets/reciew/kol.png";
import reg from "../assets/reciew/rag.png"; // Assuming 'rag.png' is intended for 'reg'
import raghu from "../assets/reciew/raghu.png";
import res from "../assets/reciew/res.png";
import riz from "../assets/reciew/riz.png";

// Placeholder for a generic background graphic if needed.
// You might want to replace this with a specific asset or a prop.
//import genericBgGraphic from "../assets/background-graphic.png"; // Example import for a background graphic

const Review = () => {
  return (
    <div className="min-h-screen bg-white font-['Poppins']">
      {/* Header Section */}
      <header className="relative py-24 text-center overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <p className="text-black text-xl md:text-2xl font-medium leading-normal mb-4"><a href="/" className="hover:underline hover:text-blue-500">Home</a> &gt;<a href="/review "className="hover:underline hover:text-blue-500">Testimonial</a> </p>
          <h1 className="text-black text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-widest opacity-90 mb-8">Testimonials</h1>
          <h2 className="text-gray-900 text-5xl md:text-6xl lg:text-8xl font-bold underline leading-tight">Customer Reviews</h2>
        </div>
      </header>

      {/* Home Shifting Reviews Section */}
      <section className="bg-slate-600/90 py-16 md:py-24 overflow-hidden relative">
        {/* Optional: Background image for visual flair, responsive handling needed */}
        <img
          className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-180 opacity-20 rounded-full w-full h-auto max-w-4xl"
          src={"fdf"} // This 'fdf' should ideally be a proper image import or path
          alt="Abstract geometric background graphic"
        />

        <div className="container mx-auto px-4 relative z-10">
          <h3 className="text-white text-4xl md:text-5xl font-bold underline leading-normal mb-12 text-center md:text-left">Home Shifting Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Review Card: Balaji Srinivasan */}
            <div className="bg-white rounded-xl shadow-md border-b border-stone-300 p-6 flex flex-col justify-between">
              <div className="flex justify-end text-sky-100 text-5xl font-black mb-4">“</div>
              <div className="border-b border-slate-200 pb-4 mb-4">
                <div className="flex flex-wrap items-center">
                  <span className="text-gray-900 text-lg font-bold mr-3">Balaji Srinivasan</span>
                  <span className="text-slate-500 text-sm mr-4">on 10 Feb 2025</span>
                  <span className="text-gray-900 text-sm">rated</span>
                  <span className="bg-amber-100 rounded-xl px-2 py-1 text-gray-900 text-sm font-bold ml-1">5</span>
                </div>
              </div>
              <p className="text-slate-600 text-base leading-relaxed mb-4 flex-grow">
                I recently moved my 2BHK from Tambaram to Anna Nagar in Chennai with Move My Stuffs, and I had a smooth experience. The team was professional, packed and delivered my belongings carefully and on time. Highly recommended!
              </p>
              <a href="#" className="text-sky-600 text-base underline hover:text-sky-700">Read More</a>
            </div>

            {/* Review Card: Gokulakrishnan (Home Shifting) */}
            <div className="bg-white rounded-xl shadow-md border-b border-stone-300 p-6 flex flex-col justify-between">
              <div className="flex justify-end text-sky-100 text-5xl font-black mb-4">“</div>
              <div className="border-b border-slate-200 pb-4 mb-4">
                <div className="flex flex-wrap items-center">
                  <span className="text-gray-900 text-lg font-bold mr-3">Gokulakrishnan</span>
                  <span className="text-slate-500 text-sm mr-4">on 29 Jan 2025</span>
                  <span className="text-gray-900 text-sm">rated</span>
                  <span className="bg-amber-100 rounded-xl px-2 py-1 text-gray-900 text-sm font-bold ml-1">5</span>
                </div>
              </div>
              <p className="text-slate-600 text-base leading-relaxed mb-4 flex-grow">
                Good/ fast / professional team Service satisfied
              </p>
            </div>

            {/* Review Card: Pavithra */}
            <div className="bg-white rounded-xl shadow-md border-b border-stone-300 p-6 flex flex-col justify-between">
              <div className="flex justify-end text-sky-100 text-5xl font-black mb-4">“</div>
              <div className="border-b border-slate-200 pb-4 mb-4">
                <div className="flex flex-wrap items-center">
                  <span className="text-gray-900 text-lg font-bold mr-3">Pavithra</span>
                  <span className="text-slate-500 text-sm mr-4">on 13 Feb 2025</span>
                  <span className="text-gray-900 text-sm">rated</span>
                  <span className="bg-amber-100 rounded-xl px-2 py-1 text-gray-900 text-sm font-bold ml-1">5</span>
                </div>
              </div>
              <p className="text-slate-600 text-base leading-relaxed mb-4 flex-grow">
                Yes, it's very good packing and shifting. Genuine employees.
              </p>
            </div>

            {/* Review Card: Amit Jaiswal */}
            <div className="bg-white rounded-xl shadow-md border-b border-stone-300 p-6 flex flex-col justify-between">
              <div className="flex justify-end text-sky-100 text-5xl font-black mb-4">“</div>
              <div className="border-b border-slate-200 pb-4 mb-4">
                <div className="flex flex-wrap items-center">
                  <span className="text-gray-900 text-lg font-bold mr-3">Amit Jaiswal</span>
                  <span className="text-slate-500 text-sm mr-4">on 09 May 2025</span>
                  <span className="text-gray-900 text-sm">rated</span>
                  <span className="bg-amber-100 rounded-xl px-2 py-1 text-gray-900 text-sm font-bold ml-1">5</span>
                </div>
              </div>
              <p className="text-slate-600 text-base leading-relaxed mb-4 flex-grow">
                Good experience with their service.
              </p>
            </div>

            {/* Review Card: Rizwana */}
            <div className="bg-white rounded-xl shadow-md border-b border-stone-300 p-6 flex flex-col justify-between">
              <div className="flex justify-end text-sky-100 text-5xl font-black mb-4">“</div>
              <div className="border-b border-slate-200 pb-4 mb-4">
                <div className="flex flex-wrap items-center">
                  <span className="text-gray-900 text-lg font-bold mr-3">Rizwana</span>
                  <span className="text-slate-500 text-sm mr-4">on 29 Jan 2025</span>
                  <span className="text-gray-900 text-sm">rated</span>
                  <span className="bg-amber-100 rounded-xl px-2 py-1 text-gray-900 text-sm font-bold ml-1">4</span>
                </div>
              </div>
              <p className="text-slate-600 text-base leading-relaxed mb-4 flex-grow">
                Good shifting and proper response.
              </p>
            </div>
          </div>
        </div>
      </section>

   {/* Office Shifting Reviews Section */}
       <section className="w-full bg-sky-600/60 py-16 md:py-24 overflow-hidden">
  <div className="w-full container mx-auto px-4">
    <h3 className="text-black text-4xl md:text-5xl font-bold underline leading-normal mb-12 text-center md:text-left">Office Shifting Reviews</h3>
    {/* Removed the lg:grid-cols-2 from this parent div and applied directly to images if they should span full width */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted grid for images */}
      <img className="w-full h-full object-cover rounded-xl shadow-md" src={raghu} alt="Office shifting process image" />
      <img className="w-full h-full object-contains rounded-xl shadow-md" src={kol} alt="Office supplies packed for shifting" />
      <img className="w-full h-full object-cover rounded-xl shadow-md" src={reg} alt="Team packing office furniture" />
    </div>
  </div>
</section>

      {/* About Our Company Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sky-600 text-sm font-bold uppercase tracking-widest opacity-90 mb-2">Who We Are</p>
          <h3 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight mb-8">About Our Company</h3>
          <div className="flex justify-center items-center mb-8">
            <span className="w-5 h-1 bg-sky-600 rounded-sm mx-1"></span>
            <span className="w-10 h-1 bg-orange-500 rounded-sm mx-1"></span>
            <span className="w-5 h-1 bg-sky-600 rounded-sm mx-1"></span>
          </div>
          <div className="text-slate-600 text-base md:text-lg leading-loose max-w-4xl mx-auto">
            <p className="mb-4">
              Since its inception in 2010, **Move My Stuffs** has established itself as a premier relocation service provider. As certified packers and movers, we have continuously innovated and set new benchmarks in the relocation industry. Our approach includes the use of unique techniques and state-of-the-art handling equipment, which significantly enhances the overall packing and moving experience. Over the years, our dedication to improving our services has not only enriched our expertise but has also secured us a prominent and respected position within the industry. The effectiveness of our methods and our commitment to quality have played a pivotal role in shaping our reputation.
            </p>
            <p>
              At **Move My Stuffs**, we offer a comprehensive range of services to cover every aspect of relocation. This includes household moves, office relocations, vehicle transportation, cargo shipping, and even warehousing services, ensuring that we can fully accommodate any and all relocation needs. Additionally, we provide insurance coverage to guarantee the safety and security of your belongings during the move. Whether you are planning a local move within the city or need to relocate across the country, our team is equipped and ready to deliver top-notch service with meticulous care. We also offer customized packing and moving services tailored to meet the specific requirements of our clients and the nature of the goods being moved, ensuring a seamless and stress-free relocation process.
            </p>
          </div>
        </div>
      </section>

      {/* Our Happy Customers Section */}
      <section className="bg-gray-900/90 py-16 md:py-24 overflow-hidden relative">
        {/* Optional: Background image for visual flair, responsive handling needed */}
        <img
          className="hidden lg:block absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 opacity-10 w-full h-auto max-w-4xl"
          src={'genericBgGraphic'} // This 'genericBgGraphic' should ideally be a proper image import or path
          alt="Decorative background pattern"
        />

        <div className="container mx-auto px-4 relative z-10">
          <h3 className="text-white text-4xl md:text-5xl font-bold underline leading-normal mb-12 text-center md:text-left">Our Happy Customers</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Review Card: Gokulakrishnan (Happy Customers) */}
            <div className="bg-white rounded-xl shadow-md border-b border-stone-300 p-6 flex flex-col justify-between">
              <div className="flex justify-end text-sky-100 text-5xl font-black mb-4">“</div>
              <div className="border-b border-slate-200 pb-4 mb-4">
                <div className="flex flex-wrap items-center">
                  <span className="text-gray-900 text-lg font-bold mr-3">Gokulakrishnan</span>
                  <span className="text-slate-500 text-sm mr-4">on 29 Jan 2025</span>
                  <span className="text-gray-900 text-sm">rated</span>
                  <span className="bg-amber-100 rounded-xl px-2 py-1 text-gray-900 text-sm font-bold ml-1">5</span>
                </div>
              </div>
              <p className="text-slate-600 text-base leading-relaxed mb-4 flex-grow">
                Good/ fast / professional team Service satisfied.
              </p>
            </div>
            {/* Images for Happy Customers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8 order-first lg:order-last">
              <img className="w-full h-full object-cover rounded-xl shadow-md col-span-full" src={res} alt="Happy customer with boxes" />
              <img className="w-full h-full object-cover rounded-xl shadow-md" src={riz} alt="Customer reviewing moving services" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;