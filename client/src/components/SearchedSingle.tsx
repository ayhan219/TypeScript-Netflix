import React from 'react'
import temp from "../assets/venom.jpg"

// {``}

type SearchedProps = {
    item:{
     original_title:string,
    overview:string,
    original_name:string,
    poster_path:string,
    vote_average:string,
    id:number,
    }
}

const SearchedSingle = ({item}:SearchedProps) => {
    return (
        <div className='w-72 h-96 border-2 solid border-gray-800 hover:scale-105 duration-200 ease-in-out cursor-pointer'>
                        <div>
                            <img className='w-full h-52 object-center object-cover' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
                        </div>
                        <div className='w-full h-auto text-base text-white font-semibold'>
                            <div className='w-full flex justify-between p-3'>
                                <h3>Name:</h3>
                                <span className='text-base'>{item.original_title ? item.original_title : item.original_name}</span>
                            </div>
                            <div className='w-full flex justify-between p-3'>
                                <h3>IMDB:</h3>
                                <span>{item.vote_average}</span>
                            </div>
                        </div>
                    </div>
      )
}

export default SearchedSingle