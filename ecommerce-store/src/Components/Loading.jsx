import React from 'react';

const Loading = () => {
  const cards = new Array(8).fill(0);

  return (
    <div className="flex h-screen">
      {/* Sidebar Skeleton */}
      <div className="w-[250px] bg-gray-100 p-5">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-300 rounded mb-6 w-3/4"></div>
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid Skeleton */}
      <div className="flex-1 p-8 overflow-y-auto flex flex-wrap gap-6 animate-pulse">
        {cards.map((_, i) => (
          <div key={i} className="w-[180px] h-[260px] bg-white border border-zinc-200 rounded shadow p-3">
            <div className="h-[150px] w-full bg-gray-300 rounded mb-4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 w-[90%]"></div>
            <div className="h-4 bg-gray-300 rounded w-[70%]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
