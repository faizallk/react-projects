import React from 'react'
import Card from './Card'


function HorizontalCards({data, title}) {
  return (
    <div className='w-full mx-5  overflow-y-hidden overflow-x-scroll no-scrollbar'>
       <div className='w-full  flex gap-4 '>
        {data.map((elem,index)=>(
            <Card key={index} data={elem} title={title} />
        ))}
       </div>
    </div>
  )
}

export default HorizontalCards