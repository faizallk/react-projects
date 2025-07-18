import React from 'react'
import { useState, useEffect } from 'react';
import axios from '../../utils/Axios';
import { Link } from 'react-router-dom';
function SearchBar() {
    const [query, setquery] = useState('');
    const [searches, setsearches] = useState(null);
    const getSearches = async () => {
      try {
        if (query.trim().length > 0 ) {
          const { data } = await axios.get(`/search/multi?query=${query}`);
          setsearches(data.results);
        }
      } catch (err) {
        console.log("Error :", err);
      }
    };
    useEffect(() => {
      getSearches();
    }, [query]);
  
  return (
    <div className='relative w-[50%]'>
    <div className=" bg-zinc-900  flex justify-start items-center px-5 rounded-[60px]">
    <i className="text-lg ri-search-line"></i>
    <input
      onChange={(e) => setquery(e.target.value)}
      value={query}
      className="text-lg  text-zinc-200 rounded-4xl border-none outline-none px-3 py-2 w-full"
      type="text"
      placeholder="Search anything..."
    />
    {query.length > 0 && (
      <i
        onClick={() => setquery("")}
        className="text-lg ri-close-large-line"
      ></i>
    )}
  </div>
  <div className="w-[90%] max-h-[60vh] text-zinc-100 absolute top-[110%]  left-3 bg-zinc-900 overflow-auto">
    {searches?.length > 0 &&
      searches.map((elem, index) => (
        <Link
          key={index}
          className=" p-2 border-b-[2px] border-zinc-600 w-full bg-zinc-700   flex justify-start items-center  gap-3 hover:bg-zinc-600 duration-200 overflow-x-hidden"
        >
          <img
            src={
              elem.poster_path
                ? `https://image.tmdb.org/t/p/w500/${
                    elem.poster_path || elem.backdrop_path
                  }`
                : "/no-image.png"
            }
            className="object-cover w-20 h-20 rounded"
            alt=""
          />
          <span className="font-semibold ">{elem.name || elem.title}</span>
        </Link>
      ))}
  </div>
  </div>
  )
}

export default SearchBar