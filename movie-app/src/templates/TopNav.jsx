import axios from "../../utils/Axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const TopNav = () => {
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
    <div className="w-full h-[10vh] text-zinc-400 flex justify-start items-center relative ml-[15vh]">
      <div className="w-1/2 bg-zinc-900 mt-1 flex justify-start items-center px-5 rounded-[60px]">
        <i className="text-xl ri-search-line"></i>
        <input
          onChange={(e) => setquery(e.target.value)}
          value={query}
          className="text-lg  text-zinc-200 rounded-4xl border-none outline-none p-3 w-full"
          type="text"
          placeholder="Search anything..."
        />
        {query.length > 0 && (
          <i
            onClick={() => setquery("")}
            className="text-xl ri-close-large-line"
          ></i>
        )}
      </div>
      <div className="w-[50%] max-h-[60vh] text-zinc-100 absolute top-[100%]  bg-zinc-900 overflow-auto">
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
  );
};

export default TopNav;
