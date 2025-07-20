import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate =  useNavigate()
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-zinc-300">
        <i onClick={()=> navigate(-1)} className="text-2xl font-semibold absolute top-5 left-6  text-zinc-300 ri-arrow-left-line hover:text-[#6556cd] duration-100"></i>
      <h1 className="text-4xl font-bold mb-6 text-center text-[#6556cd]">About FK-MOVIES</h1>

      <p className="text-lg  mb-4">
        <span className="font-semibold">FK-MOVIES</span> is your ultimate movie companion app, designed to help you discover, track, and explore movies from around the globe.
        Whether you're a casual viewer or a hardcore film buff, MovieMania makes finding and enjoying your next favorite movie effortless.
      </p>

      <p className="text-lg mb-4">
        Powered by real-time movie databases like <span className="font-medium text-[#6556cd]">TMDB</span>, our platform provides up-to-date information including trailers, cast details, ratings, genres, and reviews — all in one seamless experience.
      </p>

      <p className="text-lg mb-4">
        Keep track of what you’ve watched, build your watchlist, and get personalized recommendations based on your preferences.
        We aim to make movie discovery engaging and fun for everyone.
      </p>

      <p className="text-lg mt-8 font-semibold italic text-center">
        🎬 Dive in, explore stories, and let the magic of cinema inspire you!
      </p>
    </div>
  );
};

export default About;
