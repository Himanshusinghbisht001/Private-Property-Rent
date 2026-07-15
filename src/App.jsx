import React, { useState } from 'react'
import Nav from './Component/Nav'
import Home from './Component/Navbar1/Home'
import Login from './Component/Navbar1/Login'
import SignUp from './Component/Navbar1/SignUp'
import HC from './Component/Navbar1/HC'
import LYH from './Component/Navbar1/LYH'
import Tranding from './Component/Navbar2/Tranding'
import Cabins from './Component/Navbar2/Cabins'
import FarmHouse from './Component/Navbar2/FarmHouse'
import House from './Component/Navbar2/House'
import PoolHouse from './Component/Navbar2/PoolHouse'
import Rooms from './Component/Navbar2/Rooms'
import TentHouse from './Component/Navbar2/TentHouse'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from './Component/Card'

function App() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <div className=" min-h-screen w-full bg-white">
        <BrowserRouter >

          <Nav
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />


          <Routes>
            {/* <Route path='/' element={<Nav
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
            } /> */}
            <Route path='/Login' element={<Login />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/LYH' element={<LYH />} />
            <Route path='/HC' element={<HC />} />
          </Routes>



          <Routes>
            <Route path='/' element={<Card />} />
            <Route path='/Tranding' element={<Tranding />} />
            <Route path='/Cabins' element={<Cabins />} />
            <Route path='/FarmHouse' element={<FarmHouse />} />
            <Route path='/House' element={<House />} />
            <Route path='/PoolHouse' element={<PoolHouse />} />
            <Route path='/TentHouse' element={<TentHouse />} />
            <Route path='/Rooms' element={<Rooms />} />
          </Routes>

          {/* <Card /> */}
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
