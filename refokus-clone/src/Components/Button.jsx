import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
function Button() {
  return (
    <div className=' flex gap-4 items-center bg-zinc-100 px-4 py-2 rounded-full text-xs  text-black'>
    Start a Project
    <BsArrowReturnRight />
    </div>
  )
}

export default Button