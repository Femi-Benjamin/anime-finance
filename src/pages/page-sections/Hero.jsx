import { CustomButton } from "../../components/button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import heroimagelight from "../../assets/images/hero-lg-light.svg";
import heroimagedark from "../../assets/images/hero-lg-dark.svg";
import Navbar from "../../layout/Navbar";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <HeroContent />
    </div>
  );
};

export default Hero;

const HeroContent = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <div className="mt-8 md:flex items-center md:justify-between">
      <div className="max-w-[630px]">
        <div className="mb-8">
          <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold md:text-left text-center">
            Unlock the future of digital{" "}
            <span className="text-[#F0B90B]">wealth</span>
          </h1>
        </div>
        <div className="mb-8">
          <p className="md:text-[16px] text-sm md:text-left text-center">
            We aim to bridge the anime and cryptocurrency worlds by allowing
            fans to own NFTs of their favorite anime characters, participate in
            community governance, trade anime-themed tokens, and more
          </p>
        </div>

        <div>
          <div className="md:block hidden">
            <CustomButton
              width="158px"
              content="start mining now"
              onClick={handleClick}
            />
          </div>

          <div className="md:hidden bloc flex justify-center">
            <CustomButton
              width="335px"
              content="start mining now"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <div>
        <img src={isDarkMode ? heroimagedark : heroimagelight} alt="" />
      </div>
    </div>
  );
};
