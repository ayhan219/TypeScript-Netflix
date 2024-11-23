import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useNetflixContext } from '../context/AllContext';
import FavoritesItem from '../components/FavoritesItem';



type Favorites ={
    poster_path:string,
    title:string,

}

const Favorites = () => {

    const [favorites,setFavorites] = useState<Favorites[]>([]);
    const {user} = useNetflixContext();


    const getFavorites = async()=>{
        try {
            const response = await axios.get("http://localhost:5000/api/movie/getfavorites",{
                params:{
                    userId:user?.id
                }
            });
            console.log(response.data);
            
            setFavorites(response.data)
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
       getFavorites();
    },[user])


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
         {
           favorites.map((item,index)=>(
            <FavoritesItem  key={index}
            poster_path={item.poster_path}
            title={item.title} />
           ))
         }

          

          
        </div>
      </div>
    </div>
  );
};

export default Favorites;
