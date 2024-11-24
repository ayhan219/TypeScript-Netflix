import React from "react";
import axios from "axios";
import { useNetflixContext } from "../context/AllContext";

type TvShowsProps = {
  item: {
    poster_path: string;
    vote_average: number;
    name: string;
    id: number;
  };
  findId?: (id: number) => void; // Optional for flexibility
  buttonText?: string; // Optional customization for the button
};

const TvShowsPageSingle: React.FC<TvShowsProps> = ({
  item,
  findId,
  buttonText = "Add to Favorites",
}) => {
  const { poster_path, vote_average, name, id } = item;
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
        title:name,
        vote_average,
      });
      console.log("Added to favorites:", response.data);
      alert("TV Show added to favorites successfully!");
    } catch (error) {
      console.error("Error adding to favorites:", error);
      alert("Failed to add the TV Show to favorites. Please try again.");
    }
  };

  return (
    <div
  onClick={() => findId && findId(id)}
  className="w-72 h-96 border-2 border-gray-800 hover:scale-105 duration-200 ease-in-out cursor-pointer rounded-lg bg-gray-900 flex flex-col"
  aria-label={`View details for ${name}`}
>
  {/* Image Section */}
  <div>
    <img
      className="w-full h-52 object-center object-cover rounded-t-lg"
      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
      alt={name}
      onError={handleImageError}
    />
  </div>

  {/* TV Show Details */}
  <div className="w-full text-base font-semibold text-white p-3 flex-grow">
    <TvShowDetail label="Name:" value={name} />
    <TvShowDetail
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

export default TvShowsPageSingle;

// Reusable TV Show Detail Component
type TvShowDetailProps = {
  label: string;
  value: string | number;
};

const TvShowDetail: React.FC<TvShowDetailProps> = ({ label, value }) => (
  <div className="flex justify-between w-full mb-2">
    <h3 className="text-gray-400">{label}</h3>
    <span className="text-white">{value}</span>
  </div>
);
