import React from 'react'

type FavoritesItemProps = {
    poster_path: string;
    title: string;
  };

const FavoritesItem = ({poster_path,title}:FavoritesItemProps) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-200">
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt="Movie Poster"
              className="w-full h-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold truncate">{title}</h3>
              <p className="text-gray-400 text-sm mt-1">IMDB Rating: 8.7</p>
            </div>
          </div>
  )
}

export default FavoritesItem