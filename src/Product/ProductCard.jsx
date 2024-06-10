import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard=({prodct}) =>{
   // if (!prodct || !prodct.imageUrl) {
   //     return <div>No product data available</div>;
   //   }
   const navigation=useNavigate();

  return (
    <div onClick={()=>navigation(`/product/${5}`)}
   className='productcard w-[15rem] m-3 transition-all cursor-pointer'style={{marginTop:"28px"}}>
     <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top'style={{height:"290px"}} 
        src={prodct.imageUrl} alt="" />
     </div>
     <div className='textPart bf-white p-3'style={{marginTop:"-20px"}}>
        <div>
            <p className='font-bold opacity-60'>{prodct.brand}</p>
            <p >{prodct.title}</p>
        </div>
        <div className='flex items-center space-x-2'>
            <p className='font-semibold'>{prodct.discountPrice}</p>
            <p className='line-through opacity-50'>{prodct.price}</p>
            <p className='text-green-600 font-semibold'>{prodct. discountpersent}% off</p>
        </div>
     </div>
    </div>
  )
}

export default ProductCard