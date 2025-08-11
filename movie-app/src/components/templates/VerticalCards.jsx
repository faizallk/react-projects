import React from 'react'
import { Link } from 'react-router-dom'
import noImage from '../../assets/no-image.png'

function VerticalCards({data , title}) {
  return (
    <div className='w-full flex flex-wrap gap-3 bg-[#1F1E24] justify-center mt-4'>
        {data.map((elem,index)=>(
            <Link to={`/${elem.media_type || title}/${elem.id}`}  className='w-[18%] h-[50vh] rounded-lg overflow-hidden  bg-[#1F1E24]' key={index}>
                <img className='w-full h-[85%] rounded-lg object-cover  hover:scale-105 duration-200 ease-in' src={elem.poster_path || elem.backdrop_path || elem.profile_path ? `https://image.tmdb.org/t/p/original/${elem.poster_path || elem.backdrop_path || elem.profile_path}` : noImage} alt="" />
                <div className='w-full h-[15%] flex items-center  justify-between px-2'>
                    <h1 className='text-zinc-300  text-sm font-bold hover:text-[#6556cd] duration-100 leading-4 '>{elem.name?.slice(0,25) ||elem.title.slice(0,25)  }</h1>
                    
                </div>
            </Link>
        ))}
    </div>
  )
}

export default VerticalCards