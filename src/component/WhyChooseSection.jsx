import { useState } from "react";
import therapy from "../assets/images/therapy.png";
const items = [
  {
    title: "Convenient access",
    content:
      "We offer in-person and virtual psychiatry services where you can meet your provider in person or at the convenience of your own home.",
  },
  {
    title: "Concierge approach",
    content: "Personalized care tailored to your needs.",
  },
  {
    title: "High quality service",
    content: "Our team provides top quality mental health services.",
  },
  {
    title: "Trusted and empathic providers",
    content: "Our providers are experienced and compassionate.",
  },
];

export default function WhyChooseSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#F7EED9] py-20 WCaccordian">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        {/* Image */}
        <div className="relative inline-block">
          {/* Border (Behind Image) */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-yellow-600 z-0"></div>

          {/* Image (Above Border) */}
          <img
            src={therapy}
            alt="therapy"
            className="relative z-10 shadow-lg"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="font-walkun text-[40px] font-bold mb-6">
            Why Should You Choose <br /> Ada Psychiatry?
          </h2>

          {items.map((item, index) => (
            <div key={index} className="border-b border-yellow-600 py-4">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex items-center gap-4 w-full text-left font-semibold text-2xl font-walkun"
              >
                <span className="text-2xl font-bold">
                  {open === index ? "-" : "+"}
                </span>

                {item.title}
              </button>

              {open === index && (
                <p className="text-xl font-normal font-work text-[#000000] mt-2 px-7">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
