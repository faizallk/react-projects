import React, { useState, useEffect } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import axios from "../../utils/Axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Loading from "./Loading";
import DropDown from "./templates/DropDown";
const Home = () => {
  document.title = "FK | Homepage";
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all");
  const [popular, setPopular] = useState([]);
  const [PopCategory, setPopCategory] = useState("tv");
  const getWallpaper = async () => {
    try {
      const data = await axios.get("/trending/all/day");
      const randomData =
        data.data.results[Math.floor(Math.random() * data.data.results.length)];
      setWallpaper(randomData);
    
    } catch (error) {
      console.log(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const getPopular = async () => {
    try {
      const { data } = await axios.get(`/${PopCategory}/popular`);
      if(data.results.length > 0){
          setPopular(data.results); 
      } else{
            setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    !wallpaper && getWallpaper();
    getTrending();
    getPopular();
  }, [wallpaper,category,PopCategory]);
  return (
    wallpaper && trending.length > 0 ? (
      <>
        <SideNav />
        <div className="w-[80%] h-full overflow-x-hidden  ">
          <TopNav />
          <Header data={wallpaper} title={category} />
          <div className="flex items-center justify-between p-5">
         <h1 className='text-white text-2xl font-bold'>Trending <i className="text-red-500 ri-fire-fill"></i></h1>
         <DropDown title="Filter" options={["all","tv","movie"]} func={(e)=>setCategory(e.target.value)}/>
         </div>
          <HorizontalCards data={trending} title={category} />

        </div>
      </>
    ) : (
      <Loading />
    )
  );
};

export default Home;
