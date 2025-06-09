import React from 'react';
import { Link } from 'react-router-dom'; // or `next/link` if you're using Next.js
import { ShoppingCart } from 'lucide-react'; // Optional: icon

const NotFound = () => {
  return (
    <div className="m-auto flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <ShoppingCart size={60} className="text-red-500 mb-6" />
      <h1 className="text-5xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600 mt-2">Oops! The page you’re looking for doesn’t exist.</p>
      <p className="text-gray-500 mt-1">It might have been removed or the link is broken.</p>
      <Link
        to="/"
        className="mt-6 inline-block bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-6 py-2 rounded-full transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
