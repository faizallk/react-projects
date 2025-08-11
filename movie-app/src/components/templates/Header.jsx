import React from "react";
import { Link } from "react-router-dom";

function Header({ data, title}) {

  return (
    <Link to={`/${data.media_type || title}/${data.id}`}
      className="bg-red-200 w-[95%] mx-auto p-[3%] mt-3 h-[60vh] flex flex-col justify-end items-start overflow-hidden "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.5)",
        // backgroundAttachment: "fixed", // removed to allow image to scroll with content
      }}
    >
      <h1 className="text-white w-[60%] font-black text-5xl ">
        {data.title || data.name}
      </h1>
      <p className="w-[60%] mt-3 text-zinc-200">
        {data.overview.slice(0, 200)}...{" "}
        <Link className="text-blue-400">more</Link>
      </p>
      <div className="flex items-center gap-2 mt-3 text-zinc-200">
        <p className="flex items-center gap-2">
          <i className="text-amber-500 ri-calendar-schedule-fill"></i>{" "}
          {data.release_date || data.first_air_date || "No information"}{" "}
        </p>
        <p className="flex items-center gap-2">
          {" "}
          <i className="text-amber-500 ri-album-fill"></i>{" "}
          {data.media_type.toUpperCase() || "No information"}
        </p>
        <p className="flex items-center gap-2">
          <i className="text-amber-500 ri-star-fill"></i>{" "}
          {data.vote_average || "No information"}
        </p>
      </div>

     
    </Link>
  );
}

export default Header;
