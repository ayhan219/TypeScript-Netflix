import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TvShowsPageSingle from '../components/TvShowsPageSingle';
import API from "../token";
import axios from "axios";
import {useNetflixContext} from "../context/AllContext"

type TvShows = {
    poster_path: string;
    vote_average: number;
    name: string;
    id:number;
};

const TvShows : React.FC = () => {
    const [tvShows, setTvShows] = useState<TvShows[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const {setTvShowId} = useNetflixContext();
    
    

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const page = parseInt(queryParams.get('page') || '1');
        setCurrentPage(page);
    }, [location.search]); 

    useEffect(() => {
        const getTvShows = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API.API}&language=en-EN&page=${currentPage}`);
                setTvShows(response.data.results);
                setTotalPages(response.data.total_pages); 
            } catch (error) {
                console.log(error);
            }
        };
        getTvShows();
    }, [currentPage]); 

    // Function to handle page change
    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
            navigate(`?page=${page}`);
            window.location.reload();
            window.scrollTo(0, 0); 
        }
    };

    const findId = (id:number)=>{
       setTvShowId(id);
       navigate(`/tv/details/${id}`)
    }

    return (
        <div className='w-full bg-gradient-to-b from-gray-900 to-black flex justify-center py-10'>
            <div className='w-[90%] max-w-[1200px]'>
                {/* Header Section */}
                <div className='text-white text-center text-4xl md:text-5xl font-extrabold pb-8 border-b-2 border-gray-700'>
                    <h2>TV Shows</h2>
                </div>

                {/* Grid Section */}
                <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
                    {tvShows.map((item, index) => (
                        <TvShowsPageSingle key={index} item={item} findId={findId} />
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className='flex justify-center mt-8'>
                    <button
                        className={`px-4 py-2 bg-gray-800 text-white rounded-l ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className='px-4 py-2 text-white'>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        className={`px-4 py-2 bg-gray-800 text-white rounded-r ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TvShows;
