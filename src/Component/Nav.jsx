import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { GiWoodCabin } from "react-icons/gi";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaTent } from "react-icons/fa6";
import { MdOutlinePool } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { MdAddHome } from "react-icons/md";

function Nav({ showMenu, setShowMenu }) {
    return (
        <div>
            {/* NavBar 1 */}
            <div className=" relative ">
                {
                    showMenu &&
                    <div className=" bg-white absolute top-18 right-12 border-none shadow-2xl py-2 px-6 flex gap-3 rounded-2xl flex-col  ">
                        <Link to="/Login" className=' text-lg font-medium active:text-gray-400'> Login </Link>
                        <Link to="/SignUp" className=' text-lg font-medium active:text-gray-400'> Sing up </Link>
                        <Link to="/LYH" className=' text-lg font-medium active:text-gray-400'> List Your Home </Link>
                        <Link to="/HC" className=' text-lg font-medium active:text-gray-400'> Feed Back </Link>
                    </div>

                }

                <div className=" px-6 py-3 flex justify-between items-center border-b border-gray-300 font-bold ">
                    <div className=" flex gap-2 items-center ">
                        <img className=' w-8 h-auto object-cove rounded-4xl ' src="https://i.pinimg.com/1200x/49/54/3b/49543bc0336e1adfc6b08bf804e334ef.jpg" alt="" />
                        <h1 className=' text-red-600 text-xl font-medium'>Privete Property Rentai</h1>
                    </div>
                    <div className=" flex gap-1 ">
                        <input type="text" placeholder=' Search Destination' className=' border px-3 py-2 rounded-3xl font-semibold ' />
                        <div className=" flex gap-2 px-3 py-2 items-center border rounded-3xl text-white font-medium bg-red-600">
                            <IoSearchOutline className=' font-medium' />
                            <button className=' cursor-pointer'> Search</button>
                        </div>
                    </div>
                    <div className=" flex gap-8 cursor-pointer items-center border border-gray-200 px-3 py-2 shadow-2xl rounded-3xl text-2xl">
                        <MdMenu onClick={() => {
                            setShowMenu(!showMenu)
                        }} />
                        <FaRegCircleUser />
                    </div>
                </div>
            </div>
            {/* NavBar 2 */}
            <div className=" mt-2 border-b border-b-gray-300 py-1">
                <div className=" flex justify-center items-center gap-8 ">
                    <div className=" flex flex-col items-center ">
                        <MdAddHome />
                        <NavLink className={({isActive}) => 
                            isActive ? " border-b text-blue-500 " : " text-black"
                        } to="/"> Add </NavLink>
                    </div>
                    <div className=" flex flex-col items-center ">
                        <FaFire />
                        <NavLink className={({isActive}) => 
                            isActive ? " border-b text-blue-500 " : " text-black"
                        } to="/Tranding">Tranding</NavLink>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaHouse />
                        <NavLink className={({isActive}) => 
                            isActive ? " border-b text-blue-500 " : " text-black"
                        } to="/House">House</NavLink>
                    </div>
                    <div className="flex flex-col items-center">
                        <GiWoodCabin />
                        <NavLink className={({isActive}) => 
                            isActive ? " border-b text-blue-500 " : " text-black"
                        } to="/Cabins">Cabins</NavLink>           
                    </div>
                    <div className="flex flex-col items-center">
                        <MdOutlineBedroomParent />
                        <NavLink className={({isActive}) => 
                            isActive ? " border-b text-blue-500 " : " text-black"
                        } to="/Rooms">Rooms</NavLink>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaTent />
                        <NavLink className={({isActive}) => 
                            isActive ? " border-b text-blue-500 " : " text-black"
                        } to="/TentHouse">TentHouse</NavLink>
                    </div>
                    <div className="flex flex-col items-center">
                        <MdOutlinePool />
                        <NavLink className={({isActive}) => 
                            isActive ? " border-b text-blue-500 " : " text-black"
                        } to="/PoolHouse">PoolHouse</NavLink>
                    </div>
                    <div className="flex flex-col items-center">
                        <PiFarm />
                       <NavLink className={({isActive}) => 
                            isActive ? " border-b text-blue-500 " : " text-black"
                        } to="/FarmHouse">FarmHouse</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
