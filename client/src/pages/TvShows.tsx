import React from 'react'
import img from "../assets/back.jpg"

type Props = {}

const TvShows = (props: Props) => {
  return (
    <div className='w-full h-screen bg-black flex justify-center'>
        <div className='w-[85%] h-full'>
            <div className='w-full h-auto text-white text-3xl font-bold p-5'>
                <h2>Tv Shows</h2>
            </div>
            <div className='w-full h-[90%] '>
                <div className='w-72 h-96 bg-blue-500'>
                    <div>
                        <img className='w-full h-52 object-center object-cover' src={img} alt="" />
                    </div>
                    <div className='w-full h-auto text-base text-white font-semibold'>
                        <div className='w-full flex justify-between p-3'>
                            <h3>Name:</h3>
                            <span className='text-base'>Venom the spider</span>
                        </div>
                        <div className='w-full flex justify-between p-3'>
                            <h3>IMDB:</h3>
                            <span>4.7</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TvShows