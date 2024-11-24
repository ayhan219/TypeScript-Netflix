import React from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";

type FavoritesItemProps = {
  poster_path: string;
  title: string;
  _id:string,
  deleteFavorites: (_id: string) => void;
};



const FavoritesItem = ({ poster_path, title,_id,deleteFavorites }: FavoritesItemProps) => {
  return (
    <div  className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-200 cursor-pointer group">
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity ease-in-out duration-500"></div>

      {/* Movie Image */}
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="Movie Poster"
        className="w-full h-full object-cover"
      />

      {/* Movie Details */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">IMDB Rating: 8.7</p>
      </div>

      {/* Delete Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={()=>deleteFavorites(_id)} className="flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300">
          <IoCloseCircleSharp size={20} />
          Remove from Favorites
        </button>
      </div>
    </div>
  );
};

export default FavoritesItem;
