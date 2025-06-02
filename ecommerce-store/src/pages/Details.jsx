import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {ProductContext} from '../utils/Context'

const Details = () => {
 const {id} = useParams();
 const [products] = useContext(ProductContext);
 const {title,image,description,price,category} = products[id-1];

  return (
    <div className="flex justify-center items-center max-w-4xl mx-auto mt-5 mb-5 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 p-5">
      <div className="w-1/2 h-[100%]">
        <img
          src={`${image}`}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-1/2 p-13 flex flex-col">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            {title}
          </h2>
          <p className="text-gray-600 mb-4">
            {description}
          </p>
        </div>

        <div className="text-2xl font-semibold text-green-600 mb-4">${price}</div>

        <div className=" font-semibold text-zinc-400 mb-5">
          {category}
        </div>

        <div className="flex gap-3">
          <button className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
            Edit
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
