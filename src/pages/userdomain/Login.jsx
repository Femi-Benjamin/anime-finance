import { useTheme } from "../../context/ThemeContext";
import animelogo from "../../assets/images/anime-logo.svg";
import { CustomButton } from "../../components/button";
import Eyeicon from "../../assets/images/Eyeicon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState(""); // Initialize the password error state

  const handlePasswordChange = (event) => {
    // Here you can add your password validation logic
    const password = event.target.value;
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError(""); // Clear the error if the password is valid
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check the password error state before submitting the form
    if (passwordError) {
      // Handle the error, e.g., display a message to the user or prevent form submission
      console.error("Password error:", passwordError);
    } else {
      // Password is valid, proceed with form submission
      console.log("Password is valid");
      // Add your form submission logic here
    }
  };

  return (
    <div className="bg-[#FAFAFA] dark:bg-[#141416] h-screen text-black dark:text-white">
      <div className="flex justify-between p-5 border-b">
        <Link to="/">
          <img src={animelogo} alt="" />
        </Link>
        <button
          className="text-black dark:text-white text-sm px-2.5 py-2.5 md:rounded rounded-3xl bg-[#EBEBEBEE] focus:outline-none"
          onClick={toggleTheme}
        >
          {isDarkMode ? "🌕" : "🌑"}
        </button>
      </div>

      <div className="flex justify-center">
        <div className="w-[460px] h-[496px] md:border border-[#61616B] rounded-xl bg-[#F5F5F5] dark:bg-[#3232361a] md:px-[30px] px-[20px] m-6">
          <div>
            <h1 className="md:text-[30px] text-[25px] font-medium text-center leading-[39.854px] md:pt-6 pt-7">
              Sign in to your Account
            </h1>
          </div>
          <div className="flex justify-center mt-[32px]">
            <form onSubmit={handleSubmit}>
              <div className="pb-10">
                <h1 className="pb-2">Username</h1>
                <input
                  className="md:w-[400px] w-[315px] h-14 bg-transparent border border-[#61616B] rounded-lg outline-none p-2"
                  type="Username"
                  // value={name}
                  placeholder="ex. crypto_enthusiast123"
                />
              </div>

              <div className="pb-10">
                <h1 className="pb-2">Password</h1>
                <div className="flex justify-between items-center border border-[#61616B] rounded-lg">
                  <div>
                    <input
                      className="p-2 bg-transparent outline-none h-14"
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      placeholder="Input password"
                      onChange={handlePasswordChange} // Add an onChange event handler
                    />
                  </div>

                  <div className="p-2">
                    <img
                      src={Eyeicon}
                      alt=""
                      onClick={() => setPasswordVisible(!passwordVisible)}
                      style={{ cursor: "pointer" }}
                      className={
                        isDarkMode
                          ? "dark:text-white"
                          : "text-black invert-icon"
                      }
                    />
                  </div>
                </div>
                {/* Display the password error message if it's not empty */}
                {passwordError && (
                  <p className="text-red-500">{passwordError}</p>
                )}
              </div>

              <Link to="/dashboard">
                <div className="hidden md:block">
                  <CustomButton
                    id="submit"
                    type="submit"
                    width="400px"
                    content="Sign In"
                  />
                </div>
              </Link>

              <Link to="/dashboard">
                <div className="block md:hidden">
                  <CustomButton
                    id="submit"
                    type="submit"
                    width="315px"
                    content="Sign In"
                  />
                </div>
              </Link>

              <div className="p-5 text-center">
                <h1>
                  Don’t have an account?
                  <Link to="/register">
                    <span className="text-[#e0cc44] cursor-pointer">
                      {" "}
                      Sign Up
                    </span>
                  </Link>
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
