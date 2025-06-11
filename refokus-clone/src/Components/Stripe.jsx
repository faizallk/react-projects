import React from 'react'

function Stripe({elem}) {
  return (
    <div className='w-[16.66%] py-5 px-5 flex items-center justify-between border-y-2 border-r-2 h-full border-zinc-700'>
        <img className='w-[50%]' src={elem.url} alt="" />
        <h2 className='font-semibold'>{elem.number}</h2>
    </div>
  )
}

export default Stripe