import React from 'react';
import { Link } from 'react-router-dom';
import ProductImage from './ProductImage';

const EachProduct = ({product}) => {
  return (
    <Link 
    to={`/products/${product?.id}`}
    key={product?.id}>

    <div className="flex flex-col items-center p-4 
    justify-center bg-white gap-2">

    <ProductImage 
      src={product?.image}
      className='sm:w-[18rem] sm:h-[18rem] w-[10rem] h-[10rem]
      object-contain mb-2'
      alt={product?.category} />
      
    <h1 className='w-[200px] text-lg text-center'>{product?.title}</h1>
    </div>
  </Link>
  )
}

export default EachProduct