import React from 'react'

function App() {
  return (
    <div className='h-screen w-screen bg-red-200 flex'>
   <nav className='h-screen w-[15%] bg-white flex flex-col items-center pt-5 bg-zinc-100'>
   <a className='border rounded border-blue-200 px-4  py-2 text-m font-semibold text-blue-300' href="/hello">Add New Item</a>
   <hr className='w-[80%] my-2' />
   <h1 className='w-[80%] text-xl font-semibold'>Category</h1>
   <ul className='w-[80%] mt-2 '>
    <li className='text-sm flex items-center py-2 px-3 gap-3 mb-1'> <span className='h-[17px] w-[17px] bg-blue-300 rounded-full'></span>Item1</li>
     <li className='text-sm  flex items-center py-2 px-3 gap-3 mb-1'> <span className='h-[17px] w-[17px] bg-green-300 rounded-full'></span>Item1</li>
      <li className='text-sm  flex items-center py-2 px-3 gap-3 mb-1'> <span className='h-[17px] w-[17px] bg-red-300 rounded-full'></span>Item1</li>
   </ul>
   </nav>
   <div className='w-[85%] h-screen bg-blue-200 flex flex-wrap overfow-x-hidden overflow-y-auto p-10 pt-[5%]'>
    <div className='mr-5 shadow border rounded border-zinc-300 mb-5 card w-40 h-45 bg-white p-3'>
      <div className='h-[80%] w-full bg-contain bg-no-repeat bg-center mb-1 hover:scale-115 hover:ease-out duration-200 ' style={{
        backgroundImage:"url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)"
      }}></div>
      <h1 className='hover:text-blue-300 hover:cursor-pointer duration-100 '>Lorem ipsum dolor</h1>
    </div>
    
     
   </div>
    </div>
  )
}

export default App