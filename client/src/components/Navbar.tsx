import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import logoSmall from "../assets/logosmall.png";
import { FaSearch, FaBell } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {};

const Navbar = (props: Props) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-black h-36  flex justify-center items-center relative">
      <div className="w-[85%] h-full flex items-center ">
        <div className="flex items-center w-[70%] gap-16">
          <div>
            <img
              className={`w-16 md:w-32 h-10 md:h-16 cursor-pointer`}
              src={isSmallScreen ? logoSmall : logo}
              alt="Logo"
            />
          </div>
          <div className="text-white font-bold hidden lg:flex gap-7 text-base">
            <a href="" className="cursor-pointer">
              Home
            </a>
            <a href="" className="cursor-pointer">
              Tv Shows
            </a>
            <a href="" className="cursor-pointer">
              Movies
            </a>
            <a href="" className="cursor-pointer">
              New & Popular
            </a>
            <a href="" className="cursor-pointer">
              My List
            </a>
            <a href="" className="cursor-pointer">
              Browse My Language
            </a>
          </div>
        </div>
        <div className="w-full lg:w-[20%]">
          {!isSmallScreen ? (
            <div className="text-white flex justify-end gap-10 items-center">
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
                <TiArrowSortedDown className="text-2xl cursor-pointer" />
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-end cursor-pointer">
              <GiHamburgerMenu onClick={()=>setIsHamburgerOpen(!isHamburgerOpen)} className="text-4xl text-white" />
            </div>
          )}
        </div>
      </div>
      {
        isHamburgerOpen && <div className="w-full h-80  absolute top-36">
            <div className="text-white font-bold flex flex-col gap-7 text-base pl-5">
            <a href="" className="cursor-pointer">
              Home
            </a>
            <a href="" className="cursor-pointer">
              Tv Shows
            </a>
            <a href="" className="cursor-pointer">
              Movies
            </a>
            <a href="" className="cursor-pointer">
              New & Popular
            </a>
            <a href="" className="cursor-pointer">
              My List
            </a>
            <a href="" className="cursor-pointer">
              Browse My Language
            </a>
            </div>
        </div>
      }
    </div>
  );
};

export default Navbar;
