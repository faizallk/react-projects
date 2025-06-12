import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white font-["Sutoshi Variable"]'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
    </div>
  )
}

export default App