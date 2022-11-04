import React from 'react';
import { removeCartProduct, setCartProducts } from '../redux/actions/ProductActions';
import { useDispatch } from 'react-redux';

const CartItemButton = ({product}) => {
    const dispatch = useDispatch();
    
  return (
    <div className='flex h-[30px]'>
        <button 
          className='bg-white px-2 h-full border-gray-400 border-2 border-solid
          rounded-tl-lg rounded-bl-lg border-r-0 font-bold'
          onClick={()=> {
            if (product?.quantity > 1) {
              dispatch(removeCartProduct(product))
            }
          }}> -
        </button>

        <button 
          className='bg-white px-2 h-full border-gray-400 border-2 border-solid font-bold'>
          {product?.quantity}
        </button>
        
        <button 
          className='bg-white px-2 h-full border-gray-400 border-2 border-solid
          rounded-tr-lg rounded-br-lg border-l-0 font-bold'
          onClick={()=> dispatch(setCartProducts(product))}>
          +
        </button>

    </div>
  )
}

export default CartItemButton