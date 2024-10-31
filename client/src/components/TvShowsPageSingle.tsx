import React from 'react'
import img from "../assets/back.jpg"

type Props = {}

const TvShowsPageSingle = (props: Props) => {
  return (
    <div className='w-72 h-96 border-2'>
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
  )
}

export default TvShowsPageSingle