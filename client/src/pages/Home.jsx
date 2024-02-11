import React from 'react'
import { Link } from 'react-router-dom'
import { GoPlus } from "react-icons/go";
const Home = () => {

  return (
    <div className='bg-[#1C1C1C] p-8 h- min-h-screen'>
      <div className=' bg-white h-[100%] rounded-2xl overflow-hidden flex'>
        <div className="leftBox w-[75%] p-6 ">
          <div className="heading flex items-end  h-[20%]">
            <h1 className='italic font-semibold text-[5.5vw]'>Best of the week</h1>
            <Link to='/'><p className='mb-6'>See all posts{"—>"}</p></Link>
          </div>
          <div className='rounded-2xl overflow-hidden h-[80%] bg-center bg-no-repeat bg-[url("https://images.unsplash.com/photo-1496046744122-2328018d60b6?q=80&w=1787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
            <img src="https://images.unsplash.com/photo-1496046744122-2328018d60b6?q=80&w=1787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
          </div>

        </div>
        <div className="rightBox w-[35%] p-6 flex flex-col items-center justify-between">
          <div className="imgBox1 rounded-2xl w-[100%] bg-[#B6D2D6] h-[46.5%] p-5 flex flex-col gap-4 justify-between">
            <div className="icon flex justify-end pr-10 mt-3 cursor-pointer"><GoPlus className='bg-white rounded-full text-4xl ' /></div>
            <h4 className='text-xl'>BecomeA <br />BROADCASTER MEMBER</h4>
            <h2 className='text-2xl font-semibold'>Real talk in a <br />corporate world</h2>
            <Link><p className='underline text-right'>Learn More</p></Link>
          </div>
          <div className="imgBox2 rounded-2xl w-[100%] bg-[url('https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D')]
          h-[50%] bg-no-repeat object-cover p-5 
          ">
            <div className="icon flex justify-end pr-10 mt-3 cursor-pointer "><p className='text-black border-[1px] border-black rounded-full h-10 w-10 flex items-center justify-center'>24</p></div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Home