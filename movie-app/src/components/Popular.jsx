import { useState,useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import VerticalCards from "./templates/VerticalCards";
import DropDown from "./templates/DropDown";
import SearchBar from "./templates/SearchBar";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/Axios"

function Popular() {
  document.title = "FK | Popular";
  const navigate = useNavigate();
  const [popular, setPopular] = useState([]);
const [category, setCategory] = useState("movie");
const [page, setPage] = useState(1);
const [hasMore, setHasMore] = useState(true);
const getPopular = async () => {
  try {
    const { data } = await axios.get(`/${category}/popular?page=${page}`);
    if(data.results.length > 0){
      setTimeout(()=>{
        setPopular((prev)=>([...prev,...data.results]));
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
  if(popular.length === 0){
    getPopular();
}else{
  setPage(1);
  setPopular([]);
  getPopular();
  setHasMore(true);
}
}
useEffect(() => {
  refreshHandler();
}, [category]);
  return ( popular.length > 0 ?
    <div className='w-screen h-screen bg-zinc-900'>
       <div className='bg-[#27272af6] w-full h-[13vh] fixed top-0 z-10 flex items-center justify-between  px-5'>
      <div className='flex items-center justify-start w-[20%] gap-3 '>
          <i onClick={()=> navigate(-1)} className="text-xl font-semibold  text-zinc-300 ri-arrow-left-line hover:text-[#6556cd] duration-100"></i>
          <h1 className='text-zinc-300 text-xl font-bold'>Popular 
          <small className="text-xs ml-1 font-md text-zinc-500 capitalize">({category})</small>
          </h1>
      </div>
      
      <div className='flex items-center gap-5 w-[70%] justify-end'>
      <SearchBar  />
      <div className='w-[20%] flex items-center gap-2'>
      <DropDown title="Category" options={["tv","movie"]} func={(e)=>setCategory(e.target.value)}/>
     
      </div>
      </div>
     </div>
     <div className='w-full h-[87vh] bg-[#1F1E24] mt-[13vh]'>
      <InfiniteScroll
      dataLength={popular.length}
      next={getPopular}
      hasMore={hasMore}
      loader={<Loading />}
      >
      <VerticalCards data={popular} title={category} />
      </InfiniteScroll>
     </div>
    </div>
    :<Loading />)
}

export default Popular