import React from 'react'

function Marquee({imagesUrl}) {
    
  return (
    <div className='flex items-center whitespace-nowrap gap-10 mt-10 px'>
    {imagesUrl.map((elem,index)=>(
        <img src={elem} key={index} className='w-28 flex-shrink-0' alt="" />
    ))}
     {imagesUrl.map((elem,index)=>(
        <img src={elem} key={index} className='w-28 flex-shrink-0' alt="" />
    ))}

    </div>
  )
}

export default Marquee

