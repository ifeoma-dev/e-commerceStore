import React from 'react';
import CheckoutHeaderTxt from './CheckoutHeaderTxt';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import CheckoutItems from './CheckoutItems';

const ItemsToBuy = () => {
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
   }, [costOfItems])

  return (
    <div className='w-full border-[1px] border-black
    border-solid flex flex-col gap-6'>
        <CheckoutHeaderTxt 
          text='My Bag'
          className='pl-4'/>

        <CheckoutItems />

        <p className='p-2 border-black border-solid border-t-[1px]'>
            Total: <span className='font-bold'>US${totalPrice}</span>
        </p>
    </div>
  )
}

export default ItemsToBuy