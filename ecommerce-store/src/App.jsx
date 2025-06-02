import React from 'react'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className='h-screen w-screen bg-red-200 flex'>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/details/:id" element={<Details />} /> */}
    </Routes>
    </div>
  )
}

export default App