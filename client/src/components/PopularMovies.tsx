import React, { useEffect, useState, useRef } from "react";
import PopularMovieSingle from "./PopularMovieSingle";
import axios from "axios";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import token from "../token"

type Item = {
  poster_path: string;
  title: string;
};

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState<Item[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const getPopular = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token.token}`,
            },
          }
        );
        setPopularMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getPopular();
  }, []);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-[50vh] bg-black flex flex-col items-center pt-16">
      <div className="w-full h-auto p-8 pl-24 text-white">
        <h2 className="text-2xl font-bold">Popular on Netflix</h2>
      </div>
      <div className="relative w-[90%] h-[38rem] flex items-center overflow-hidden">
        <div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
          onClick={scrollLeft}
        >
          <FaArrowCircleLeft className="text-white text-3xl" />
        </div>

        <div ref={scrollRef} className="flex gap-4 overflow-x-hidden h-full">
          {popularMovies.map((item, index) => (
            <div className="flex-shrink-0" key={index}> 
              <PopularMovieSingle item={item} index={index} />
            </div>
          ))}
        </div>

        <div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
          onClick={scrollRight}
        >
          <FaArrowCircleRight className="text-white text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
