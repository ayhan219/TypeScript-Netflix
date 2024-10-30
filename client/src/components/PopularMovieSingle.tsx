import React from "react";
import img from "../assets/venom.jpg";

type Item ={
    poster_path:string,
    title:string
}
type Props = {
  item:Item;
  index: number;
};

const PopularMovieSingle: React.FC<Props> = ({ item, index }) => {

    
  return (
    <div  key={index}  className="w-72 h-72 relative">
      <img className="w-full h-full object-cover object-center" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
      <div className="text-white font-bold text-2xl absolute bottom-0 left-0 p-4">
        <h2>{item.title}</h2>
      </div>
    </div>
  );
};

export default PopularMovieSingle;
