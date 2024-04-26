import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Navbar from '../Components/Navbar.jsx'
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div name='home' className="w-full h-screen bg-[#0a192f]">
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-customGreen'>Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Sean Lim</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Time Student.</h2>
            <p className="text-[#8892b0] text-xl py-4 max-w-[700px]">I'm a full time student specializing in eating, sleeping and mugging and occasionally designing and developing cool stuff. Currently, I'm focused on building responsive web and mobile application.</p>
            <div>
              <Link to="/work">
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600">View Resume
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className="ml-3"/> 
                </span>
                </button>
                </Link>
            </div>
        </div>

    </div>
    <Footer/>
    </>
  )
}

export default Home
