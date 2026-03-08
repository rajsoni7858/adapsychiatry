import evaluation from "../assets/images/services/evaluation.png";
import medication from "../assets/images/services/medication.png";
import psychotherapy from "../assets/images/services/psychotherapy.png";
import adhd from "../assets/images/services/adhd.png";
// import mat from "../assets/images/services/mat.png";
// import genesight from "../assets/images/services/genesight.png";

const services = [
  {
    title: "Psychiatric Evaluation",
    image: evaluation,
  },
  {
    title: "Medication Management",
    image: medication,
  },
  {
    title: "Supportive Psychotherapy",
    image: psychotherapy,
  },
  {
    title: "ADHD Screening",
    image: adhd,
  },
  {
    title: "MAT Treatment",
    image: evaluation,
  },
  {
    title: "Gene Sight Testing",
    image: psychotherapy,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#E8E0CF] py-20 services">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-[40px] font-bold font-walkun text-[#1B1B1B] mb-14">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Icon Circle */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#F3EAD9] mb-4 transition duration-300 group-hover:scale-110">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Service Name */}
              <p className="text-[20px] font-bold text-[#1B1B1Bs] text-center leading-snug">
                {service.title}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}

        <button
          className="mt-14 flex items-center gap-2 mx-auto px-6 py-3 rounded-full shadow-md hover:opacity-90 transition text-black font-semibold 
bg-[linear-gradient(90deg,#C18C2C_0%,#FCF38A_50.52%,#C18C2C_100%)]"
        >
          View our services →
        </button>
      </div>
    </section>
  );
}
