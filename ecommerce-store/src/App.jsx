import React from 'react'
import Home from './pages/Home'
import Details from './pages/Details'
import {Routes,Route} from 'react-router-dom'
import Loading from './Components/Loading'
function App() {
  return (
    <div className='h-screen w-screen flex'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
    </div>
   
  )
}

export default App