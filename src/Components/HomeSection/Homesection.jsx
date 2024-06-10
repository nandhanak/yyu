import React from 'react'

function Homesection({product}) {
  return (
    <div className='cursor-pointer flex flex-col item-center bg-white rouded-lg shadow-lg overflow-hiddenw-[15rem]mx-3 border '>
     <div className='h-[12rem] w-[10rem]'>
        <img 
        className='object-cover object-top w-full h-full'
        src={product.imageUrl}
        />
     </div>
     <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
        <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
     </div>
    </div>
  )
}

export default Homesection