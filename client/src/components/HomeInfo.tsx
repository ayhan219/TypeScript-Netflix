import React from 'react'
import back from "../assets/back.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";

type Props = {}

const HomeInfo = (props: Props) => {
  return (
    <div>
         <img 
        className='absolute w-full h-full inset-0 object-cover' 
        src={back} 
        alt="Background" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent"></div>
     <div className='w-[60%] h-64 absolute bottom-44'>
    <div>
    <h2 className='text-white pl-24 font-bold text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia officia eos ullam dignissimos odit nostrum qui eius, totam facere amet.</h2>
    </div>
    <div className="p-24 flex gap-5">
    <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold text-lg rounded-lg hover:bg-gray-200 transition duration-300">
            <IoMdArrowDropright className="text-3xl" />
            Play
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white font-semibold text-lg rounded-lg hover:bg-gray-600 transition duration-300">
            <IoIosInformationCircle className="text-2xl" />
            More Info
          </button>
        

    </div>
     </div>
    </div>
  )
}

export default HomeInfo