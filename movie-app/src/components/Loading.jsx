import React from 'react'
import loading from '../assets/loading.gif'
function Loading() {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <img className='w-[5%]' src={loading} alt="" />
    </div>
  )
}

export default Loading