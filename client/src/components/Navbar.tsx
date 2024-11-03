import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import logoSmall from "../assets/logosmall.png";
import { FaSearch, FaBell } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useNetflixContext } from "../context/AllContext";

type Props = {};

const Navbar = (props: Props) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const [openArea, setOpenArea] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const {setSearchedValue,searchedValue} = useNetflixContext();

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

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>)=>{
    setSearchedValue(event.target.value)
    
  }

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

            <a className="cursor-pointer" onClick={() => setOpenSearch(!openSearch)}>Browse</a>
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
      {openSearch && (
  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50">
    <div className="relative w-[90%] lg:w-1/2 bg-black rounded-lg shadow-lg p-6 mt-32">
      <button
        onClick={() => setOpenSearch(false)}
        className="absolute top-3 right-3 text-white text-xl hover:text-gray-400"
      >
        &times;
      </button>
      <h2 className="text-white text-xl mb-4 font-semibold">Search</h2>
      <div className="flex items-center gap-2">
        <input
          type="text"
          onChange={(e)=>handleInput(e)}
          placeholder="Search for something..."
          className="w-full py-2 px-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring focus:ring-gray-600"
        />
        <Link onClick={()=>setOpenSearch(!openSearch)} to={`/searched/${searchedValue}`}>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
          Search
        </button>
        </Link>
      </div>
    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
