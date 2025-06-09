import React, { useContext,useEffect,useState } from 'react';
import { useParams, useNavigate,Link} from 'react-router-dom';
import {ProductContext} from '../utils/Context'
import Loading from '../Components/Loading';
import ProductSkeleton from '../Components/ProductSkeleton';
import axios from '../utils/Axios';
import { toast } from 'react-toastify';

const ProductDetails = () => {
const navigate =  useNavigate()
 const [products,setProducts] = useContext(ProductContext)
 const {id} = useParams();
 const [product, setproduct] = useState(null);




 useEffect(()=>{
 if(!product){
      setproduct(products.filter((p)=> p.id== id)[0]);
    }
    
 },[])
//Deleting the product
 const productDeleteHandler = (id)=>{
    const filteredProducts = products.filter((p)=> p.id !== id);
    setProducts(filteredProducts)
    localStorage.setItem("products",JSON.stringify(filteredProducts));
    toast.success("Product deleted successfully!")
    navigate('/')
 }


  return product ? (
    <div className="flex justify-center items-center max-w-4xl mx-auto mt-5 mb-5 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 p-5">
      <div className="w-1/2 h-[100%]">
        <img
          src={`${product.image}`}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-1/2 p-13 flex flex-col">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            {product.title}
          </h2>
          <p className="text-gray-600 mb-2 ">
            {product.description}
          </p>
        </div>
        <div className=" font-semibold text-zinc-400 mb-5">
          {product.category}
        </div>

        <div className="text-2xl font-semibold text-green-600 mb-4">${product.price}</div>

        

        <div className="flex gap-3">
          <Link to={`/edit/${product.id}`} className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
            Edit
          </Link>
          <button onClick={()=> productDeleteHandler(product.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  ):(<ProductSkeleton />);
};

export default ProductDetails;
