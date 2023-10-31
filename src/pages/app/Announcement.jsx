import { useTheme } from "../../context/ThemeContext";
import Profilephoto from "../../assets/images/profilephoto.svg";
import animelogo from "../../assets/images/anime-logo.svg";
import Group from "../../assets/images/group.svg";
import Time from "../../components/Time";
import Nav1 from "../../components/Nav1";


const Announcement = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className="bg-[#FAFAFA] dark:bg-[#141416] text-black dark:text-white h-screen">
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
                <h1>Announcements</h1>
            </div>
            <Nav1 />
        </div>
    )
}

export default Announcement