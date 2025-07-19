import { Link } from "react-router-dom"

function SideNav() {
  return (
   <div className='max-w-[20%] h-full  border-r-[1px] border-zinc-500 text-zinc-400 py-5 px-8'>
    <h1 className='text-zinc-200 text-xl  '>
        <i  className="text-[#6556cd] text-2xl mr-2 ri-tv-fill"></i>
        <span className='font-bold uppercase'>FK-Movies</span>
    </h1>
    <nav className="mt-5 flex flex-col w-full">
        <h1 className="text-lg mb-2 font-bold text-zinc-300">New Feeds</h1>
    <Link to="/trending" className="px-4 py-3 rounded hover:bg-[#6556cd] duration-300 hover:text-white"><i className="mr-1 ri-fire-fill"></i>Trending</Link>
    <Link to="/popular" className="px-4 py-3 rounded hover:bg-[#6556cd] duration-300 hover:text-white"><i className="mr-2 ri-bard-fill"></i>Popular</Link>
    <Link to="/movie" className="px-4 py-3 rounded hover:bg-[#6556cd] duration-300 hover:text-white"><i className="mr-2 ri-movie-2-fill"></i>Movies</Link>
    <Link to="/tv" className="px-4 py-3 rounded hover:bg-[#6556cd] duration-300 hover:text-white"><i className="mr-2 ri-tv-2-fill"></i>Tv Shows</Link>
    <Link to="/people" className="px-4 py-3 rounded hover:bg-[#6556cd] duration-300 hover:text-white"><i className="mr-2 ri-team-fill"></i>People</Link>
    </nav>
    <hr className="mt-4 " />
       <nav className="mt-5 flex flex-col w-full">
        <h1 className="text-lg mb-2 font-bold text-zinc-300">Website Information</h1>
    <Link className="px-4 py-3 rounded hover:bg-[#6556cd] duration-300 hover:text-white"><i className="mr-2 ri-information-fill"></i>About</Link>
    <Link className="px-4 py-3 rounded hover:bg-[#6556cd] duration-300 hover:text-white"><i className="mr-2 ri-phone-fill"></i>Contact Us</Link>
   
    </nav>
   </div>
  )
}

export default SideNav