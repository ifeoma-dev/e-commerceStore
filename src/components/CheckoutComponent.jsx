import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import CheckoutButton from './CheckoutButton';
import CheckoutSubtotal from './CheckoutSubtotal';

const CheckoutComponent = () => {
    const { checkoutProducts } = useSelector((state)=> state?.allCartProducts);
    const [totalPrice, setTotalPrice] = useState(0);

    const costOfItems = ()=> {
        let itemsTotalCost = 0;
        checkoutProducts?.map((product)=> {
          itemsTotalCost += product?.price * product?.quantity;
        })
        return itemsTotalCost;
        // to 2 dp =>  ( Math.round(itemsTotalCost).toFixed(2)  )
    }

   useEffect(()=> {
    setTotalPrice(costOfItems());
   })
    
  return (
    <div className='bg-white w-full lg:p-10 sm:p-8 p-4 flex flex-col items-start gap-4'>
      <h1 className='font-bold lg:text-3xl sm:text-2xl text-lg'>Order Now</h1>

      <CheckoutSubtotal 
        className={'font-bold lg:text-2xl sm:text-lg text-base'}
        text='Subtotal:'
        totalPrice={totalPrice}/>

      <div>
        {checkoutProducts?.map((product, i)=> (
          <p className='mb-2' key={product?.id}>{i+1}. {product?.title}</p>
        ))}
      </div>

      <CheckoutButton
      to='/checkout'
      text='Checkout' />
      
  </div>
  )
}

export default CheckoutComponent