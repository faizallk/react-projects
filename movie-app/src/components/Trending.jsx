import { useState, useEffect } from 'react';
import axios from '../../utils/Axios';
import TopNav from '../templates/TopNav'
import DropDown from '../templates/DropDown'
import VerticalCards from '../templates/VerticalCards'
import { useNavigate } from 'react-router-dom';
const Trending = () => {
    const navigate = useNavigate();
    const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTrending();
  }, [category,duration]);
  return (
  <div className='w-screen h-screen overflow-x-hidden overflow-y-auto'>
     <div className='bg-[#27272af6] w-full h-[13vh] sticky top-0 z-10 flex items-center justify-between px-5'>
    <div className='flex items-center justify-center w-[10%] gap-3 '>
        <i onClick={()=> navigate(-1)} className="text-xl font-semibold  text-zinc-300 ri-arrow-left-line hover:text-[#6556cd] duration-100"></i>
        <h1 className='text-zinc-300 text-xl font-bold'>Trending<i  className="text-red-500 ri-fire-fill"></i></h1>
    </div>
    <TopNav  />
    <div className='flex items-center gap-2 w-[25%]'>
   
    <DropDown title="Category" options={["all","tv","movie"]} func={(e)=>setCategory(e.target.value)}/>
    <DropDown title="Duration" options={["day","week"]} func={(e)=>setDuration(e.target.value)}/>
    </div>
   </div>
   <div className='w-full h-[87vh]'>
    <VerticalCards data={trending} />
   </div>
  </div>
  )
}

export default Trending