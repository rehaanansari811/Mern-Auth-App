import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {

  const navigate = useNavigate();
  const [formData, setformData] = useState({});
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      seterror(false);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setloading(false);
      if (data.success === false) {
        seterror(true);
        return;
      }
      navigate('/');
    } catch (error) {
      setloading(false);
      seterror(true);
    }

  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form className=' flex flex-col gap-4 ' onSubmit={handleSubmit}>
        <input onChange={handleChange} type="email" placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg' />
        <input onChange={handleChange} type="password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg' />
        <button className=' bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80' disabled={loading}>{loading ? 'Loading...' : 'Sign In'}</button>
        {/* <button className=' bg-red-700 p-3 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80'>google</button> */}
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Not have an account?</p>
        <Link to="/signup">
          <span className='text-blue-500'>Sign up</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
    </div>
  )
}

export default SignIn