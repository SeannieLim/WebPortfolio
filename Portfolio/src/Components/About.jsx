import React from 'react'
import Navbar from '../Components/Navbar.jsx'
  
const About = () => {
  return (
    <>
    <Navbar/>
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-green-600'>About</p>
                </div>
                <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Sean, nice to meet you. Please take a look around</p>
                    </div>
                <div>
                    <p>I'm passionate about building things and drinking good coffee. I love everything related to software and would be thrilled to learn about all the different types of frameworks that can be used to create awesome applications</p>
                </div>
            </div>

        
           
        </div>
    </div>
    </>
  )
}

export default About
