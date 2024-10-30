import React from "react";
import img from "../assets/venom.jpg";

type Props = {};

const PopularMovies = (props: Props) => {
  return (
    <div className="w-full h-[40vh] bg-black flex flex-col items-center ">
      <div className="w-full h-auto p-8 pl-24 text-white">
        <h2 className="text-2xl font-bold">Popular on Netflix</h2>
      </div>
      <div className="w-[90%] h-64 flex gap-4">
        <div className="w-64 h-64 relative">
          <img className="w-full h-full object-cover" src={img} alt="" />
          <div className="text-white font-bold text-2xl absolute bottom-0 left-0 p-4">
            <h2>Venom The Last Dance</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
