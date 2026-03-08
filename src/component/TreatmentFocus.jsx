import React from "react";
import arrow from "../assets/images/herosliderbtn.png";
import founderImg from "../assets/images/founderimg.png";

const TreatmentFocus = () => {
  return (
    <section className="bg-[#E8E0CF] py-20 treatmentfoucus">
      <div className="max-w-2xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center text-[40px] font-walkun font-bold font-wulkan text-[36px] mb-16">
          Our Treatment Focus
        </h2>

        {/* Row 1 */}
        <div className="grid md:grid-cols-2 items-center mb-16 row1">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <div className="border-[3px] border-[#DAA520] rounded-full">
              <img
                src={founderImg}
                className="w-[220px] h-[220px] rounded-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-[380px]">
            <h3 className="font-wulkan font-bold text-[26px] mb-3">
              Mental Health
            </h3>
            <p className="font-playfair text-[16px] leading-7 text-gray-700">
              Mental health is our emotional, psychological, and social
              well-being. It affects how we feel, think, and act. It also helps
              determine how we handle stress, build relationships, relate to
              others, and make healthy life decisions.
            </p>

            <button
              className="mt-5 px-5 py-2 flex items-center gap-2 rounded-full
            text-black font-work text-[14px] shadow-md hover:opacity-90 transition
            bg-[linear-gradient(90deg,#C18C2C_0%,#FCF38A_50%,#C18C2C_100%)]"
            >
              Learn More
              <img src={arrow} className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 items-center mb-16 row2">
          {/* Content */}
          <div className="max-w-[380px] md:ml-auto">
            <h3 className="font-wulkan font-bold text-[26px] mb-3">
              Addiction And Recovery
            </h3>

            <p className="font-playfair text-[16px] leading-7 text-gray-700">
              Addiction is a chronic dysfunction of the brain system. At Ada
              Psychiatry, we assess your risk for addiction and create a
              comprehensive treatment plan to start your recovery.
            </p>

            <button
              className="mt-5 px-5 py-2 flex items-center gap-2 rounded-full
            text-black font-work text-[14px] shadow-md hover:opacity-90 transition
            bg-[linear-gradient(90deg,#C18C2C_0%,#FCF38A_50%,#C18C2C_100%)]"
            >
              Learn More
              <img src={arrow} className="w-4 h-4" />
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center  md:justify-end">
            <div className="border-[3px] border-[#DAA520] rounded-full">
              <img
                src={founderImg}
                className="w-[220px] h-[220px] rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid md:grid-cols-2 items-center row3">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <div className="border-[3px] border-[#DAA520] rounded-full">
              <img
                src={founderImg}
                className="w-[220px] h-[220px] rounded-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-[380px]">
            <h3 className="font-wulkan font-bold text-[26px] mb-3">
              Supervised Medical Weight Loss
            </h3>

            <p className="font-playfair text-[16px] leading-7 text-gray-700">
              Medically supervised weight loss is a program designed for
              individuals who need professional support to achieve healthier
              lifestyles.
            </p>

            <button
              className="mt-5 px-5 py-2 flex items-center gap-2 rounded-full
            text-black font-work text-[14px] shadow-md hover:opacity-90 transition
            bg-[linear-gradient(90deg,#C18C2C_0%,#FCF38A_50%,#C18C2C_100%)]"
            >
              Learn More
              <img src={arrow} className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentFocus;
