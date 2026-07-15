import React from 'react'
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigation = useNavigate()

  const useHandler = () => {
    alert("Login Succesfully");
    navigation("/")
  }

  return (
    <div>
      <div className=" px-10 py-10 flex gap-10 justify-between items-center ">
        <div className=" flex flex-col gap-5 " >
          <div className=" flex flex-col gap-2">
            <h1 className=' text-6xl font-bold text-blue-500'>Welcome...</h1>
            <p className=' text-2xl flex items-center justify-center'>Here you see and add properties and This very safe website to rent and buy houses</p>
          </div>
          <div className=" flex gap-3 flex-col justify-center items-center">
            <div className=" flex flex-col">
              <label  className='pl-2 text-lg ' htmlFor="email">Email</label>
              <input id='email' className=' border w-130 px-5 py-2 rounded-2xl ' type="text" />
            </div>
            <div className=" flex flex-col">
              <label className='pl-2 text-lg ' htmlFor="password">Password</label>
              <input id='password' className=' border w-130 px-5 py-2 rounded-2xl ' type="password" />
            </div>
            <span className=' pl-100 text-blue-600 cursor-pointer'>Forgot Password ?</span>
            <button onClick={() => {
              useHandler()
            }} className=' border w-100 py-2 text-2xl rounded-2xl bg-black font-bold text-white cursor-pointer'>Login</button>
          </div>
          <div className=" flex justify-center items-center text-xl">
            <p>------------------ or contiue white -------------------</p>
          </div>
          <div className=" flex items-center justify-center text-4xl gap-4">
            <AiFillGoogleCircle />
            <FaApple />
            <FaFacebook />
          </div>
        </div>
        <div className=" w-140 h-auto">
          <img src="/public/Login-cuate.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login
