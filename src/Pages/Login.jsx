import { Input, Typography } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return ( 
    <div className="w-full mont h-screen flex max-md:flex-col items-center justify-center max-md:p-5">
        <h1 className='md:hidden leading-tight text-3.2mid abril'>
        North-South Kitchen
        </h1>
    <div className="w-1/2 h-full flex flex-col items-center justify-center gap-5 max-md:w-full max-md:p-6">
    <h1 className='text-4xl boldf text-left w-1/2 max-md:w-full'>Login
        <br />
        <span className='text-sm font-light'>
        How do i get started lorem ipsum dolor at?
        </span>
    </h1>

    <div className='flex flex-col gap-3 w-1/2 max-md:w-full'>
      <Typography.Text  className='text-base'>Name/Id</Typography.Text>
      <Input
      className='p-2 bg-gray-100'
        placeholder="Enter your name or ID provided"
      />
    </div>
    <div className='flex flex-col gap-3 w-1/2 max-md:w-full'>
      <Typography.Text  className='text-base'>Password</Typography.Text>
      <Input.Password
      className='p-2 bg-gray-100'
      
      placeholder="input password" />

    </div>
<NavLink to={""} className="text-[#FF8144] w-1/2 max-md:w-full text-right">
Forgot password
</NavLink>
<button className='px-8 p-2 bg-[#FF8144]  text-white text-lg rounded-md w-1/2 max-md:w-full'>
        Login
    </button>
    </div>
    <div className="w-1/2 h-full flex items-center justify-center p-4 max-md:hidden">
    <img src="/loginImage.png" className='h-full w-full rounded-md' alt="" />
    </div>
    </div>
  )
}

export default Login