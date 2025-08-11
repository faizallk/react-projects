import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import Tv from './components/Tv'
import People from './components/People'
import About from './components/About'
import Contact from './components/Contact'
import MovieDetails from './components/MovieDetails'
import TvShowDetails from './components/TvShowDetails'
import PersonDetails from './components/PersonDetails'


function App() {
  
  return (
    <div className='h-screen w-screen bg-[#1f1e24] text-white flex'>
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/trending' element={<Trending />}>Trending</Route>
        <Route path='/popular' element={<Popular />}>Popular</Route>
        <Route path='/movie' element={<Movie />}>Movie</Route>
        <Route path='/movie/:id' element={<MovieDetails />}>Movie Details</Route>
        <Route path='/tv' element={<Tv />}>Tv</Route>
        <Route path='/tv/:id' element={<TvShowDetails />}>Tv Show Details</Route>
     <Route path='/person' element={<People />}>People</Route>
        <Route path='/person/:id' element={<PersonDetails />}>Person Details</Route>
        <Route path='/about' element={<About />}>About</Route>
        <Route path='/contact' element={<Contact />}>Contact</Route>
      </Routes>
     
    </div>
  )
}

export default App