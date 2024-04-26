import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Navbar from '../Components/Navbar.jsx';
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';
import profileImage from '../assets/Sean.jpeg'; // Import your profile image

const Home = () => {
  return (
    <>
      <Navbar />
      <div name='home' className="w-full h-screen bg-[#0a192f]">
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full items-center'>
          <div className="flex items-center mb-8"> {/* Flex container for image and text */}
            <div>
              <p className='text-customGreen'>Hi, my name is</p>
              <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Sean Lim</h1>
              <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Time Student.</h2>
              <p className="text-[#8892b0] text-xl py-4 max-w-[700px]">I'm a full time student specializing, occasionally designing and developing cool stuff. Currently, I'm focused on building responsive web and mobile application.</p>
            </div>
            {/* Profile Image */}
            <img src={profileImage} alt="Sean Lim" className="rounded-full w-1/2 h-80 ml-4 object-cover ml-20 hover:scale-125 transition-transform duration-700 shadow-md hover:shadow-lg" />
          </div>
          <div>
            <Link to="/work">
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600">
                View Resume
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
