import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Loading from './Loading'
import { clearTvInfo, getTvDetails } from '../store/actions/tvActions';
import Card from './templates/Card';
import  ReactPlayer  from 'react-player';
import noImage from '../assets/blank-person.webp'
function TvShowDetails() {
  document.title = "FK | Movie Details";
  const [showTrailer,SetShowTrailer] = useState(false);
  const { info } = useSelector((state) => state.tv);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
 
  //Fetching the TvShow details
  useEffect(() => {
    dispatch(getTvDetails(id));
    return () => {
      dispatch(clearTvInfo(id));
    };
  }, [id]);

  return info ? (
     <div className="w-screen h-screen overflow-x-hidden" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${
              info.details.backdrop_path || info.details.poster_path
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0,0,0,0.5)",
            // backgroundAttachment: "fixed", // removed to allow image to scroll with content
          }}>
            <div className='backdrop-blur-md mb-5'>
      {/* Part-1 Navigation */}
      <nav className="w-full z-40 sticky top-0 h-[10vh] backdrop-blur-lg flex items-center justify-between px-5">
        <div className="flex items-center gap-3">
          <i
            onClick={() => navigate(-1)}
            className="text-xl font-semibold  text-zinc-300 ri-arrow-left-line hover:text-[#6556cd] duration-100"
          ></i>
          <h1 className="text-lg font-bold text-zinc-300 line-clamp-5">
            {info.details?.title || info.details?.name}
          </h1>
        </div>
        <div className="flex items-center gap-5 text-lg">
          <a
            href={`https://www.themoviedb.org/movie/${info.externalIds?.id}`}
            target="_blank"
            rel="noopener noreferrer"
          title="TMDB" >
            <i className="ri-external-link-fill hover:text-[#6556cd] duration-100"></i>
          </a>
          <a
            href={`https://en.wikipedia.org/wiki/${info.externalIds?.wikidata_id}`}
         title="Wikipedia"  >
            <i className="ri-earth-fill hover:text-[#6556cd] duration-100"></i>
          </a>
          <a
            className="hover:text-[#6556cd] duration-100"
            href={`https://www.imdb.com/title/${info.externalIds?.imdb_id}`}
            target="_blank"
            rel="noopener noreferrer"
         >
            imdb
          </a>
        </div>
      </nav>
      {/* Part-2 Content */}
      <div className="w-full h-full px-10 py-2 backdrop-blur-md">
       { !showTrailer ? ( <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${
              info.details.backdrop_path || info.details.poster_path
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0,0,0,0.5)",
            // backgroundAttachment: "fixed", // removed to allow image to scroll with content
          }}
          className="w-full h-[25vw]  rounded relative"
        >
          <h1 className=" absolute bottom-5 left-5 font-black text-zinc-300 text-5xl">
            {info.details?.title || info.details?.name}
          </h1>
        </div>) : (
           <div className="w-full h-[25vw]  rounded relative overflow-hidden">
          <ReactPlayer
            
            src={`https://www.youtube.com/watch?v=${info.videos.key}`}
            title="Trailer"
           playing
            controls={false}
            width="100%"
            height="100%"
            style={{ position: 'absolute'}}
           className=" rounded absolute top-0 left-0"
            
             config={{
    youtube: {
      playerVars: {
        modestbranding: 1,    // Hide YouTube logo
        showinfo: 0,          // Hide video title (deprecated but still helps)
        rel: 0,               // Disable related videos at the end
        controls: 0,          // Hide controls
        disablekb: 1,         // Disable keyboard controls
        iv_load_policy: 3,    // Hide video annotations
        fs: 0,                // Disable fullscreen button
      },
    },
  }}
          />
           <h1 className=" absolute bottom-5 left-5 font-black text-zinc-300 text-5xl">
            {info.details?.title || info.details?.name}
          </h1>

          {/* Close Button */}
          <button
            onClick={() => SetShowTrailer(false)}
            className="absolute top-3 right-3 px-3 py-1 bg-black/70 text-white cursor-pointer rounded z-20"
          >
            ✕
          </button>
        </div>
        )}
        <div >
          <h1 className="text-zinc-400 text-md mt-2">
            <span className=" text-lg text-zinc-300 font-medium">Genres :</span>{" "}
            {info.details.genres.map((e) => e.name).join(", ")} |{" "}
            { info.details.first_air_date }
          </h1>
           {info.watchProviders && (
           <div className='flex items-center gap-2'>
          <h1 className="text-lg text-zinc-300 font-medium mt-1">
            Available On :
          </h1>
          
            {info.watchProviders.flatrate.map((p,i)=>(
              <h1 className='text-zinc-400 text-md mt-1' key={i}>{p.provider_name}</h1>
            )
          )}
         </div>
      )}
          {info.details.runtime && <h1 className="text-zinc-400 text-md mt-1">
            <span className=" text-lg text-zinc-300 font-medium">Duration :</span>{" "}
            {info.details.runtime} min
          </h1>}
           <h1 className="flex gap-2 items-center text-zinc-400 mt-1 "><span className="text-zinc-300 text-md font-medium text-lg">Ratings :</span> {Math.floor(info.details.vote_average)}/10 <i className="text-[#FE9A00] ri-star-fill"></i></h1>
           <h1 className="text-lg font-medium text-zinc-300 mt-1">Overview :</h1>
          <p className="w-[70%] text-zinc-400">{info.details.overview}</p>
          <div className="w-full h-10 ">
            <div className="flex gap-3 items-center mt-5">
              <button onClick={()=> SetShowTrailer(true)}  className="px-4 py-2 bg-[#6556cd] rounded hover:bg-[#5042ac] duration-150">
               <i className="text-lg ri-play-fill"></i> Watch Trailer
              </button>
              {/* <button className="px-4 py-2 bg-zinc-700 rounded hover:bg-zinc-800 duration-150">
                Add to Watchlist
              </button> */}
            </div>
          </div>
        </div>
        <hr className="h-[1px] text-zinc-500 w-full my-5" />
       
        <h1 className="text-2xl font-bold  my-3">Casts & Crews :</h1>
 <div className="w-full overflow-x-scroll no-scrollbar">
  
  <div className="flex gap-4 backdrop-blur-md "> {/* flex added here */}
    {info.credits.cast.map((c, i) => (
      <Link to={`/person/${c.id}`}
        key={i}
        className="w-[12%] max-w-[19%] overflow-hidden rounded-lg h-[18vw] flex-shrink-0 bg-[#1f1e2488]"
      >
        <img
          src={c.profile_path ? `https://image.tmdb.org/t/p/original/${c.profile_path}` : noImage}
          className="w-full rounded-t-lg h-[80%] object-cover hover:scale-105 duration-150"
          alt={c.name}
        />
        <h1 className="my-2 text-center text-medium  font-normal cursor-pointer hover:text-zinc-300 duration-100">{c.name.slice(0,15)}</h1>
      </Link>

    ))}
  </div>

</div>

  {/* <h1 className="font-bold text-3xl my-3">Similar Movies :</h1>
  <div className=" flex gap-3 overflow-x-scroll no-scrollbar">
    {info.similar.map((s,i)=>(
      <Card data={s} title={'movie'} />
    ))}
  </div> */}
 {info.recommendations.length > 0 && ( <h1 className="font-bold text-2xl mt-3 mb-4">Recommendations & Similar TV Shows :</h1>
 ) }
 {info.recommendations.length > 0 &&
  (<div className="flex gap-3 overflow-x-scroll no-scrollbar">
    {info.recommendations.map((s,i)=>(
      <Card data={s} key={i} title={'tv'} />
    ))}
  </div>)
   }
   </div>
    </div>
    </div>
  ): (<Loading />);
}

export default TvShowDetails