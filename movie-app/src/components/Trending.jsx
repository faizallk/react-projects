import { useState, useEffect } from 'react';
import axios from '../../utils/Axios';
import Loading from './Loading';
import DropDown from '../templates/DropDown'
import VerticalCards from '../templates/VerticalCards'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../templates/SearchBar';
import InfiniteScroll from 'react-infinite-scroll-component';
const Trending = () => {
    document.title = "FK | Trending";
    const navigate = useNavigate();
    const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      if(data.results.length > 0){
        setTimeout(()=>{
          setTrending((prev)=>([...prev,...data.results]));
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
    if(trending.length === 0){
      getTrending();
  }else{
    setPage(1);
    setTrending([]);
   
  }
}
  useEffect(() => {
    refreshHandler();
  }, [category,duration]);


  return ( trending.length > 0 ?
  <div className='w-screen h-screen bg-zinc-900'>
     <div className='bg-[#27272af6] w-full h-[13vh] sticky top-0 z-10 flex items-center  px-5'>
    <div className='flex items-center justify-start w-[20%] gap-3 '>
        <i onClick={()=> navigate(-1)} className="text-xl font-semibold  text-zinc-300 ri-arrow-left-line hover:text-[#6556cd] duration-100"></i>
        <h1 className='text-zinc-300 text-xl font-bold'>Trending <i  className="text-red-500 ri-fire-fill"></i></h1>
    </div>
    
    <div className='flex items-center gap-5 w-[80%] justify-end'>
    <SearchBar  />
    <div className='w-[40%] flex items-center gap-2'>
    <DropDown title="Category" options={["all","tv","movie"]} func={(e)=>setCategory(e.target.value)}/>
    <DropDown title="Duration" options={["day","week"]} func={(e)=>setDuration(e.target.value)}/>
    </div>
    </div>
   </div>
   <div className='w-full h-[87vh] bg-zinc-900'>
    <InfiniteScroll
    dataLength={trending.length}
    next={getTrending}
    hasMore={hasMore}
    loader={<Loading />}
    >
    <VerticalCards data={trending} />
    </InfiniteScroll>
   </div>
  </div>
  :<Loading />)
}

export default Trending