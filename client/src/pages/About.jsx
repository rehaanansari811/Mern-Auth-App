import React from 'react'
import { Link } from 'react-router-dom'
import { GoPlus } from 'react-icons/go'
const About = () => {
  return (
    <div className='bg-[#1C1C1C] p-8 h- min-h-screen'>
      <div className=' bg-white h-[100%] rounded-2xl overflow-hidden flex justify-center flex-col items-center p-6 pt-0'>
        <h1 className='italic font-semibold text-[5.5vw]'>Best blogs for you</h1>
        <div className="imgbox flex flex-wrap justify-evenly pt-3 gap-2">
          <img className='w-[30vw] h-[21vw] rounded-xl hover:opacity-90 cursor-pointer' src="https://images.unsplash.com/photo-1440778303588-435521a205bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
          <img className='w-[30vw] h-[21vw] rounded-xl hover:opacity-90 cursor-pointer' src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRyYXZlbCUyMGJsb2d8ZW58MHx8MHx8fDA%3D" alt="img" />
          <img className='w-[30vw] h-[21vw] rounded-xl hover:opacity-90 cursor-pointer' src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
          <img className='w-[30vw] h-[21vw] rounded-xl hover:opacity-90 cursor-pointer' src="https://images.unsplash.com/photo-1440778303588-435521a205bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
          <img className='w-[30vw] h-[21vw] rounded-xl hover:opacity-90 cursor-pointer' src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHRyYXZlbCUyMGJsb2d8ZW58MHx8MHx8fDA%3D" alt="img" />
          <img className='w-[30vw] h-[21vw] rounded-xl hover:opacity-90 cursor-pointer' src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRyYXZlbCUyMGJsb2d8ZW58MHx8MHx8fDA%3D" alt="img" />
        </div>
      </div>
    </div>
  )
}

export default About