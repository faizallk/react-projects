import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
function Button({title="Get Started"}) {
  return (
    <div className='w-fit flex gap-4 items-center bg-zinc-100 px-4 py-2 rounded-full text-xs  text-black'>
    {title}
    <BsArrowReturnRight />
    </div>
  )
}

export default Button