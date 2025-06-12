import React from 'react'
import Button from './Button'
function Product({elem}) {
   
  return (
    <div className='w-full py-15 px-20 flex items-center justify-between'>
        <h1 className='text-7xl'>{elem.title}</h1>
        <div className='w-1/3'>
            <p className='mb-5'>{elem.details}</p>
            <div className='flex items-center gap-4'>
                {elem.live && <Button title="Live Project" />}
                {elem.case && <Button title="Case Study" />}
            </div>
        </div>
    </div>
  )
}

export default Product