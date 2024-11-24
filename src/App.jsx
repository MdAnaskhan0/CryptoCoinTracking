/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Coin from './Pages/Coin/Coin';

function App() {

  return (
    <>
      <div className='min-h-[100vh] text-black bg-[#f1f1f1]'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coin/:coinId' element={<Coin />} />
        </Routes>

      </div>
    </>
  )
}

export default App
