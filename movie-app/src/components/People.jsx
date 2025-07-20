
import { useState,useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import VerticalCards from "./templates/VerticalCards";
import SearchBar from "./templates/SearchBar";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/Axios"


function People() {
  document.title = "FK | People";
  const navigate = useNavigate();
  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [category, setCategory] = useState("popular");
 
  const getPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);
      if(data.results.length > 0){
        setTimeout(()=>{
          setPerson((prev)=>([...prev,...data.results]));
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
    if(person.length === 0){
      getPerson();
  }else{
    setPage(1);
    setPerson([]);
    getPerson();
    setHasMore(true);
  }
  }
  useEffect(() => {
    refreshHandler();
  }, [category]);
  
  return( person.length > 0 ?
    <div className='w-screen h-screen  bg-zinc-900 '>
       <div className='bg-[#27272af6] w-full h-[13vh] fixed top-0 z-10 flex items-center justify-between  px-5'>
      <div className='flex items-center justify-start w-[20%] gap-3 '>
          <i onClick={()=> navigate(-1)} className="text-xl font-semibold  text-zinc-300 ri-arrow-left-line hover:text-[#6556cd] duration-100"></i>
          <h1 className='text-zinc-300 text-xl font-bold'>People</h1>
      </div>
      
      <div className='flex items-center gap-5 w-[70%] justify-end'>
      <SearchBar  />
      </div>
     </div>
     <div className='w-full h-[87vh] bg-zinc-900 mt-[13vh]'>
      <InfiniteScroll
      dataLength={person.length}
      next={getPerson}
      hasMore={hasMore}
      loader={<Loading />}
      >
      <VerticalCards data={person} />
      </InfiniteScroll>
     </div>
    </div>
    :<Loading />)
}

export default People