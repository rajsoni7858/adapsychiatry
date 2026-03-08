import { useState } from "react";
import arrow from "../assets/images/herosliderbtn.png";

const faqs = [
  {
    question: "What services does Ada Psychiatry offer?",
    answer:
      "We provide psychiatric evaluation, medication management, psychotherapy, ADHD screening, MAT treatment, and GeneSight testing.",
  },
  {
    question: "Do you offer virtual appointments?",
    answer:
      "Yes, we provide both in-person and telehealth appointments so you can access care from the comfort of your home.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept several major insurance plans. Please contact our office to confirm your coverage.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule an appointment online through our website or call our office directly.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F3EAD9] py-20 faq">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-[40px] font-bold font-walkun text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b-2 border-[#C18C2C] bg-transparent"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex gap-5 items-center px-6 py-4 font-walkun text-left text-2xl font-bold"
              >
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
                {faq.question}
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-7 pb-4 text-[#000000] text-2xl font-normal">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <button className="mt-14 w-[335px] h-[56px] mx-auto block bg-gradient-to-r from-[#CEA341] via-[#E8D16B] to-[#F0DF78] flex items-center justify-center gap-2 text-black font-semibold rounded-full shadow-md hover:opacity-90 transition">
          See all FAQ
          <img src={arrow} className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
