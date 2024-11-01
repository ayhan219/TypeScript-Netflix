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
  const [openArea,setOpenArea] = useState<boolean>(false);

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
    <div className="relative flex items-center justify-center w-full bg-black h-36">
      <div className="w-[85%] h-full flex items-center ">
        <div className="flex items-center w-[70%] gap-16">
          <div>
            <img
              className={`w-16 md:w-32 h-10 md:h-16 cursor-pointer`}
              src={isSmallScreen ? logoSmall : logo}
              alt="Logo"
            />
          </div>
          <div className="hidden text-base font-bold text-white lg:flex gap-7">
            <a href="/" className="cursor-pointer">
              Home
            </a>
            <a href="/tvshows" className="cursor-pointer">
              Tv Shows
            </a>
            <a href="/movies" className="cursor-pointer">
              Movies
            </a>
            <a href="#" className="cursor-pointer">
              My List
            </a>
            <a href="#" className="cursor-pointer">
              Browse My Language
            </a>
          </div>
        </div>
        <div className="w-full lg:w-[20%]">
          {!isSmallScreen ? (
            <div className="flex items-center justify-end gap-10 text-white">
              <div className="flex text-3xl gap-7">
                <FaSearch className="cursor-pointer" />
                <FaBell className="cursor-pointer" />
              </div>
              <div className="flex items-center gap-1 text-[#A8B0B5]">
                <img
                  className="w-10 h-10"
                  src="https://pbs.twimg.com/media/GB2vydcX0AAgt5f.png"
                  alt="User Avatar"
                />
                <TiArrowSortedDown onClick={()=>setOpenArea(!openArea)} className="text-2xl cursor-pointer" />
              </div>
            </div>
          ) : (
            <div className="flex justify-end w-full cursor-pointer">
              <GiHamburgerMenu onClick={toggleHamburger} className="text-4xl text-white" />
            </div>
          )}
        </div>
      </div>
      {
        isHamburgerOpen && (
          <div className="absolute left-0 z-50 w-full bg-black top-36 h-80">
            <div className="flex flex-col pt-5 pl-5 text-base font-bold text-white gap-7">
              <a href="/" className="cursor-pointer">
                Home
              </a>
              <a href="/tvshows" className="cursor-pointer">
                Tv Shows
              </a>
              <a href="/movies" className="cursor-pointer">
                Movies
              </a>
              
              <a href="#" className="cursor-pointer">
                My List
              </a>
              <a href="#" className="cursor-pointer">
                Browse My Language
              </a>
            </div>
          </div>
        )
      }
      {
        openArea && <div className="absolute w-64 h-32 bg-black right-32 top-24">
          <div className="flex flex-col items-center justify-center w-full h-full text-sm font-semibold text-white rounded-sm">
            
            <p>You don't have an account?</p>
            <Link to={"/signup"}><span className="text-blue-600">Sign Up</span></Link>
            <p>OR</p>
            <Link to={"/login"}><span className="text-red-600">Login</span></Link>
            
            
          </div>
        </div>
      }
    </div>
  );
};

export default Navbar;
