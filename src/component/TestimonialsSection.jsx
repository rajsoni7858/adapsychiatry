import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import testimonial from "../assets/images/testimonial.png";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    name: "Carl Rowan",
    company: "Aglets Inc",
    image: testimonial,
  },
  {
    text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    name: "Carl Rowan",
    company: "Aglets Inc",
    image: testimonial,
  },
  {
    text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    name: "Carl Rowan",
    company: "Aglets Inc",
    image: testimonial,
  },
  {
    text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    name: "Carl Rowan",
    company: "Aglets Inc",
    image: testimonial,
  },
  {
    text: "ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory and the provider profiles were so helpful in giving me a sense of their energy and approach.",
    name: "Carl Rowan",
    company: "Aglets Inc",
    image: testimonial,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#E9E1D0] py-25 pb-40 testimoinal relative">
      {/* Title */}
      <h2 className="font-walkun text-center font-bold text-[40px] mb-14">
        What Our Patients Are saying
      </h2>

      <div className="max-w-8xl mx-auto px-0 relative">
        <Swiper
          slidesPerView={3}
          spaceBetween={44}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#EFE7D8] rounded-2xl overflow-hidden shadow-sm">
                {/* Content */}
                <div className="p-8">
                  <span className="text-[100px] text-[#1B1B1B] leading-none">
                    “
                  </span>

                  <p className="text-[#1B1B1B] text-2xl leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {/* Bottom Gold Section */}
                <div className="bg-[#C18C2C] flex justify-center items-center">
                  <div className="flex items-center gap-3 px-6 py-4 ">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-xl">
                      {item.name}
                    </p>
                    <p className="text-white text-base opacity-80">
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
