import React from 'react';

const CheckoutTracker = () => {
    const currentPage = window.location.href
    console.log(currentPage);
    const isCart = currentPage === 'http://localhost:3000/user/cart';
    const isCheckout = currentPage === 'http://localhost:3000/checkout';
  return (
    <div 
      className='w-full my-6 flex items-center justify-center gap-6'>
      <p className={`text-2xl ${isCart ? 'font-bold' : 'font-normal' }`}>Shopping Bag</p>
      <span className={`text-2xl ${isCart ? 'font-bold' : 'font-normal' }`}>{'>'}</span>

      <p className={`text-2xl ${isCheckout ? 'font-bold' : 'font-normal' }`}>Place Order</p>
      <span className={`text-2xl ${isCheckout ? 'font-bold' : 'font-normal' }`}>{'>'}</span>

      <p className='text-2xl'>Pay</p>
      <span>{'>'}</span>
      
      <p className='text-2xl'>Order Complete</p>
    </div>
  )
}

export default CheckoutTracker