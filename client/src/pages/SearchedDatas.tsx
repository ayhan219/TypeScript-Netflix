import React, { useEffect, useState } from "react";
import SearchedSingle from "../components/SearchedSingle";
import { useParams } from "react-router-dom";
import axios from "axios";
import token from "../token";

type SearchedData = {
    original_title:string,
    original_name:string,
    overview:string,
    poster_path:string,
    vote_average:string,
    id:number,

};

const SearchedDatas = () => {
  const { value } = useParams();
  const [datas,setDatas] = useState<SearchedData[]>([]);


  useEffect(() => {
    const getSearchedValue = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${token.API}&query=${value}
`);
        setDatas(response.data.results)
        console.log(response.data.results);
        
      } catch (error) {
        console.log(error);
      }
    };
    getSearchedValue();
  }, []);

  return (
    <div className="flex justify-center w-full  py-10 bg-gradient-to-b from-gray-800 to-black">
      <div className="w-[90%] max-w-[1200px]">
        <div className="pb-8 text-4xl font-extrabold text-center text-white border-b-2 border-gray-700 md:text-5xl">
          <h2>Searched Data</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 justify-items-center md:grid-cols-2 lg:grid-cols-4">
          {
            datas.map((item,index)=>(
                <SearchedSingle key={index} item={item} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default SearchedDatas;
