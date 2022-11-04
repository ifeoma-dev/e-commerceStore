import React from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { setCartProducts } from '../redux/actions/ProductActions';

const CartFunctionality = () => {
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state)=> state?.selectedProduct)

  const handleCartClick = ()=> {
    dispatch(setCartProducts(selectedProduct));
  }

  return (
    <Card 
      className='flex items-center justify-center p-2 
      rounded-lg bg-slate-400 hover:cursor-pointer'
      onClick={(e)=> {
        handleCartClick();
      }} >
        <p className='text-white sm:text-2xl text-lg p-2
         bg-black rounded-lg shadow-black hover:shadow-xl hover:ml-[2px] hover:mt-[-2px] '>Add To Cart</p>
    </Card>
  )
}

export default CartFunctionality