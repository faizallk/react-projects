import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";

function Nav() {
  const [products] = useContext(ProductContext);

  let distinctCategory = products && products.reduce((acc,cv)=>[...acc,cv.category],[]);
  distinctCategory = [...new Set(distinctCategory)]

const color = ()=>{
return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.5)`
}
  return (
    <nav className="h-screen w-[15%] bg-white flex flex-col items-center pt-5 bg-zinc-100">
      <a
        className="border rounded border-blue-300 px-4  py-2 text-m font-semibold text-blue-400 hover:shadow duration-200 hover:text-blue-500 hover:shadow-blue-300"
        href="/hello"
      >
        Add New Item
      </a>
      <hr className="w-[80%] my-2" />
      <h1 className="w-[80%] text-xl font-semibold">Category</h1>
      <div className="w-[90%] mt-2 ">
        {distinctCategory.map((c,i)=>(
          <Link to={`/?category=${c}`} key={i} className="text-sm flex items-center  font-semibold py-2 px-3 gap-2 mb-1">
         
          <span style={{backgroundColor: color()}} className="h-[15px] w-[15px] bg-blue-300 rounded-full"></span>
         {c}
        </Link>
        ))}
        
       
      </div>
    </nav>
  );
}

export default Nav;
