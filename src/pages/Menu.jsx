import React from "react";

function Menu() {
  return (
    <div className="w-[1440px] h-[1024px] relative">
      <div className="w-[1440px] h-[1024px] left-0 top-0 absolute rounded-[10px] overflow-hidden">
        <div className="w-[1308px] h-[894px] left-[66px] top-[65px] absolute bg-white/50 rounded-2xl border border-white/30 backdrop-blur-[4.80px]" />
        <div className="left-[446px] top-[214px] absolute justify-start text-black text-4xl font-medium font-['Fira_Sans'] leading-normal">
          <br />
          <br />
        </div>
        <div className="left-[108px] top-[356px] absolute justify-start text-black text-5xl font-medium font-['Fira_Sans'] leading-normal">
          Contact Us
        </div>
        <div className="left-[108px] top-[278px] absolute justify-start text-black text-5xl font-medium font-['Fira_Sans'] leading-normal">
          Branch Locations
        </div>
        <div className="w-36 h-5 left-[102px] top-[194px] absolute justify-start text-black text-5xl font-medium font-['Fira_Sans'] leading-normal">
          Home
        </div>
        <div className="left-[540px] top-[150px] absolute justify-start">
          <span class="text-red-700 text-6xl font-bold font-['Poppins'] underline leading-normal">
            Move
          </span>
          <span class="text-black text-6xl font-bold font-['Poppins'] underline leading-normal">
            {" "}
          </span>
          <span class="text-zinc-800 text-6xl font-bold font-['Poppins'] underline leading-normal">
            My Stuffs
          </span>
        </div>
        <div className="left-[540px] top-[490px] absolute justify-start text-black text-4xl font-normal font-['Fira_Sans'] leading-normal">
          Our Services
          <br />
        </div>
        <div className="left-[540px] top-[384px] absolute justify-start text-black text-4xl font-normal font-['Fira_Sans'] leading-normal">
          Why Choose Us
        </div>
        <div className="left-[540px] top-[278px] absolute justify-start text-black text-4xl font-normal font-['Fira_Sans'] leading-normal">
          About Us
        </div>
        <div className="left-[102px] top-[860px] absolute justify-start text-black text-5xl font-medium font-['Fira_Sans'] leading-normal">
          Follow Us:
        </div>
        <div className="w-16 h-16 left-[420px] top-[834px] absolute">
          <div className="w-16 h-16 left-0 top-0 absolute bg-black" />
        </div>
        <div className="w-12 h-12 left-[421px] top-[888px] absolute" />
        <div className="w-12 h-12 left-[490px] top-[888px] absolute" />
        <div className="w-[2.93px] h-0.5 left-[645.83px] top-[907.65px] absolute" />
        <div className="w-16 h-16 left-[614px] top-[837px] absolute bg-black" />
        <div className="w-16 h-16 left-[515px] top-[834px] absolute bg-black" />
        <div className="w-20 h-20 left-[1271px] top-[86px] absolute bg-zinc-300 rounded-full border border-black" />
        <div className="w-8 h-10 left-[1287px] top-[103px] absolute bg-black" />
      </div>
      <div className="w-20 h-20 left-[326px] top-[830px] absolute">
        <div className="w-16 h-16 left-[6.25px] top-[6.25px] absolute bg-black" />
      </div>
    </div>
  );
}

export default Menu;
