import HeroSlider from "../component/Heroslider";
import FounderSection from "../component/FounderSection";
import TreatmentFocus from "../component/TreatmentFocus";
import QuoteSection from "../component/QuoteSection";
import ServicesSection from "../component/ServicesSection";
import WhyChooseSection from "../component/WhyChooseSection";
import TestimonialsSection from "../component/TestimonialsSection";
import FAQSection from "../component/Faqs";
import StepsSection from "../component/StepsSection";
import StatesSection from "../component/StatesSection";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <FounderSection />
      <TreatmentFocus />
      <QuoteSection />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <StepsSection />
      <StatesSection/>
      <FAQSection />

    </>
  );
};

export default Home;