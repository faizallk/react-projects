import axios from "../../utils/Axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const TopNav = () => {
        const [query, setquery] = useState('');
        const [searches, setsearches] = useState(null);
    const getSearches = async ()=>{
        try{
            const data = await axios.get(`/?s=${query}`);
          setsearches(data)
          console.log(searches)
        }catch(err){
            console.log("Error :",err)
        }
    }
useEffect(()=>{
    getSearches();
},[query])
  return (
  <div className='w-full h-[10vh] text-zinc-400 flex justify-start items-center relative ml-[15vh]'>
    <i class="text-2xl ri-search-line"></i>
    <input onChange={(e)=>setquery(e.target.value)} value={query} className='text-lg  text-zinc-200 rounded-4xl border-none outline-none p-5 w-[50%]' type="text" placeholder='Search anything' />
   {query.length > 0 &&  <i onClick={()=> setquery('')} class="text-2xl ri-close-large-line"></i>}
   <div className="w-[55%] max-h-[60vh] bg-zinc-200 text-zinc-600 absolute top-[100%] overflow-auto">
    {/* { searches.length > 0 &&
        searches.map((elem,index)=>(
            <Link key={index} className=" inline-block p-7 border-b-[2px] border-zinc-100 w-full bg-zinc-200  hover:text-black hover:bg-zinc-300 duration-200">
    <img src="" alt="" />
    <span className="font-semibold">Hello</span>
    </Link>
        ))
    } */}
    

   </div>
  </div>
  )
}

export default TopNav