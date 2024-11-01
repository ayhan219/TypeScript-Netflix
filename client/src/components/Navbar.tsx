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
    <nav className="relative flex items-center justify-between w-full px-6 py-4 bg-black lg:py-6">
      {/* Left Logo Section */}
      <div className="flex items-center gap-4">
        <img
          className="w-12 cursor-pointer lg:w-20"
          src={isSmallScreen ? logoSmall : logo}
          alt="Logo"
        />
        {/* Links (Desktop only) */}
        {!isSmallScreen && (
          <div className="hidden gap-8 font-medium text-white lg:flex">
            <Link to="/" className="transition hover:text-gray-400">Home</Link>
            <Link to="/tvshows" className="transition hover:text-gray-400">Tv Shows</Link>
            <Link to="/movies" className="transition hover:text-gray-400">Movies</Link>
            <Link to="#" className="transition hover:text-gray-400">My List</Link>
            <Link to="#" className="transition hover:text-gray-400">Browse</Link>
          </div>
        )}
      </div>

      {/* Right Icons Section */}
      <div className="flex items-center gap-5 text-white">
        {/* Icons (Responsive) */}
        {!isSmallScreen ? (
          <>
            <FaSearch className="text-lg cursor-pointer hover:text-gray-400" />
            <FaBell className="text-lg cursor-pointer hover:text-gray-400" />
            <div className="relative flex items-center gap-1 cursor-pointer">
              <img
                className="w-10 h-10 rounded-full"
                src="https://pbs.twimg.com/media/GB2vydcX0AAgt5f.png"
                alt="User Avatar"
              />
              <TiArrowSortedDown
                onClick={() => setOpenArea(!openArea)}
                className="text-2xl transition hover:text-gray-400"
              />
              {/* Dropdown Area */}
              {openArea && (
                <div className="absolute right-0 w-48 p-4 bg-gray-800 rounded-lg shadow-lg top-12">
                  <Link to="/signup" className="block text-sm text-white transition hover:text-blue-500">Sign Up</Link>
                  <Link to="/login" className="block mt-2 text-sm text-white transition hover:text-red-500">Login</Link>
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
        <div className="absolute left-0 flex flex-col w-full p-5 space-y-4 text-white bg-black top-full">
          <Link to="/" className="transition hover:text-gray-400">Home</Link>
          <Link to="/tvshows" className="transition hover:text-gray-400">Tv Shows</Link>
          <Link to="/movies" className="transition hover:text-gray-400">Movies</Link>
          <Link to="#" className="transition hover:text-gray-400">My List</Link>
          <Link to="#" className="transition hover:text-gray-400">Browse</Link>
          <div className="flex justify-around mt-4">
            <FaSearch className="cursor-pointer hover:text-gray-400" />
            <FaBell className="cursor-pointer hover:text-gray-400" />
          </div>
          <div className="flex flex-col items-start mt-4 space-y-2">
            <Link to="/signup" className="text-blue-500">Sign Up</Link>
            <Link to="/login" className="text-red-500">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
