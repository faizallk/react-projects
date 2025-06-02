import React, { useContext } from 'react'
import Nav from '../Components/Nav'
import { Link } from 'react-router-dom'
import { ProductContext } from '../utils/Context';
import Loading from '../Components/Loading';
function Home() {
   const [products] = useContext(ProductContext);
  return products? (
    <>
    <Nav />
   
    <div  className='w-[85%] h-screen bg-white flex flex-wrap overfow-x-hidden overflow-y-auto p-10 pt-[5%]'>
     {products.map((p,i)=>(
        <Link key={i} to={`/details/${p.id}`} className='m-auto shadow border rounded border-zinc-300 mb-5 card w-50 h-55 text-ellipsis overflow-hidden bg-white py-5 px-2 text-center hover:shadow-zinc-400 duration-200'>
      <div className='h-[80%] w-full bg-contain bg-no-repeat bg-center mb-1 hover:scale-115 hover:ease-out duration-200 ' style={{
        backgroundImage:`url(${p.image})`
      }}></div>
      <h1 className='hover:text-blue-300 hover:cursor-pointer duration-100'>{p.title}</h1>
  
   </Link>
     ))}
     </div>
    </>
  ):(<Loading />)
}

export default Home