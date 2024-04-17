import React from 'react'
import Navbar from './Navbar'
import Skills from "./Skills"

const Work = () => {
  return (
    <>
    <Navbar/>
    <Skills/>
    <div className="w-full h-screen bg-[#0a192f]">
    <div className=' text-gray-300'>
    <div className="bg-slate-200 bg-opacity-30 rounded-lg shadow-lg shadow-[#040c16] max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full hover:scale-105 duration-500">
    <div className='pb-8'>
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-600">Resume</p>

            <h2 className="text-2xl font-semibold mb-2 py-4">Summary</h2>
            <p>Experienced web developer with a passion for creating responsive and user-friendly
                websites. Proficient in HTML, CSS, JavaScript, and various web development frameworks.</p>

                <h2 className="text-2xl font-semibold mt-4 mb-2">Experience</h2>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Web Developer, ABC Company</h3>
                <p className="text-gray-700">Developed and maintained company website, implementing responsive design and
                    optimizing performance. Collaborated with the design team to create visually appealing web pages.
                </p>
                <p className="text-gray-600">January 2020 - Present</p>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">Frontend Developer, XYZ Agency</h3>
                <p className="text-gray-700">Worked on various client projects, translating design mockups into interactive
                    web pages. Utilized modern web technologies to ensure cross-browser compatibility.</p>
                <p className="text-gray-600">June 2018 - December 2019</p>
            </div>

            <h2 className="text-xl font-semibold mt-4 mb-2">Education</h2>
            <div className="mb-4">
                <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-700">University of Example</p>
                <p className="text-gray-600">Graduated in May 2018</p>
            </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Work
