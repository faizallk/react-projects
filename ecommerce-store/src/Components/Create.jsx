import { useState , useContext} from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../utils/Context";

function Create() {
    const [products,setProducts] = useContext(ProductContext)
    const navigate = useNavigate()
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [Price, setPrice] = useState('');
  const [Category, setCategory] = useState('');
  const [Image, setImage] = useState('');

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    if(Title.trim().length > 5 || Description.trim().length > 5 || Image.trim().length > 5 || Category.trim().length > 5 || Price > 100 ){
     const product = {
        title:Title,
        image:Image,
        description:Description,
        price:Price,
        category:Category,
    };
    setProducts([...products,product]);
   navigate("/")
    } else{
        alert('Fields must be greater than 5')
    }
   
    
  }
  return (
    <form onSubmit={onSubmitHandler} className="w-[70%] flex flex-col justify-center items-center  mx-auto mt-5 mb-5 rounded-2xl shadow-lg overflow-hidden border border-gray-200 py-20 px-15">
      <h1 className="text-4xl font-bold mb-5 text-blue-400 m-auto">
        Add New Product
      </h1>
      <input
        type="text"
        className="w-full px-5 py-3 rounded bg-zinc-100 outline-none mb-4"
        placeholder="Title "
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={Title}
      />
      <input
        type="url"
        className="w-full px-5 py-3 rounded bg-zinc-100 outline-none mb-4"
        placeholder="Image URL"
        onChange={(e) => {
          setImage(e.target.value);
        }}
        value={Image}
      />
      <div className="w-full flex justify-between">
        <input
        type="text"
        className="w-[49%] px-5 py-3 rounded bg-zinc-100 outline-none mb-4"
        placeholder="Category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={Category}
      />
        <input
          type="number"
          max={100000}
          min={100}
          className="w-[49%] px-5 py-3 rounded bg-zinc-100 outline-none mb-4"
          placeholder="Price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={Price}
        />
      </div>

      
<textarea type="text"
          className="w-full px-5 py-3 rounded bg-zinc-100 outline-none mb-4"
          placeholder="Enter product description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={Description} rows='15'></textarea>
      <button className="self-start bg-blue-400 text-white text-lg px-5 py-2 rounded font-semibold hover:bg-blue-500 duration-150">
        Add Product
      </button>
    </form>
  );
}

export default Create;
