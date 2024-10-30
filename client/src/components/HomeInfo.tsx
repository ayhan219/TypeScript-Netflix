import React, { useEffect, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import headerImage from "../assets/venom.jpg"
import axios from "axios";
import venompng from "../assets/pngvenom.png"

interface Movie {
  poster_path: string;
  overview: string;
}

const HomeInfo = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=184e34e628510162048642ffdf5f0ba9&language=en-EN&page=1"
        );
        setPopularMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

  return (
    <div className="relative w-full h-[65rem]">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={headerImage}
        alt="Background"
      />

  
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent"></div>
      
      <div className="absolute inset-x-0 bottom-64 w-[80%] md:w-full p-10 md:p-24">
        <div className="w-64 h-64">
          <img src={venompng} alt="" />
        </div>
        <h2 className="text-white font-bold text-base  md:text-2xl mb-4">
          {popularMovies[0]?.overview}
        </h2>
        <div className="flex gap-5">
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold text-base md:text-lg rounded-lg hover:bg-gray-200 transition duration-300">
            <IoMdArrowDropright className="text-xl md:text-3xl" />
            Play
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white font-semibold text-base md:text-lg rounded-lg hover:bg-gray-600 transition duration-300">
            <IoIosInformationCircle className="text-2xl" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
