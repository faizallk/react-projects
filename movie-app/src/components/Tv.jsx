import { useState, useEffect } from 'react';
import axios from '../../utils/Axios';
import Loading from './Loading';
import DropDown from '../templates/DropDown'
import VerticalCards from '../templates/VerticalCards'
import { useNavigate } from 'react-router-dom';
import SearchBar from '../templates/SearchBar';
import InfiniteScroll from 'react-infinite-scroll-component';

function Tv() {
  document.title = "FK | TV Shows";
  const navigate = useNavigate();
  const [tv, setTv] = useState([]);
const [category, setCategory] = useState("airing_today");
const [page, setPage] = useState(1);
const [hasMore, setHasMore] = useState(true);
const getTv = async () => {
  try {
    const { data } = await axios.get(`/tv/${category}?page=${page}`);
    if(data.results.length > 0){
      setTimeout(()=>{
        setTv((prev)=>([...prev,...data.results]));
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
  if(tv.length === 0){
    getTv();
}else{
  setPage(1);
  setTv([]);
  getTv();
  setHasMore(true);
}
}
useEffect(() => {
  refreshHandler();
}, [category]);
  return ( tv.length > 0 ?
    <div className='w-screen h-screen bg-zinc-900'>
     <div className='bg-[#27272af6] w-full h-[13vh] fixed top-0 z-10 flex items-center justify-between  px-5'>
      <div className='flex items-center justify-start w-[20%] gap-3 '>
          <i onClick={()=> navigate(-1)} className="text-xl font-semibold  text-zinc-300 ri-arrow-left-line hover:text-[#6556cd] duration-100"></i>
          <h1 className='text-zinc-300 text-xl font-bold'>TV SHOWS
          <small className="text-xs capitalize ml-1 font-md text-zinc-500">({category})</small>
          </h1>
      </div>
      
      <div className='flex items-center gap-5 w-[70%] justify-end'>
      <SearchBar  />
      <div className='w-[20%] flex items-center gap-2'>
      <DropDown title="Category" options={["on_the_air","popular","top_rated","airing_today"]} func={(e)=>setCategory(e.target.value)}/>
     
      </div>
      </div>
     </div>
     <div className='w-full h-[87vh] bg-zinc-900 mt-[13vh]'>
      <InfiniteScroll
      dataLength={tv.length}
      next={getTv}
      hasMore={hasMore}
      loader={<Loading />}
      >
      <VerticalCards data={tv} />
      </InfiniteScroll>
     </div>
    </div>
    :<Loading />)
}

export default Tv