import React from 'react'
import loading from '../assets/loading.gif'
function Loading() {
  return (
    <div className='w-full h-full flex items-center bg-[#1F1E24] justify-center'>
        <img className='w-[5%]' src={loading} alt="" />
    </div>
  )
}

export default Loading