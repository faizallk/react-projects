import React from 'react'
import Home from './pages/Home'
import Details from './pages/ProductDetails'
import {Routes,Route,useLocation,Link} from 'react-router-dom'
import Loading from './Components/Loading'
import ProductSkeleton from './Components/ProductSkeleton'
import NotFound from './pages/NotFound'
import Create from './Components/Create'
import EditProduct from './Components/EditProduct'

function App() {
  const {search,pathname} = useLocation();
  return (
    <div className='h-screen w-screen flex'>
      {(pathname != '/' || search.length > 0) && (<Link to="/" className="absolute left-[17%] top-[5%] font-semibold text-red-400">Home</Link>) }
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path='/create' element={<Create />}></Route>
      <Route path='/edit/:id' element={<EditProduct />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
    
    </div>
   
  )
}

export default App