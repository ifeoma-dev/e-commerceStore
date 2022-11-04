import React from 'react';
import CheckoutHeaderTxt from './CheckoutHeaderTxt';
import CheckoutSubtotal from './CheckoutSubtotal';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
    const { checkoutProducts } = useSelector((state)=> state?.allCartProducts);
    const [totalPrice, setTotalPrice] = useState(0);
    const shippingFee = 0.00;
    const shippingGuarantee = 0.00;

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
    <div className='w-full flex flex-col gap-4 border-black 
    border-solid border-b-[1px] pb-2'>
        <CheckoutHeaderTxt 
          text='Order Summary' />

          <div className='flex flex-col gap-2 w-full'>
            <CheckoutSubtotal
              totalPrice={totalPrice}
              text='Subtotal:' />

            <CheckoutSubtotal
              totalPrice={shippingFee}
              text='Shipping Fee:' />

            <CheckoutSubtotal
              totalPrice={shippingGuarantee}
              text='Shipping Guarantee:' />
          </div>

          <CheckoutSubtotal 
            text='Grand Total:'
            className='font-bold text-2xl'
            totalPrice={totalPrice + shippingFee + shippingGuarantee}  />
          
          <div className='flex justify-end gap-2'>
            <p className='text-sm'>Reward <span className='text-red-700'>0</span></p>
            <p className='p-[4px] pt-0 text-sm border-black border-dotted border-b-[1px]'>
                SHOP Points
            </p>
          </div>
    </div>
  )
}

export default OrderSummary