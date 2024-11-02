import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import token from '../token'; 

type Data = {
    original_name: string;
    first_air_date: string;
    vote_average: number;
    backdrop_path: string;
    overview: string;
};

const Details = () => {
    const [detailsOfTheData, setDetailsOfTheData] = useState<Data | null>(null); // Initialize as null
    const { id } = useParams();

    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${token.API}&language=en-US`);
                setDetailsOfTheData(response.data); 
            } catch (error) {
                console.log(error);
            }
        };
        getDetails();
    }, [id]); 

    if (!detailsOfTheData) return <div>Loading...</div>; 

    return (
        <div className='w-full h-[90vh] relative'>
            <img
                className='w-full h-full object-cover'
                src={`https://image.tmdb.org/t/p/original/${detailsOfTheData.backdrop_path}`} 
                alt="Movie Background"
            />
            <div className='w-[40rem] h-auto bg-black bg-opacity-70 absolute bottom-32 left-24 p-6 rounded-lg shadow-lg'>
                <h2 className='text-2xl font-bold text-white mb-2'>{detailsOfTheData.original_name}</h2>
                <p className='text-sm text-gray-300 mb-1'>Release Date: {detailsOfTheData.first_air_date}</p>
                <div className='flex gap-4'>
                    <p className='text-sm text-gray-300 mb-3'>Rating: ⭐⭐⭐⭐</p>
                    <span className='text-sm text-gray-300 mb-3'>{detailsOfTheData.vote_average}</span>
                </div>
                <p className='text-gray-200'>{detailsOfTheData.overview}</p>
            </div>
        </div>
    );
};

export default Details;
