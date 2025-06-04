import React, { useContext, useEffect,useState } from "react";
import Nav from "../Components/Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "../Components/Loading";
import axios from "../utils/Axios";
function Home() {
  const [products] = useContext(ProductContext);
  let {search} = useLocation();
 const category = decodeURIComponent(search.split("=")[1])
const [filteredProduct, setfilteredProduct] = useState(null);

 const getProductCategory = async ()=>{
  try {
    const {data} = await axios.get(`/products/category/${category}`);
   setfilteredProduct(data)
  } catch (error) {
    console.log(error)
  }
 }
 useEffect(()=>{
  if(!filteredProduct) setfilteredProduct(products);
  if(category != 'undefined') getProductCategory()
 },[category,products])
  return products ? (
    <>
      <Nav />

      <div className="ml-15 w-[85%] h-screen bg-white flex flex-wrap overfow-x-hidden overflow-y-auto p-10 pt-[5%]">
        {filteredProduct && filteredProduct.map((p, i) => (
          <Link
            key={i}
            to={`/details/${p.id}`}
            className="mr-7 shadow border rounded border-zinc-300 mb-5  w-50 h-55 text-ellipsis overflow-hidden bg-white py-5 px-2 text-center hover:shadow-zinc-400 duration-200"
          >
            <div
              className="h-[80%] w-full bg-contain bg-no-repeat bg-center mb-1 hover:scale-115 hover:ease-out duration-200 "
              style={{
                backgroundImage: `url(${p.image})`,
              }}
            ></div>
            <h1 className="hover:text-blue-300 hover:cursor-pointer duration-100">
              {p.title}
            </h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
