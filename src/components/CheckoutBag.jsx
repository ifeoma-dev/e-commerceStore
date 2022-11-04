import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutBag = ({products}) => {
  return (
    <>
    {products?.map((product)=> (
      // single product container
      <div className='sm:w-[180px] xs.5:w-[150px] xs:w-[100px] w-[100px] h-[100%] flex flex-col justify-between'>
          {/* just img only wrapper */}
          <div className='w-full h-[70%] relative'>
              <img 
              alt={products?.title}
                src={product?.image} 
                className='w-full h-full object-contain' />
              <div 
              className='w-full h-[30px] bg-white/70 
              absolute left-0 bottom-0 flex items-center justify-center'>
                  <p>x{product?.quantity}</p>
              </div>
          </div>

          <Link className='w-full' to={`/products/${product?.id}`}>
            <p className='w-full truncate'>{product?.title}</p>
          </Link>
          <p className='font-bold'>${product?.price * product?.quantity}</p>
      </div>
    ))}
    </>
  )
}

export default CheckoutBag