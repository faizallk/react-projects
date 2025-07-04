import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
function App() {
  return (
    <div className='h-screen w-screen bg-[#1f1e24] text-white flex'>
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
      </Routes>
    </div>
  )
}

export default App