import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white font-["Sutoshi Variable"]'>
      <Navbar />
      <Work />
      <Stripes />
    </div>
  )
}

export default App