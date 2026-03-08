import step1 from "../assets/images/steps/step1.png";
import step2 from "../assets/images/steps/step2.png";
import step3 from "../assets/images/steps/step3.png";
import step4 from "../assets/images/steps/step4.png";
import arrow from "../assets/images/herosliderbtn.png";

const StepsSection = () => {
  const steps = [
    {
      img: step1,
      number: "01",
      text: "Schedule an appointment",
    },
    {
      img: step2,
      number: "02",
      text: "Connect with your provider",
    },
    {
      img: step3,
      number: "03",
      text: "Discuss your comprehensive assessment",
    },
    {
      img: step4,
      number: "04",
      text: "Receive your individualized treatment plan",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-[40px] font-black font-walkun text-[#E8D16B] mb-14">
          Four Simple Steps To <br /> Get Started
        </h2>

        <div className="grid md:grid-cols-4 gap-10 items-center relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center relative"
            >
              <img src={step.img} className="w-10 mb-4" />

              <h3 className="text-[#E8D16B] text-2xl font-black font walkun mb-2">
                {step.number}
              </h3>

              <p className="text-sm text-gray-300 max-w-[150px]">{step.text}</p>

              {/* Line between steps */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-6 -right-14 w-28 border-t border-dashed border-gray-400"></div>
              )}
            </div>
          ))}
        </div>
        <button
          className="mt-14 flex items-center gap-2 mx-auto px-6 py-3 rounded-full text-black font-semibold shadow-md hover:opacity-90 transition
bg-[linear-gradient(90deg,#C18C2C_0%,#FCF38A_50.52%,#C18C2C_100%)]"
        >
          Schedule a Call
          <img src={arrow} className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default StepsSection;
