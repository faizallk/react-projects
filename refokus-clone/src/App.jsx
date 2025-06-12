import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Marquees from './Components/Marquees'
function App() {
  return (
    <div className='w-screen h-screen bg-zinc-900 text-white font-["Sutoshi Variable"] overflow-x-hidden'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
    </div>
  )
}

export default App