import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import logoSmall from "../assets/logosmall.png";
import { FaSearch, FaBell } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const [openArea, setOpenArea] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <nav className="relative flex items-center justify-between w-full bg-black px-6 py-4 lg:py-6">
      {/* Left Logo Section */}
      <div className="flex items-center gap-4">
        <img
          className="cursor-pointer w-12 lg:w-20"
          src={isSmallScreen ? logoSmall : logo}
          alt="Logo"
        />
        {/* Links (Desktop only) */}
        {!isSmallScreen && (
          <div className="hidden lg:flex gap-8 text-white font-medium">
            <Link to="/" className="hover:text-gray-400 transition">
              Home
            </Link>
            <Link to="/tvshows" className="hover:text-gray-400 transition">
              Tv Shows
            </Link>
            <Link to="/movies" className="hover:text-gray-400 transition">
              Movies
            </Link>
            <Link to="#" className="hover:text-gray-400 transition">
              My List
            </Link>
            <Link to="#" className="hover:text-gray-400 transition">
              Browse
            </Link>
          </div>
        )}
      </div>

      {/* Right Icons Section */}
      <div className="flex items-center gap-5 text-white">
        {/* Icons (Responsive) */}
        {!isSmallScreen ? (
          <>
            <FaSearch className="cursor-pointer hover:text-gray-400 text-lg" />
            <FaBell className="cursor-pointer hover:text-gray-400 text-lg" />
            <div className="relative flex items-center gap-1 cursor-pointer">
              <img
                className="w-10 h-10 rounded-full"
                src="https://pbs.twimg.com/media/GB2vydcX0AAgt5f.png"
                alt="User Avatar"
              />
              <TiArrowSortedDown
                onClick={() => setOpenArea(!openArea)}
                className="text-2xl hover:text-gray-400 transition"
              />
              {/* Dropdown Area */}
              {openArea && (
                <div className="absolute top-12 right-0 w-48 bg-gray-800 rounded-lg shadow-lg p-4 z-50">
                  <Link
                    to="/signup"
                    className="block text-sm text-white hover:text-blue-500 transition"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className="block text-sm text-white hover:text-red-500 transition mt-2"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </>
        ) : (
          // Hamburger Menu Icon for Small Screens
          <GiHamburgerMenu
            onClick={toggleHamburger}
            className="text-3xl cursor-pointer"
          />
        )}
      </div>

      {/* Hamburger Menu Dropdown (Mobile Only) */}
      {isHamburgerOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col p-5 space-y-4 z-50">
          <Link to="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link to="/tvshows" className="hover:text-gray-400 transition">
            Tv Shows
          </Link>
          <Link to="/movies" className="hover:text-gray-400 transition">
            Movies
          </Link>
          <Link to="#" className="hover:text-gray-400 transition">
            My List
          </Link>
          <Link to="#" className="hover:text-gray-400 transition">
            Browse
          </Link>
          <div className="flex justify-around mt-4">
            <FaSearch className="cursor-pointer hover:text-gray-400" />
            <FaBell className="cursor-pointer hover:text-gray-400" />
          </div>
          <div className="mt-4 flex flex-col items-start space-y-2">
            <Link
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
              to="/signup"
              className="text-blue-500"
            >
              Sign Up
            </Link>
            <Link
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
              to="/login"
              className="text-red-500"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
