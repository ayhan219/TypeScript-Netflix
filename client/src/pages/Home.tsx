import React from 'react'
import Navbar from '../components/Navbar'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='w-full h-screen bg-blue-400'>
        <Navbar />
    </div>
  )
}

export default Home