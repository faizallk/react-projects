import React from 'react'
import Card from './Card'

function Cards() {
    const cardsDetails = [
        {
            title: "Porfolio",
            detail: "Project & Case Studies",
            startProject:false,
            button:false,
            para:true,
            width:"30%",
           
        },
         {
            title: "get in touch",
            detail: "Let's get to it. together",
            startProject:true,
            button:false,
            para:false,
            width: "70%",
        }
    ]
  return (
    <div className='max-w-screen-lg mx-auto h-[60%]  mt-15 flex gap-2 '>
       {cardsDetails.map((card,index)=>(
        <Card card={card}  key={index} />
       ))}

    </div>
  )
}

export default Cards