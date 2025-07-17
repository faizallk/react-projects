import React from 'react'
import Card from './Card'


function HorizontalCards({data}) {
  return (
    <div className='w-[100%] p-5 overflow-y-hidden overflow-x-scroll no-scrollbar'>
       <div className='w-full  flex gap-4 '>
        {data.map((elem,index)=>(
            <Card key={index} data={elem} />
        ))}
       </div>
    </div>
  )
}

export default HorizontalCards