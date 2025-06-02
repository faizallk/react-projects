import React from 'react'

function Nav() {
  return (
     <nav className='h-screen w-[15%] bg-white flex flex-col items-center pt-5 bg-zinc-100'>
   <a className='border rounded border-blue-300 px-4  py-2 text-m font-semibold text-blue-400 hover:shadow duration-200 hover:text-blue-500 hover:shadow-blue-300' href="/hello">Add New Item</a>
   <hr className='w-[80%] my-2' />
   <h1 className='w-[80%] text-xl font-semibold'>Category</h1>
   <ul className='w-[80%] mt-2 '>
    <li className='text-sm flex items-center py-2 px-3 gap-3 mb-1'> <span className='h-[17px] w-[17px] bg-blue-300 rounded-full'></span>Men's Clothing</li>
     <li className='text-sm  flex items-center py-2 px-3 gap-3 mb-1'> <span className='h-[17px] w-[17px] bg-green-300 rounded-full'></span>Women's Clothing</li>
      <li className='text-sm  flex items-center py-2 px-3 gap-3 mb-1'> <span className='h-[17px] w-[17px] bg-red-300 rounded-full'></span>Jwelerey</li>
   </ul>
   </nav>
  )
}

export default Nav