import React from 'react'
import Card from './Card';
import { useSelector } from 'react-redux';
import { AiOutlineStar } from 'react-icons/ai';
import LikeFunctionality from '../components/LikeFunctionality';
import CartFunctionality from './CartFunctionality';

const ProductContent = () => {
    const { selectedProduct } = useSelector((state)=> state.selectedProduct);

  return (
    <Card className='flex-1 rounded-3xl box-border flex flex-col items-start'>

      <h1 className='text-black lg:text-4xl text-xl xs:text-3xl'>{selectedProduct?.title}</h1>

      <h2 className='my-6 text-black font-semibold text-4xl'>${selectedProduct?.price}</h2>
      
      <div className='text-black text-lg flex items-center gap-1'>
          <AiOutlineStar 
            width={20} 
            height={20} /> {selectedProduct?.rating?.rate} stars
      </div>
      
      <div className='flex gap-6 items-center w-full'>
        <LikeFunctionality />
        <CartFunctionality />
      </div>
      
      <div className='p-2 pl-0 mt-4 mb-2 pb-10 max-w-[90%] h-[200px] bg-transparent overflow-y-scroll 
      hide-scrollbar text-black'>
        <p className='font-semibold'>{selectedProduct?.description}</p>
      </div>
    </Card>
  )
}

export default ProductContent