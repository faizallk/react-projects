
import { useState,useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import VerticalCards from "../templates/VerticalCards";
import DropDown from "../templates/DropDown";
import SearchBar from "../templates/SearchBar";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/Axios"

function Movie() {
  
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [duration, setDuration] = useState("day");
  const [category, setCategory] = useState("now_playing");
 
  const getMovie = async () => {
    try {
      const { data } = await axios.get(`movie/${category}?page=${page}`);
      if(data.results.length > 0){
        setTimeout(()=>{
          setMovies((prev)=>([...prev,...data.results]));
          document.title = "FK | Movie"+ " " + category.toUpperCase();
          setPage(page+1);
        },500);
      } else{
            setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const refreshHandler = ()=>{
    if(movies.length === 0){
      getMovie();
  }else{
    setPage(1);
    setMovies([]);
    getMovie();
    setHasMore(true);
  }
  }
  useEffect(() => {
    refreshHandler();
  }, [category]);
  
  return( movies.length > 0 ?
    <div className='w-screen h-screen  bg-zinc-900 '>
       <div className='bg-[#27272af6] w-full h-[13vh] fixed top-0 z-10 flex items-center justify-between  px-5'>
      <div className='flex items-center justify-start w-[20%] gap-3 '>
          <i onClick={()=> navigate(-1)} className="text-xl font-semibold  text-zinc-300 ri-arrow-left-line hover:text-[#6556cd] duration-100"></i>
          <h1 className='text-zinc-300 text-xl font-bold'>Movies</h1>
      </div>
      
      <div className='flex items-center gap-5 w-[70%] justify-end'>
      <SearchBar  />
      <div className='w-[20%] flex items-center gap-2'>
      <DropDown title="Category" options={["now_playing","top_rated","popular","upcoming"]} func={(e)=>setCategory(e.target.value)}/>
     
      </div>
      </div>
     </div>
     <div className='w-full h-[87vh] bg-zinc-900 mt-[13vh]'>
      <InfiniteScroll
      dataLength={movies.length}
      next={getMovie}
      hasMore={hasMore}
      loader={<Loading />}
      >
      <VerticalCards data={movies} />
      </InfiniteScroll>
     </div>
    </div>
    :<Loading />)
}

export default Movie