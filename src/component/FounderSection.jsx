import React from "react";
import founderImg from "../assets/images/founderimg.png";
import herosliderbtn from "../assets/images/herosliderbtn.png";
import founderBg from "../assets/images/founderbg.png";
const FounderSection = () => {
  return (
    <section className="relative py-24">
      {/* Background Image */}
      <div
        className="founder absolute inset-0 bg-contain bg-center bg-no-repeat bg-[length:100%_100%]"
        style={{ backgroundImage: `url(${founderBg})` }}
      ></div>

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-6 f-content">
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Founder Image */}
          <div className="relative z-10">
            <img src={founderImg} className="rounded-lg shadow-lg w-[509px]" />
          </div>

          {/* Content Box */}
          <div className="bg-transparent border-3 border-[#DAA520] rounded-xl py-12 pl-35 pr-17 -ml-38 relative z-0">
            <h2 className="font-wulkan font-semibold text-[36px] uppercase">
              Meet The Founder
            </h2>

            <h3 className="font-walkan font-semibold text-[20px] mt-2">
              Lakeisha Appleton
            </h3>

            <p className="font-work mt-4 font-medium text-[18px] leading-7">
              FNP-C, PMHNP- BC
            </p>

            <p className="font-work font-normal mt-4 text-[18px] leading-7">
              “Mental health problems don’t define who you are. They are
              something you experience. You walk in the rain and you feel the
              rain, but importantly YOU ARE NOT THE RAIN.”
            </p>

            <button
              className="font-work mt-6 px-6 py-3 flex items-center gap-2 rounded-full text-black font-medium 
                bg-[linear-gradient(90deg,#C18C2C_0%,#FCF38A_50%,#C18C2C_100%)]"
            >
              Learn More
              <img
                src={herosliderbtn}
                alt="herosliderbtn"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
