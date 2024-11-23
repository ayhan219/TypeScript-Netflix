import React from 'react';
import axios from "axios"

type Props = {};

const Favorites = (props: Props) => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Header Section */}
      <header className="px-8 py-4 border-b border-gray-700">
        <h1 className="text-3xl font-bold">My Favorites</h1>
        <p className="text-gray-400 mt-2">Explore your favorite movies and shows.</p>
      </header>

      {/* Content Section */}
      <div className="p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card Example */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-200">
            <img
              src="https://via.placeholder.com/300x450?text=Movie+Poster"
              alt="Movie Poster"
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold truncate">Movie Title</h3>
              <p className="text-gray-400 text-sm mt-1">IMDB Rating: 8.7</p>
            </div>
          </div>

          {/* Repeat cards as needed */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-200">
            <img
              src="https://via.placeholder.com/300x450?text=Movie+Poster"
              alt="Movie Poster"
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold truncate">Movie Title</h3>
              <p className="text-gray-400 text-sm mt-1">IMDB Rating: 9.3</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 duration-200">
            <img
              src="https://via.placeholder.com/300x450?text=Movie+Poster"
              alt="Movie Poster"
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold truncate">Movie Title</h3>
              <p className="text-gray-400 text-sm mt-1">IMDB Rating: 7.8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
