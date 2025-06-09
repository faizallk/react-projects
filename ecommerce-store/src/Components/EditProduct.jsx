import React, { useContext, useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductContext } from '../utils/Context';
import NotFound from '../pages/NotFound';
import { toast } from 'react-toastify';

function EditProduct() {
const {id} = useParams();
const navigate = useNavigate();
const [products,setProducts] = useContext(ProductContext);
const [Product, setProduct] = useState({
    title:"",
    description:"",
    image:"",
    price:"",
    category:""
});

const onChangeHandler = (e)=>{
    setProduct({...Product,[e.target.name]: e.target.value});
}


 const onSubmitHandler = (e)=>{
    e.preventDefault();
    if(Product.title.trim().length > 5 || Product.description.trim().length > 5 || Product.image.trim().length > 5 || Product.category.trim().length > 5 || Product.price > 100 ){
     
    const pi = products.findIndex((p)=> p.id == id);
    const copyData = [...products];
    copyData[pi] = {...products[pi],...Product};
    setProducts(copyData);
    localStorage.setItem("products",JSON.stringify(copyData))
  toast.success("Product edited successfully")
   navigate(-1)
    } else{
        alert('Evevry fields must have 5 characters')
    }  
    
  }
const getProduct = ()=>{
   const filteredProduct = products.filter((p)=> p.id == id)[0];
   setProduct(filteredProduct);
}
useEffect(()=>{
    getProduct();
},[id])

  return Product ? (
    <form onSubmit={onSubmitHandler} className="w-[70%] flex flex-col justify-center items-center  mx-auto mt-5 mb-5 rounded-2xl shadow-lg overflow-hidden border border-gray-200 py-20 px-15">
      <h1 className=" text-start text-3xl font-semibold mb-5 text-black m-auto">
        Update The Product
      </h1>
      <input
        type="text"
        className="w-full px-5 py-3 rounded bg-zinc-100 outline-none mb-4"
        placeholder="Title "
        onChange={onChangeHandler}
        name='title'
      value={Product.title}
      />
      <input
        type="url"
        className="w-full px-5 py-3 rounded bg-zinc-100 outline-none mb-4"
        placeholder="Image URL"
 onChange={onChangeHandler}
        name='image'
      value={Product.image}
      />
      <div className="w-full flex justify-between">
        <input
        type="text"
        className="w-[49%] px-5 py-3 rounded bg-zinc-100 outline-none mb-4"
        placeholder="Category"
        onChange={onChangeHandler}
        name='category'
      value={Product.category}
      
      />
        <input
          type="number"
          className="w-[49%] px-5 py-3 rounded bg-zinc-100 outline-none mb-4"
          placeholder="Price"
 onChange={onChangeHandler}
        name='price'
      value={Product.price}
        />
      </div>

      
<textarea type="text"
          className="w-full px-5 py-3 rounded bg-zinc-100 outline-none mb-4"
          placeholder="Product description"
          onChange={onChangeHandler}
        name='description'
      value={Product.description}
          rows='15'></textarea>
      <button className="self-start bg-blue-400 text-white text-lg px-5 py-2 rounded font-semibold hover:bg-blue-500 duration-150">
        Save Changes
      </button>
    </form>

  ):(<NotFound />)
}

export default EditProduct