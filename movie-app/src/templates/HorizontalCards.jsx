import React from 'react'
import Card from './Card'


function HorizontalCards({data}) {
  return (
    <div className='w-[100%] h-[60vh] overflow-y-hidden p-5'>    
       <div className='w-full h-[45vh] flex gap-4 overflow-x-auto mb-10 overflow-y-hidden'>
        {data.map((elem,index)=>(
            <Card key={index} data={elem} />
        ))}
       </div>
    </div>
  )
}

export default HorizontalCards