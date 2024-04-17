import React from 'react'
import Navbar from './Navbar'
import Skills from "./Skills"
import Typical from 'react-typical'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import Node from '../assets/node.png'
import ReactJs from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Github from '../assets/github.png'

const Work = () => {
  return (
    <>
    <Navbar/>
    
    <div className="w-full h-screen bg-[#0a192f] text-gray-300">
         <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#bec5db] mx-auto'>My Resume</h1>

            <Typical className="text-[#C7F6C7] text-3xl py-4 max-w-[700px] mx-auto"
        steps={['Welcome', 1000,'Please take a look!', 500 ]}
        loop={Infinity}
        wrapper="p"
      />
        <div className="mt-72">
            <p className="text-4xl font-bold inline border-b-4 border-green-600">Experience</p>
            <p className="py-4 text-2xl mt-2">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py--8">

        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto"src={HTML} alt="HTML icon"/>
            <p className="my-4">HTML</p>
          </div> 

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto"src={CSS} alt="Css icon"/>
            <p className="my-4">CSS</p>
          </div> 

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto"src={Javascript} alt="Js icon"/>
            <p className="my-4">Javascript</p>
          </div> 


      
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto"src={Node} alt="Node icon"/>
            <p className="my-4">Node</p>
          </div> 


       
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto"src={ReactJs} alt="ReactJs icon"/>
            <p className="my-4">ReactJS</p>
          </div> 

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto"src={Tailwind} alt="Tailwind icon"/>
            <p className="my-4">Tailwind</p>
          </div> 

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto"src={Github} alt="Github icon"/>
            <p className="my-4">Github</p>
          </div>
          </div>

    </div>

    

    </div>
    </>
  )
}

export default Work
