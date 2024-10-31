import React from 'react'
import TvShowsPageSingle from '../components/TvShowsPageSingle'

type Props = {}

const TvShows = (props: Props) => {
  return (
    <div className='w-full h-screen bg-black flex justify-center'>
        <div className='w-[85%] h-full'>
            <div className='w-full h-auto text-white text-3xl font-bold p-5'>
                <h2>Tv Shows</h2>
            </div>
            <div className='w-full h-[90%] flex gap-10 '>
                <TvShowsPageSingle />
                <TvShowsPageSingle />
                <TvShowsPageSingle />
                <TvShowsPageSingle />
                <TvShowsPageSingle />

            </div>
        </div>
    </div>
  )
}

export default TvShows