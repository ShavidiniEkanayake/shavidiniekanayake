import React, { useState, useEffect } from "react";
import ShaviLogo from "../Assets/Logos/Shavi-logo.svg";

export const NavBar = () => {
  const [isDarkMode, setDarkMode] = useState("light");
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleThemeChange = () => {
    setDarkMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div
        className={`bg-white dark:bg-darkmode text-black py-2 px-4 lg:px-28`}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={ShaviLogo} alt="Logo" className="h-16" />
            <div className="hidden lg:flex items-center space-x-7">
              <a
                href="#"
                className="hover:text-orange dark:text-white font-Satoshi font-bold text-lg ml-10"
              >
                About me
              </a>
              <span className="inline-block w-2 h-2 bg-black rounded-full mx-2"></span>
              <a
                href="#"
                className="hover:text-orange  font-Satoshi font-bold text-lg"
              >
                Experience
              </a>
              <span className="inline-block w-2 h-2 bg-black rounded-full mx-2"></span>
              <a
                href="#"
                className="hover:text-orange  font-Satoshi font-bold text-lg"
              >
                Projects
              </a>
              <span className="inline-block w-2 h-2 bg-black rounded-full mx-2"></span>
              <a
                href="#"
                className="hover:text-orange  font-Satoshi font-bold text-lg"
              >
                Skills
              </a>
              <span className="inline-block w-2 h-2 bg-black rounded-full mx-2"></span>
              <a
                href="#"
                className="hover:text-orange  font-Satoshi font-bold text-lg"
              >
                Certificates
              </a>
              <span className="inline-block w-2 h-2 bg-black rounded-full mx-2"></span>
              <a
                href="#"
                className="hover:text-orange  font-Satoshi font-bold text-lg"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 lg:hidden">
            <button onClick={handleMenuToggle}>
              <svg
                className="h-6 w-6 text-black dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-orange rounded-2xl text-white font-Satoshi font-bold px-5 py-1">
              Say Hello!
            </button>
            {/* <button className='bg-slate-700 rounded-2xl' onClick={handleThemeChange}>
                        {isDarkMode === "dark" ? "Light mode" : "Dark mode"}
                    </button> */}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-darkmode text-black py-2 px-4">
          <div className="flex flex-col ml-10">
            <a
              href="#"
              className="hover:text-orange dark:text-white font-Satoshi font-bold text-lg py-2"
            >
              About me
            </a>
            <a
              href="#"
              className="hover:text-orange font-Satoshi font-bold text-lg py-2"
            >
              Experience
            </a>
            <a
              href="#"
              className="hover:text-orange font-Satoshi font-bold text-lg py-2"
            >
              Projects
            </a>
            <a
              href="#"
              className="hover:text-orange font-Satoshi font-bold text-lg py-2"
            >
              Skills
            </a>
            <a
              href="#"
              className="hover:text-orange font-Satoshi font-bold text-lg py-2"
            >
              Certificates
            </a>
            <a
              href="#"
              className="hover:text-orange font-Satoshi font-bold text-lg py-2"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
      <hr className="border-gray-300" />
    </div>
  );
};
