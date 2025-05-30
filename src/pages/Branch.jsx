import React from "react";

const branches = [
  "Chennai",
  "Bangalore",
  "Mumbai",
  "Delhi NCR",
  "Aligarh",
  "Hyderabad",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Pimpri-Chinchwad",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Ludhiana",
  "Coimbatore",
  "Agra",
  "Madurai",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Kalyan-Dombivli",
  "Vasai-Virar",
  "Varanasi",
  "Srinagar",
  "Aurangabad",
  "Dhanbad",
  "Amritsar",
  "Navi Mumbai",
  "Allahabad",
  "Ranchi",
  "Howrah",
  "Jabalpur",
  "Gwalior",
  "Jodhpur",
  "Raipur",
  "Kota",
  "Chandigarh",
  "Guwahati",
  "Solapur",
  "Hubli–Dharwad",
  "Bareilly",
  "Mysore",
  "Tiruchirappalli",
];

export default function BranchLocations() {
  return (
    <div className="max-w-[1440px] mx-auto relative bg-white rounded-[10px] overflow-hidden">
      {/* Header Section */}
      <div className="relative h-80 bg-zinc-300 rounded-tl-[10px] rounded-tr-[10px]">
        <div className="absolute right-0 top-0 w-[468px] h-80 bg-red-700 rounded-tr-[10px]" />
        <img
          src="https://placehold.co/1301x371"
          alt="Header"
          className="absolute left-0 top-[-35px] w-[1301px] h-96 object-cover"
        />
      </div>

      {/* Title and Breadcrumb */}
      <div className="px-20 pt-10 text-black">
        <h1 className="text-6xl font-bold font-poppins text-center mb-2">
          Branch locations
        </h1>
        <p className="text-4xl font-normal font-fira_sans text-center mb-10">
          Home &gt; Branch Location
        </p>
      </div>

      {/* Overlay Bar */}
      <div className="absolute left-0 top-[314px] w-full h-20 bg-stone-700/50"></div>

      {/* Select Branch Section */}
      <div className="px-20 pt-28">
        <h2 className="text-6xl font-bold font-poppins underline mb-16">
          Select Your Nearest Branch
        </h2>

        <div className="grid grid-cols-2 gap-x-14 gap-y-8">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-red-700 rounded-[10px] border-3 border-white h-24 flex items-center justify-center"
            >
              <span className="text-white text-5xl font-semibold font-fira_sans">
                {branch}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
