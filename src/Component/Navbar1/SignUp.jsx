import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {

  const  navigation = useNavigate()

  const useHandler = () => {
    alert("Sing Up Succesfully");
    navigation("/")
  }

  return (
    <div>
      <div className=" flex justify-center gap-10 items-center px-10 py-10">
        <div className=" flex gap-5 flex-col">
          <h2 className=' text-3xl font-medium'>Singup Form </h2>
          <div className=" flex flex-col gap-3 w-full ">
            <input className=' text-xl rounded-lg py-2 px-3  border border-gray-200' placeholder=' Email Address' type="text" />
            <input type="password" className=' text-xl rounded-lg py-2 px-3 border border-gray-200' placeholder=' Password' required />
            <input type="password" className=' text-xl rounded-lg py-2 px-3 border border-gray-200' placeholder=' Conform Passward' />
          </div>
          <button onClick={() => {
              useHandler()
            }} className=' cursor-pointer w-full text-white text-xl rounded-2xl bg-blue-900 font-medium py-2 '>Singup</button>
        </div>
        <div className=" w-120 h-auto">
          <img src="/public/sign.png" alt="" />
        </div>
      </div>

    </div>
  )
}

export default SignUp
