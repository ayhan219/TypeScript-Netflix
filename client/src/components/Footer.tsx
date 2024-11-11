import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full h-[40vh] bg-black pt-10 flex justify-center'>
      <div className='w-[70%] md:w-[60%] h-full flex flex-col items-center'>
      
        <div className='text-white text-2xl md:text-4xl flex gap-6 mb-8'>
          <FaFacebook />
          <FaSquareInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
        <div className='text-white text-xs md:text-sm flex justify-between w-full pt-6 pb-10 gap-4'>
          <div className='w-1/4 flex flex-col gap-4 font-semibold'>
            <a href="">Audio Description</a>
            <a href="">Investor Relations</a>
            <a href="">Legal Notices</a>
          </div>
          <div className='w-1/4 flex flex-col gap-4 font-semibold'>
            <a href="">Help Centre</a>
            <a href="">Jobs</a>
            <a href="">Cookie Preferences</a>
          </div>
          <div className='w-1/4 flex flex-col gap-4 font-semibold'>
            <a href="">Gift Cards</a>
            <a href="">Terms of Use</a>
            <a href="">Corporate Information</a>
          </div>
          <div className='w-1/4 flex flex-col gap-4 font-semibold'>
            <a href="">Media Centre</a>
            <a href="">Privacy</a>
            <a href="">Contact Us</a>
          </div>
        </div>
        <div className='text-white text-xs md:text-sm text-center'>
          <h2>© 1997-2024 Netflix Inc.</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
