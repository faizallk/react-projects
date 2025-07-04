import React from 'react'
import SideNav from '../templates/SideNav'

const Home = () => {
  document.title = "FK | Homepage"
  return (
    <>
    <SideNav />
    <div className='w-[85%] h-full '></div>
    </>

  )
}

export default Home