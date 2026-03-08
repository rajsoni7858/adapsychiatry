import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import herosliderbtn from "../assets/images/herosliderbtn.png";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      //   autoplay={{ delay: 4000 }}
      loop={true}
      className="hero-slider w-full h-[560px]"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div
          className="h-[560px] bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${hero1})` }}
        >
          <div className="max-w-xl ml-20 text-white">
            <h1 className="font-wulkan font-semibold text-[48px] leading-[56.5px] uppercase">
              NEED A MENTAL <br /> HEALTH PROVIDER?
            </h1>
            <h3 className="font-wulkan font-semibold text-[20px] leading-[28px] uppercase">
              No Look Further
            </h3>

            <p className="mb-2 font-playfair text-[20px] leading-[28px]">
              Our goal is to provide a safe, comfortable, and warm environment
              so that you can openly discuss your mental health needs.
            </p>

            <button
              className="mt-10 px-6 py-3 flex items-center gap-2 rounded-full text-black font-medium 
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
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div
          className="h-[560px] bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(${hero2})` }}
        >
          <div className="max-w-xl ml-20 text-white">
            <h1 className="text-5xl font-semibold mb-4">
              PROFESSIONAL <br /> MENTAL CARE
            </h1>

            <p className="mb-2 font-playfair text-[20px] leading-[28px]">
              Expert psychiatrists ready to help you.
            </p>

            <button
              className="mt-10 px-6 py-3 flex items-center gap-2 rounded-full text-black font-medium 
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
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
