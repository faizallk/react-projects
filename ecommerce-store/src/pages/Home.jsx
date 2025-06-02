import React from 'react'
import Nav from '../Components/Nav'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Nav />
   <Link to="/details/1" className='w-[85%] h-screen bg-white flex flex-wrap overfow-x-hidden overflow-y-auto p-10 pt-[5%]'>
   <Card />   
   </Link>
    
    </>
  )
}

export default Home