import React from "react";
import Quote from "../assets/images/Quote.png";

const QuoteSection = () => {
  return (
    <section
      className="relative inset-0 bg-cover bg-center bg-no-repeat bg-[length:100%_100%] py-20"
      style={{ backgroundImage: `url(${Quote})` }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-transparent"></div> */}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <span className="text-yellow-500 text-[70px]">“</span>
        <p className="text-white text-lg md:text-2xl font-serif mt-4">
          We help people living with and experiencing difficult times
        </p>
      </div>
    </section>
  );
};

export default QuoteSection;
