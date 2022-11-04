import React from 'react';
import DeleteFromCart from './DeleteFromCart';
import LikeFunctionality from './LikeFunctionality';
import CartItemButton from './CartItemButton';
import { Link } from 'react-router-dom';

const CartItemInfo = ({product, className}) => {
  return (
    <div className={`${className} flex flex-1 flex-col lg:gap-0 gap-8 justify-between`}>
            <Link to={`/products/${product?.id}`}>
              <p
                 className='2xs:text-lg text-base text-black font-normal 
                 hover:font-bold w-full'>
                 {product?.title} - ${product?.price}
              </p>
            </Link>
            

            <div className='flex w-full items-center justify-between'>
                <CartItemButton product={product} />
                
                <p>Total: ${product?.quantity * product?.price}</p>
            </div>

            <div className='flex w-full items-end gap-6'>
                <div className='flex gap-1 items-end justify-start'>
                  <p>Save Instead</p>

                  <LikeFunctionality
                    cartItem={product}
                    cartItemID={product?.id} />
                </div>

                <DeleteFromCart
                  product={product} />
            </div>
        </div>
  )
}

export default CartItemInfo