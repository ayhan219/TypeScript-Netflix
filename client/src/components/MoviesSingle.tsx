import React, { useContext } from "react";
import axios from "axios";
import { useNetflixContext } from "../context/AllContext";

type MoviesProps = {
  item: {
    poster_path: string;
    vote_average: number;
    title: string;
    id: number;
  };
  findId?: (id: number) => void;
  buttonText?: string; // Optional customization for the button
};

const MoviesSingle: React.FC<MoviesProps> = ({ item, findId, buttonText = "Add Favorites" }) => {

  const { poster_path, vote_average, title, id } = item;

  const {user} = useNetflixContext();


  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://via.placeholder.com/300x450?text=No+Image"; // Fallback image
  };

  const addFavorites = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/movie/addfavorites", {
        userId:user?.id,
        id,
        poster_path,
        title,
        vote_average,
      });
      console.log("Added to favorites:", response.data);
      alert("Movie added to favorites successfully!");
     
      
    } catch (error) {
      console.error("Error adding to favorites:", error);
      alert("Failed to add the movie to favorites. Please try again.");
    }
  };

  return (
    <div
      onClick={() => findId && findId(id)}
      className="border-2 border-gray-800 w-72 h-96 rounded-lg hover:scale-105 duration-200 ease-in-out cursor-pointer bg-gray-900 flex flex-col"
      aria-label={`View details for ${title}`}
    >
      {/* Image Section */}
      <div>
        <img
          className="object-cover object-center w-full h-52 rounded-t-lg"
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
          onError={handleImageError}
        />
      </div>

      {/* Movie Details */}
      <div className="w-full h-auto text-base font-semibold text-white p-3 flex-grow">
        <MovieDetail label="Name:" value={title} />
        <MovieDetail
          label="IMDB:"
          value={vote_average ? vote_average.toFixed(1) : "N/A"}
        />
      </div>

      {/* Action Button */}
      <div className="text-white text-center mt-auto p-3">
        <button
          className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the parent div's onClick
            addFavorites(); // Call the function to add to favorites
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default MoviesSingle;

// Reusable Movie Detail Component
type MovieDetailProps = {
  label: string;
  value: string | number;
};

const MovieDetail: React.FC<MovieDetailProps> = ({ label, value }) => (
  <div className="flex justify-between w-full mb-2">
    <h3 className="text-gray-400">{label}</h3>
    <span className="text-white">{value}</span>
  </div>
);
