import React from 'react'

function LYH() {

  function eventHandler(e) {
    e.preventDefault();
  }

   const useHandler = () => {
    alert("Your House and details add in main page");
    navigation("/")
  }

  return (
    <div>
      <div className=" px-20 py-10 gap-10 flex justify-center items-center ">
        
        <form onSubmit={eventHandler} className="">
        <div className=" flex flex-col ">
          <label htmlFor="title">Title</label>
          <input id='title' className=' border w-fit px-5 py-2 rounded-2xl ' type="text" />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="descrbtion">Describtion</label>
          <textarea name="" id="descrbtion" className=' border py-1 px-2 rounded-lg w-fit  ' placeholder='Describtion'></textarea>
        </div>
        <div className=" flex flex-col">
          <label htmlFor="img1">Image 1</label>
          <input id='img1' className=' border py-1 px-2 rounded-lg w-fit  ' type="file" />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="img2">Image 2</label>
          <input id='img2' className=' border py-1 px-2 rounded-lg w-fit  ' type="file" />

        </div>
        <div className=" flex flex-col">
          <label htmlFor="img3">Image 3</label>
          <input id='img3' className=' border py-1 px-2 rounded-lg w-fit   '  type="file" />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="price">Price</label>
          <input id='price' className=' border py-1 px-2 rounded-lg w-fit  ' placeholder='Enter Price'  type="text" />
        </div>
        <div className=" flex flex-col">
          <label htmlFor="loaction">Loaction</label>
          <input id='loaction' className=' border py-1 px-2 rounded-lg w-fit  ' placeholder='Location/City'  type="text" />
        </div>
        <div className=" mt-5">
          <button onClick={() => {
              useHandler()
            }} className='px-3 py-2 items-center border rounded-3xl text-white font-medium bg-red-600'>Add Property</button>
        </div>
        </form>
        <div className=" w-100 h-auto">
          <img src="/public/Login-cuate.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default LYH
