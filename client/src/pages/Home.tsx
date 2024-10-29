import React from 'react';
import Navbar from '../components/Navbar';
import HomeInfo from '../components/HomeInfo';


type Props = {}

const Home = (props: Props) => {
  return (
    <div className='w-full h-screen relative'>
     
      
      <div className='relative z-10'>
        <Navbar />
      </div>
      <HomeInfo />


    </div>
  );
}

export default Home;
