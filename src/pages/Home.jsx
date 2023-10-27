import CTA from "./page-sections/CTA";
import ChooseUs from "./page-sections/ChooseUs";
import Features from "./page-sections/Features";
import Footer from "./page-sections/Footer";
import Hero from "./page-sections/Hero";

const Home = () => {

  return (
    <div className="bg-[#FAFAFA] dark:bg-[#141416] h-auto md:px-14 px-[20px] py-7 text-black dark:text-white">
      <Hero />
      <Features />
      <ChooseUs />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
