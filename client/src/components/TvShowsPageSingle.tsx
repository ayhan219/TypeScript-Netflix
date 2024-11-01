<<<<<<< HEAD
import React from 'react'
import img from "../assets/back.jpg"
=======

>>>>>>> 5f1eac51a69c21d4a4058fb2fed2bb0c5017b229

type TvShowsProps = {
    item: {
        poster_path: string,
        vote_average: number,
        name: string,
    };
};

const TvShowsPageSingle = ({item}:TvShowsProps) => {
  return (
<<<<<<< HEAD
    <div className='w-72 h-96 border-2 solid border-gray-800'>
                    <div>
                        <img className='w-full h-52 object-center object-cover' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
                    </div>
                    <div className='w-full h-auto text-base text-white font-semibold'>
                        <div className='w-full flex justify-between p-3'>
                            <h3>Name:</h3>
                            <span className='text-base'>{item.name}</span>
                        </div>
                        <div className='w-full flex justify-between p-3'>
=======
    <div className='border-2 border-gray-800 w-72 h-96 solid'>
                    <div>
                        <img className='object-cover object-center w-full h-52' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
                    </div>
                    <div className='w-full h-auto text-base font-semibold text-white'>
                        <div className='flex justify-between w-full p-3'>
                            <h3>Name:</h3>
                            <span className='text-base'>{item.name}</span>
                        </div>
                        <div className='flex justify-between w-full p-3'>
>>>>>>> 5f1eac51a69c21d4a4058fb2fed2bb0c5017b229
                            <h3>IMDB:</h3>
                            <span>{item.vote_average}</span>
                        </div>
                    </div>
                </div>
  )
}

export default TvShowsPageSingle