import React from 'react'
import { Link } from 'react-router-dom'
import noImage from '../assets/no-image.png'

function VerticalCards({data}) {
  return (
    <div className='w-full h-full flex flex-wrap gap-3  bg-zinc-900 justify-center p-5'>
        {data.map((elem,index)=>(
            <Link  className='w-[19%] h-[50vh] rounded bg-zinc-800 overflow-hidden  shadow-md hover:shadow-zinc-800 duration-200' key={index}>
                <img className='w-full h-[80%]  object-cover ' src={elem.poster_path || elem.backdrop_path || elem.profile_path ? `https://image.tmdb.org/t/p/original/${elem.poster_path || elem.backdrop_path || elem.profile_path}` : noImage} alt="" />
                <div className='w-full h-[20%] flex items-center justify-between px-2'>
                    <h1 className='text-zinc-300 text-sm font-bold hover:text-[#6556cd] duration-100 leading-4 '>{elem.name||elem.title  }</h1>
                    <i className='text-zinc-300 text-sm font-bold ri-play-fill hover:text-[#6556cd] duration-100'></i>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default VerticalCards