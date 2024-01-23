import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import Profilephoto from "../../assets/images/Profilephoto.svg";
import animelogo from "../../assets/images/animelogo.svg";
import Group from "../../assets/images/Group.svg";
import Time from "../../components/Time";
import Nav1 from "../../components/Nav1";
import { Collector } from "../../components/Collector";
import Weekly from "../../components/Weekly";
import MineButton from "../../components/MineButton";

const Wallet = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#a0a0c2] text-black dark:text-white">
      <div className="flex justify-between p-5 border-b">
        <Link to="/">
          <img src={animelogo} alt="" />
        </Link>
        <div className="flex gap-7">
          <button
            className="text-black dark:text-white text-sm px-2.5 py-2.5 md:rounded rounded-3xl bg-[#EBEBEBEE] focus:outline-none"
            onClick={toggleTheme}
          >
            {isDarkMode ? "🌕" : "🌑"}
          </button>
          <img className="cursor-pointer" src={Group} alt="" />
          <img className="cursor-pointer" src={Profilephoto} alt="" />
        </div>
      </div>
      <div className="px-[117px] p-10">
        <div className="flex justify-end">
          <Time />
        </div>

        <div className="py-[]">
          <div className="flex justify-center gap-[35px] items-center">
            <div>
              <Collector />
              <div className="flex justify-center gap-[35px] items-center">
                <Weekly />
                <Weekly />
                <MineButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nav1 />
    </div>
  );
};

export default Wallet;
