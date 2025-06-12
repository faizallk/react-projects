import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-xl mx-auto bg-zinc-800 flex  items-center px-10 py-5 mt-20'>
        <div className=''>
            <h1 className='text-[14vw] font-bold tracking-tight leading-none'>refokus.</h1>
            <ul className='flex gap-10 items-center self-start w-1/2 ml-10 mt-3 text-zinc-500'>
                <li className='mr-5'>Social:</li>
                <li><a className='hover:underline duration-100' href="#">Instagram</a></li>
                <li><a className='hover:underline duration-100' href="#">Tweeter</a></li>
                <li><a className='hover:underline duration-100' href="#">Linkedin</a></li>
            </ul>
        </div>
        <div className='flex items-center justify-around gap-4 text-zinc-500'>
            <ul className='flex flex-col gap-5'>
                  <li className='mb-3'>Social:</li>
                <li><a className='hover:underline duration-100' href="#">Instagram</a></li>
                <li><a className='hover:underline duration-100' href="#">Tweeter</a></li>
                <li><a className='hover:underline duration-100' href="#">Linkedin</a></li>
            </ul>
            <ul className='flex flex-col gap-3'>
                  <li className='mb-3'>Sitemao :</li>
                <li><a className='hover:underline duration-100' href="#">Home</a></li>
                <li><a className='hover:underline duration-100' href="#">Work</a></li>
                <li><a className='hover:underline duration-100' href="#">Careers</a></li>
                <li><a className='hover:underline duration-100' href="#">Contact</a></li>

            </ul>
            <div className='w-1/3'>
                <p className='text-sm text-zinc-500'>Refokus is pioneering digital agency driven by design and empowered by technology.</p>
                <img className='w-30 mt-3' src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer