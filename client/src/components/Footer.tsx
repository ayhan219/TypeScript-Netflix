import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full h-[40vh] bg-black pt-10 flex justify-center'>
        <div className='w-[60%] h-full '>
        <div className='text-white text-5xl flex gap-10'>
                <FaFacebook />
                <FaSquareInstagram />
                <FaTwitter />
                <FaYoutube />
            </div>
            <div className='text-white flex justify-between pt-10'>
            <div className='flex flex-col gap-6 font-bold'>
                <a href="">Audio Description</a>
                <a href="">Invester Relations</a>
                <a href="">Legal Notices</a>
            </div>
            <div className='flex flex-col gap-6 font-bold'>
                <a href="">Help Centre</a>
                <a href="">Jobs</a>
                <a href="">Cookie Preferences</a>
            </div>
            <div className='flex flex-col gap-6 font-bold'>
                <a href="">Git Cards</a>
                <a href="">Terms of Use</a>
                <a href="">Corporate Informations</a>
            </div>
            <div className='flex flex-col gap-6 font-bold'>
                <a href="">Media Centre</a>
                <a href="">Privacy</a>
                <a href="">Contact Us</a>
            </div>
            </div>
            <div className='text-white text-base pt-16'>
                <h2>1997-2024 Netflix Inc.</h2>
            </div>
        </div>
    </div>
  )
}

export default Footer