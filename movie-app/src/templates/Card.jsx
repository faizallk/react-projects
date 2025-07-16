import React from "react";
import { Link } from "react-router-dom";
function Card({ data }) {
  return (
  <div className="min-w-[18%] h-full  flex flex-col bg-zinc-900 hover:scale-105 duration-300 ">
  <div className="w-full h-[55%]">
    <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w500/${
                        data.poster_path || data.backdrop_path
                      }`} alt="" />
  </div>
 <div className='w-full h-[45%]  p-2'>
<h1 className="text-white text-lg tracking-normal leading-tight font-bold">{data.name || data.title}</h1>
<p className="text-zinc-300 text-sm">{data.overview.slice(0, 50)}... <Link className="text-zinc-400">more</Link></p>
 </div>
  </div>
  );
}

export default Card;
