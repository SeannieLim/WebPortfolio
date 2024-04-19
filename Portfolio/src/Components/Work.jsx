import React from 'react'
import Navbar from './Navbar'
import Skills from "./Skills"
import Typical from 'react-typical'


import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';
const Work = () => {
  return (
    <>
    <div className="bg-[#0a192f] min-h-screen">
    <Navbar/>
    <div className="w-full h-screen bg-[#0a192f] text-gray-300">
         <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#bec5db] mx-auto'>My Resume</h1>
            <Typical className="text-[#C7F6C7] text-3xl py-4 max-w-[700px] mx-auto"
        steps={['Welcome', 1000,'Please take a look!', 500]}
        loop={Infinity}
        wrapper="p"
      />
        <div className="mx-auto inline-flex ">
              <Link to="resume" smooth={true} duration={500} offset={-100}>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center mr-4 hover:bg-green-600 hover:border-green-600">View Resume
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className="ml-3"/> 
                </span>
                </button>
                </Link>

                <Link to="/work">
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600">Download Resume
                
                </button>
                </Link>
            </div>
    </div>

    <div className="w-full min-h-screen bg-[#0a192f]">
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
    <div id="resume" className="container mx-auto py-8 px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-slate-950">Sean Lim</h1>
            
            <hr className="my-4"/>

            <h2 className="text-xl font-semibold mb-2 text-slate-950">Summary</h2>
            <p className="text-slate-950">I am a driven student with a strong academic background and work ethic, excelling in multitasking and fast-paced environments. I have honed skills in building rapport, utilizing sales techniques and technologies to surpass sales targets, and fostering lasting client relationships. My leadership abilities, problem-solving skills, and dedication to exceptional customer experiences are evident in my previous roles and extracurricular activities. I am passionate about learning and seeking mentorship in IT to eventually become a skilled IT teacher and mentor myself, guiding individuals towards achieving their dreams and navigating the right path in their careers.</p>
             <h2 className="text-xl font-semibold mt-4 mb-2 text-slate-950">Experience</h2>
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-950">Tata Consultancy Services</h3>
                <h3 className="font-semibold text-slate-950">Assistant Systems Engineer</h3>
                <p className="text-slate-950">Learning and working closely with developers to develop software application for Singapore Airlines (SIA).
                Using ReactJs to assist developer with the development of the user interface and
                Undergo training as a system engineer learning different technologies and framework.

                </p>
                <p className="text-gray-600">December 2020 - June 2021</p>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-950">EPS Consultancy Services</h3>
                <h3 className="font-semibold text-slate-950">IT Support Officer and Developer Intern</h3>
                <p className="text-slate-950">Developed CRM applications using Java while providing hands-on technical support to end-users. I promptly and effectively troubleshooted software, hardware, and network issues. Additionally, I assisted in the installation, configuration, and maintenance of computer hardware, software applications, and peripheral devices to ensure optimal performance. I maintained detailed records of support activities, including problem resolutions, troubleshooting steps, and user instructions, to facilitate future reference and improve support efficiency.</p>
                <p className="text-gray-600">2015 - 2016</p>
            </div>

            <h2 className="text-xl font-semibold mt-4 mb-2 text-slate-950">Education</h2>
            <div className="mb-4">
            <p className="text-slate-950 text-xl font-bold">University of Queensland</p>
                <h3 className="text-lg font-semibold text-slate-950">Bachelor of Information Technology, Major in User Experience Design</h3>
                <p className="text-slate-950">Graduated in May 2018</p>

                
            </div>

            <div className="mb-4">
              <p className="text-slate-950 text-xl font-bold">Queensland University of Technology</p>
                <h3 className="text-lg font-semibold text-slate-950">Master of Information Technology, Major in Computer Science</h3>
                <p className="text-slate-950">July 2022 - Aug 2024</p>

                
            </div>

          </div>
        </div>
        <Skills/>
</div>
    
</div>
    </div>
    </div>
    </>
  )
}

export default Work
