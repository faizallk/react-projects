import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-lg mx-auto flex bg-zinc-900 items-center justify-between border-b-[1px] border-zinc-700 '>
     
       
        <div className=' text-sm flex gap-7 items-center justify-center p-2'>
           <img className='w-28'  src="../src/assets/refokus-logo.png" /> 
          {['Home','Work','Culture','','News'].map((elem,index)=>
            (elem.length === 0 ? <span className='h-5 w-[1px] bg-zinc-600'></span> :<a className='flex items-center gap-1 text-sm ' href="#">{index == 1 && <span style={{boxShadow: "0 0 0.25em #00FF19"}} className='inline-block w-1 h-1 bg-green-500 rounded-full '></span> }{elem}</a>)
          )}
        </div>
     <Button />
    </div>
  )
}

export default Navbar