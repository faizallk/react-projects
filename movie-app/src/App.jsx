import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'

function App() {
  return (
    <div className='h-screen w-screen bg-[#1f1e24] text-white flex'>
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/trending' element={<Trending />}>Trending</Route>
      </Routes>
     
    </div>
  )
}

export default App