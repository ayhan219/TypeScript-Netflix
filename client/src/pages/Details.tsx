import React from 'react';
import venom from "../assets/venom.jpg";

const Details = () => {
    return (
        <div className='w-full h-[90vh] relative'>
            <img className='w-full h-full object-cover' src={venom} alt="Movie Background" />
            <div className='w-[40rem] h-auto bg-black bg-opacity-70 absolute bottom-32 left-24 p-6 rounded-lg shadow-lg'>
                <h2 className='text-2xl font-bold text-white mb-2'>Movie Title</h2>
                <p className='text-sm text-gray-300 mb-1'>Release Date: YYYY-MM-DD</p>
                <div className='flex gap-4'>
                <p className='text-sm text-gray-300 mb-3'>Rating: ⭐⭐⭐⭐</p>
                <span className='text-sm text-gray-300 mb-3'>7.6</span>
                </div>
                <p className='text-gray-200'>This is a brief synopsis of the movie. It will provide an overview of the plot and key themes.</p>
            </div>
        </div>
    );
};

export default Details;
