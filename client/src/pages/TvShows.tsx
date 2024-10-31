import React, { useEffect, useState } from 'react';
import TvShowsPageSingle from '../components/TvShowsPageSingle';
import API from "../token"
import axios from "axios"


type TvShows ={
    poster_path:string,
    vote_average:number,
    name:string
}


const TvShows = () => {

    const [tvShows,setTvShows] = useState<TvShows[]>([]);

    useEffect(()=>{

      const getTvShows = async()=>{
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API.API}&language=en-EN&page=1`)
            console.log(response.data.results);
            setTvShows(response.data.results)
            
        } catch (error) {
            console.log(error);
            
        }
      }
      getTvShows();
    },[])
  return (
    <div className='w-full bg-gradient-to-b from-gray-900 to-black flex justify-center py-10'>
      <div className='w-[90%] max-w-[1200px]'>
        {/* Header Section */}
        <div className='text-white text-center text-4xl md:text-5xl font-extrabold pb-8 border-b-2 border-gray-700'>
          <h2>TV Shows</h2>
        </div>

        {/* Grid Section */}
        <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
          {
            tvShows.map((item,index)=>(
                <TvShowsPageSingle item={item} />
            ))
          }
          
        </div>
      </div>
    </div>
  );
};

export default TvShows;
