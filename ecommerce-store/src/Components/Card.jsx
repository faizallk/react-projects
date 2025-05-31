import React from 'react'

function Card() {
  return (
   <>
    <div className='mr-5 shadow border rounded border-zinc-300 mb-5 card w-40 h-45 bg-white p-3'>
      <div className='h-[80%] w-full bg-contain bg-no-repeat bg-center mb-1 hover:scale-115 hover:ease-out duration-200 ' style={{
        backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"
      }}></div>
      <h1 className='hover:text-blue-300 hover:cursor-pointer duration-100 '>Lorem ipsum dolor</h1>
    </div></>
  )
}

export default Card