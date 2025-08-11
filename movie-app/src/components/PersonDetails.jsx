import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { clearPersonInfo, getPersonDetails} from '../store/actions/personActions';
import Loading from './Loading';
import Card from './templates/Card';
import DropDown from './templates/DropDown';
import noImage from '../assets/blank-person.webp'
function PersonDetails() {
  const { info } = useSelector((state) => state.person);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [Category, setCategory] = useState('movie');
  function formatDateToEnglish(dateString) {
  const date = new Date(dateString);

  const day = date.getDate();
  const year = date.getFullYear();

  const month = date.toLocaleString("en-US", { month: "long" });

  const getOrdinalSuffix = (n) => {
    if (n > 3 && n < 21) return 'th';
    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  const dayWithSuffix = `${day}${getOrdinalSuffix(day)}`;

  return `${dayWithSuffix} ${month} ${year}`;
}

  useEffect(() => {
    dispatch(getPersonDetails(id));
    return () => {
      dispatch(clearPersonInfo(id));
    };
  }, [id]);
  return info ? (
    <div className='w-screen overflow-x-hidden' >
         <nav className="w-full bg-[#28272f]  z-40 sticky top-0 h-[10vh]  flex items-center justify-between  px-5">
        <div className="flex items-center gap-3">
          <i
            onClick={() => navigate(-1)}
            className="text-xl font-semibold  text-zinc-300 ri-arrow-left-line hover:text-[#6556cd] duration-100"
          ></i>
          <h1 className="text-lg font-bold text-zinc-300 line-clamp-5">
            {info.details?.title || info.details?.name}
          </h1>
        </div>
        
      </nav>
      <div className='  p-10 '>
      <div className='w-full flex  gap-10 '>
       <div className='w-[25%]'>
        <div className='w-full rounded overflow-hidden h-[60vh] shadow-md shadow-zinc-700'>
           <img src={info.details.profile_path ? `https://image.tmdb.org/t/p/original/${
              info.details.profile_path 
            }` : noImage} className='w-full h-full object-cover' alt="" />
        </div>
        <hr className='my-3 text-zinc-400' />
         <div className='flex items-center text-lg text-zinc-200 mt-2 gap-2'>
               {info.externalIds.instagram_id && (<a href={`https://www.instagram.com/${info.externalIds.instagram_id}`}><i className="ri-instagram-line"></i> </a>)}
              {info.externalIds.twitter_id && (<a href={`https://x.com/${info.externalIds.twitter_id}`}><i className="ri-twitter-x-fill"></i></a>)}
              {info.externalIds.facebook_id && (<a href={`https://www.facebook.com/${info.externalIds.facebook_id}`}><i className="ri-facebook-box-fill"></i></a>)}
                            {info.externalIds.imdb_id && (<a href={`https://www.imdb.com/name/${info.externalIds.imdb_id}`}>IMDB </a>)}
            </div>
            <div>
              <h1 className='text-lg text-zinc-200 font-semibold mb-1'>Person Info :</h1>
              <h2 className='font-semibold text-zinc-300'>Known for : <span className='text-sm font-normal text-zinc-400'>{info.details.
known_for_department}</span></h2>
  <h2 className='font-semibold text-zinc-300'>Gender : <span className='text-sm font-normal text-zinc-400'>{info.details.
gender == 2 ? "Male" : "Female"}</span></h2>

  <h2 className='font-semibold text-zinc-300'>Deathday : <span className='text-sm font-normal text-zinc-400'>{info.details.
deathday || "Still Alive"}</span></h2>
<h2 className='font-semibold text-zinc-300'>Place of birth : <span className='text-sm font-normal text-zinc-400'>{info.details.
place_of_birth || "Still Alive"}</span></h2>
            </div>
        </div>
        <div className='w-[75%] px-5'>
           <h1 className='text-5xl font-black mb-1 text-zinc-200'>{info.details.name}</h1>
            <h5 className='text-zinc-400 text-sm tracking-tight'>Born on {formatDateToEnglish(info.details.birthday)}</h5>
           
             <div className='mt-1'>
              <h1 className='text-lg font-semibold text-zinc-300'>Biography :</h1>
               <p className='mt-1 text-zinc-400'>{info.details.biography}</p>
             </div>
             
        </div>
      
      </div>
        <div className='w-full mt-3 '>
       {info.combinedCredits.cast && info.combinedCredits.crew && (  <h1 className='text-2xl font-bold mb-3'>Cast & Crew :</h1>)}
         {info.combinedCredits?.cast?.length > 0 &&
  (<div className="flex gap-3 overflow-x-scroll no-scrollbar">
    {[...info.combinedCredits.cast,...info.combinedCredits.crew]?.map((c,i)=>(
      <Card data={c} key={i} title={c.media_type} />
    ))}
  </div>)
   }
             </div>
         <div className='flex justify-between items-center mt-4'>
          <h1 className='text-xl font-bold'>Acting</h1>
         <DropDown options={["movie",'tv']} func={(e)=>setCategory(e.target.value)} title={'FILTER'} />
         </div>
         <div className='list-disc w-full  px-5 py-3  h-[30vw] min-h-[25vw] overflow-x-hidden overflow-y-auto bg-zinc-800 mt-2'>
         {info[Category+"Credits"].cast?.map((c,i)=>(
          <li key={i} className='px-5 py-3 hover:bg-zinc-900 cursor-pointer  duration-300'> 
           <Link to={`/${Category}/${c.id}`} className='font-semibold '>
            <span className='text-zinc-300'>{c.original_title || c.title || c.name || c.original_name}</span>
            <span className='block ml-5 text-sm font-normal text-zinc-400'>Character Name : {c.character}</span>
           </Link></li>
         ))}
         </div>
             </div>
    </div>
  ) : (<Loading />)
}

export default PersonDetails