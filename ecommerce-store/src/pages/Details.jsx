import React from 'react';

const Details = () => {
  return (
    <div className="flex justify-center items-center max-w-4xl mx-auto mt-5 mb-5 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 p-5">
      <div className="w-1/2 h-[100%]">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-1/2 p-13 flex flex-col">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h2>
          <p className="text-gray-600 mb-4">
            Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
          </p>
        </div>

        <div className="text-2xl font-semibold text-green-600 mb-4">$109.95</div>

        <div className=" font-semibold text-zinc-400 mb-5">
          Category: Men's Clothing
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
