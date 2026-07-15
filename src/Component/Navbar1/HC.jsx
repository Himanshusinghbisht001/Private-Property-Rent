import React from 'react'
import { useNavigate } from 'react-router-dom'


function HC() {

  const navigation = useNavigate()
  const useHandler = () => {
    alert("Thank You For Your FeedBack");
    navigation("/")
  }

  return (
    <div>
      <div className=" flex justify-center gap-10 items-center px-10 py-10">
        <div className=" flex gap-5 flex-col">
          <h2 className=' text-3xl font-medium'> FeedBack Form </h2>
          <div className=" flex flex-col gap-3 w-full ">
            <input className=' text-xl rounded-lg py-2 px-3  border border-gray-200' placeholder=' User Name' type="text" />
            <input type="password" className=' text-xl rounded-lg py-2 px-3 border border-gray-200' placeholder=' Email' required />
            <textarea name="" className=' text-xl rounded-lg py-2 px-3 border border-gray-200' placeholder='Submit Your feedback' id=""></textarea>
          </div>
          <button onClick={() => {
            useHandler()
          }} className=' cursor-pointer w-full text-white text-xl rounded-2xl bg-blue-900 font-medium py-2 '>Submit</button>
        </div>
        <div className=" w-120 h-auto">
          <img src="/public/Messages-amico.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default HC
