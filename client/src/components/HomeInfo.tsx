import React, { useEffect, useState } from "react";
import back from "../assets/back.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import axios from "axios";

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
        console.log(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  return (
    <div>
      <img
        className="absolute w-full h-full inset-0  object-cover"
        src={`https://image.tmdb.org/t/p/original/${popularMovies[0]?.poster_path}`}
        alt="Background"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent"></div>
      <div className="w-full md:w-[60%] h-64 absolute bottom-44">
        <div className="w-full md:w-auto md:text-base">
          <h2 className="text-white  pl-10 md:pl-24 font-bold text-base md:text-2xl">
            {popularMovies[0]?.overview}
          </h2>
        </div>
        <div className=" p-10 md:p-24 flex gap-5">
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
