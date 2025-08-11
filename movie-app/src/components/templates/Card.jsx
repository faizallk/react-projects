import React from "react";
import { Link } from "react-router-dom";
import noImage from '../../assets/no-image.png'
function Card({ data, title }) {
  return (
  <Link to={`/${data.media_type || title}/${data.id}`} className="min-w-[15%] h-[48vh] max-h-[50vh]  flex flex-col bg-zinc-900 cursor-pointer rounded overflow-hidden">
     <div className="w-full h-[85%]">
      <img className="w-full rounded-t-lg h-full object-cover hover:scale-105 duration-150" src={data.poster_path || data.backdrop_path || data.profile_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path || data.backdrop_path || data.profile_path
                        
                      }`: noImage} alt="" />
     </div>
     <div className="w-full h-[15%] p-2">
      <h1 className="text-white text-medium text-center tracking-normal leading-tight font-semibold hover:text-[#6556cd] duration-200 ">{data.name &&  data.name.slice(0,15)  || data.title && data.title.slice(0,15)   || data.original_name && data.original_name.slice(0,15) }</h1>
     
     </div>
  </Link>
  );
}

export default Card;
