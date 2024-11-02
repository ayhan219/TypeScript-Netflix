import React from 'react'

type TvShowsProps = {
    item: {
        poster_path: string,
        vote_average: number,
        name: string,
        id:number
    },
    findId:(id:number)=>void
};



const TvShowsPageSingle = ({item,findId}:TvShowsProps) => {
  return (
    <div onClick={()=>findId(item.id)} className='w-72 h-96 border-2 solid border-gray-800'>
                    <div>
                        <img className='w-full h-52 object-center object-cover' src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
                    </div>
                    <div className='w-full h-auto text-base text-white font-semibold'>
                        <div className='w-full flex justify-between p-3'>
                            <h3>Name:</h3>
                            <span className='text-base'>{item.name}</span>
                        </div>
                        <div className='w-full flex justify-between p-3'>
                            <h3>IMDB:</h3>
                            <span>{item.vote_average}</span>
                        </div>
                    </div>
                </div>
  )
}

export default TvShowsPageSingle