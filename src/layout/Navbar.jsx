import { CustomButton } from "../components/button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-scroll";
import logo from "../assets/images/anime-logo.svg";
import Menu from "../assets/images/Menu.svg";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  const handleregisterClick = () => {
    navigate("/register");

  };
  const handleloginClick = () => {
    navigate("/login");
  };

  return (
    <nav className="overflow-hidden bg-transparent md:p-4">
      <div className="items-center justify-between md:flex">
        <div className="items-center gap-3 md:flex">
          <div className="flex justify-between cursor-pointer">
            <img src={logo} alt="" />
            <img
              className={`block md:hidden ${
                isDarkMode ? "white-Menu-icon" : ""
              }`}
              src={Menu}
              alt=""
            />
          </div>

          <div className="hidden md:block">
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <p className="font-medium text-black capitalize cursor-pointer dark:text-white">
                Features
              </p>
            </Link>
          </div>

          <div className="hidden md:block">
            <Link
              to="chooseUs"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <p className="font-medium text-black capitalize cursor-pointer dark:text-white">
                Benefits
              </p>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <button
              className="text-black dark:text-white text-sm px-2.5 py-2.5 rounded bg-[#EBEBEBEE] focus:outline-none"
              onClick={toggleTheme}
            >
              {isDarkMode ? "🌕" : "🌑"}
            </button>
          </div>
          <div className="hidden md:block">
            <CustomButton
              width="158px"
              content="Get started"
              onClick={handleregisterClick}
            />
          </div>
          <div className="hidden md:block">
            <CustomButton
              width="158px"
              content="Log In"
              onClick={handleloginClick}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
