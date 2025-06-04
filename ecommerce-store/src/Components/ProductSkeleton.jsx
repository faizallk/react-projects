import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className="flex w-[70%] h-[90%] items-center p-10 m-auto gap-5 animate-pulse border rounded-md border-zinc-100 shadow shadow-zinc-300">
      {/* Image Placeholder */}
      <div className="w-[400px] h-[450px] bg-gray-300 rounded-xl"></div>

      {/* Text + Buttons */}
      <div className="flex flex-col gap-15 flex-1 ">
        <div className='w-[80%]'>
          <div className="h-6 bg-gray-300 rounded w-3/4  mb-4"></div>
           
          <div className="h-4 bg-gray-300 rounded w-full mb-3"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-3"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-3"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mb-3"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mb-3"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mb-6"></div>
          <div className="h-6 bg-green-300 rounded w-24 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-32 mb-6"></div>
        </div>

        {/* Button placeholders */}
        <div className="flex gap-4">
          <div className="w-20 h-10 bg-yellow-300 rounded"></div>
          <div className="w-20 h-10 bg-red-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
