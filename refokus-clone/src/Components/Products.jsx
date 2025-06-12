import React from 'react'
import Product from './Product'
function Products() {
    const data = [
        {title:"Arqitel",url:"https://refocus-clone-aman.vercel.app/assets/arqitel-D3jJRwFT.mp4",details:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",case:false,live:true},
        {title:"TTR ",url:"https://refocus-clone-aman.vercel.app/assets/ttr-CUQdDHBj.mp4",details:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",case:false,live:true},
        {title:"YIR 2022",url:"https://refocus-clone-aman.vercel.app/assets/yir-BzJiRbqx.mp4",details:"Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",case:true,live:true},
        {title:"Yahoo!",url:"https://refocus-clone-aman.vercel.app/assets/yahoo-D7WzLbum.mp4",details:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",case:true,live:true},
        {title:"Rainfall",url:"https://refocus-clone-aman.vercel.app/assets/rainfall-BZC7HG1T.mp4",details:"We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",case:true,live:true},

    ] 
  return (
    <div className='w-full bg-zinc-900'>
       {data.map((elem,index)=>(
         <Product elem={elem} key={index} />
       ))}
    </div>
  )
}

export default Products