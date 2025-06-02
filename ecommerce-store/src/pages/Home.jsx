import React from 'react'
import Nav from '../Components/Nav'
import Card from '../Components/Card'

function Home() {
  return (
    <>
    <Nav />
   <div className='w-[85%] h-screen bg-blue-200 flex flex-wrap overfow-x-hidden overflow-y-auto p-10 pt-[5%]'>
   <Card />   
   </div>
    
    </>
  )
}

export default Home