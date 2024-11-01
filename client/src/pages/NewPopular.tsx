import React, { useEffect, useState } from 'react'
import MoviesSingle from '../components/MoviesSingle'
import axios from "axios"
import token from "../token"
import { useLocation, useNavigate } from 'react-router-dom'

type NewPopular = {
    poster_path:string,
    vote_average:number,
    title:string
}

const Movies = () => {

    const [movies,setMovies] = useState<NewPopular[]>([])

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const page = parseInt(queryParams.get('page') || '1');
        setCurrentPage(page);
    }, [location.search]); 


    useEffect(()=>{
    const getMovies = async()=>{
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${token.API}&language=en-EN&page=${currentPage}`)
            setMovies(response.data.results)
            setTotalPages(response.data.total_pages)
            
            
        } catch (error) {
            console.log(error);
            
        }
    } 
    getMovies();   
    },[currentPage])

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
            navigate(`?page=${page}`);
            window.location.reload();
            window.scrollTo(0, 0); 
        }
    };
  return (
    <div className='flex justify-center w-full py-10 bg-gradient-to-b from-gray-800 to-black'>
        <div className='w-[90%] max-w-[1200px]'>
        <div className='pb-8 text-4xl font-extrabold text-center text-white border-b-2 border-gray-700 md:text-5xl'>
                    <h2>Movies</h2>
                </div>
                <div className='grid grid-cols-1 gap-8 mt-8 justify-items-center md:grid-cols-2 lg:grid-cols-4'>
                   {
                    movies.map((item,index)=>(
                        <MoviesSingle key={index} index={index} item={item}  />
                    ))
                   }
                </div>

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
  )
}

export default Movies