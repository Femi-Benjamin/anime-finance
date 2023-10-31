import { useTheme } from "../../context/ThemeContext";
import Profilephoto from "../../assets/images/profilephoto.svg";
import animelogo from "../../assets/images/anime-logo.svg";
import Group from "../../assets/images/group.svg";
import Time from "../../components/Time";
import Nav1 from "../../components/Nav1";
import Active from "../../components/active";
import Weekly from "../../components/Weekly";
import MineButton from "../../components/MineButton";

const Dashboard = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#141416] h-scre text-black dark:text-white">
      <div className="flex justify-between p-5 border-b">
        <img src={animelogo} alt="" />
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
        <div className="py-[147.5px]">
          <div className="flex justify-center gap-[35px] items-center">
            {/* ACTIVE MEMBERS */}
            <Active />
            {/* WEEKLY TASK*/}
            <Weekly />
            {/* MINE BUTTON */}
            <MineButton />
          </div>
        </div>
      </div>
      <div>
        <Nav1 />
      </div>
    </div>
  );
};

export default Dashboard;
