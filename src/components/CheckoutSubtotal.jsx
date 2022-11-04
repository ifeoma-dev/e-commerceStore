import React from 'react';

const CheckoutSubtotal = (props) => {
    
  return (
    <div className='w-full flex items-center justify-between'>
        <p className='text-base font-normal'>{props?.text}</p> 
        <p className={`${props?.className}`}>${props?.totalPrice}</p>
    </div>
  )
}

export default CheckoutSubtotal