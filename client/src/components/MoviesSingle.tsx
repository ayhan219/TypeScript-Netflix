import React from 'react'

type MoviesProps ={
    item:{
        poster_path:string,
        vote_average:number,
        title:string
        id:number
    },
    findId?:(id:number)=>void;
}

const MoviesSingle = ({item,findId}:MoviesProps) => {
    
 return(
    <div onClick={() => findId && findId(item.id)} className='border-2 border-gray-800 w-72 h-96 solid'>
                    <div>
                        <img className='object-cover object-center w-full h-52' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
                    </div>
                    <div className='w-full h-auto text-base font-semibold text-white'>
                        <div className='flex justify-between w-full p-3'>
                            <h3>Name:</h3>
                            <span className='text-base'>{item.title}</span>
                        </div>
                        <div className='flex justify-between w-full p-3'>
                            <h3>IMDB:</h3>
                            <span>{item.vote_average}</span>
                        </div>
                    </div>
                </div>
 )
}

export default MoviesSingle