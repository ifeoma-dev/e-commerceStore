import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCartProduct } from '../redux/actions/ProductActions';

const DeleteFromCart = ({product}) => {
    const dispatch = useDispatch();
  return (
    <p 
      onClick={()=> dispatch(deleteCartProduct(product))}
      className='hover:cursor-pointer hover:font-bold'>
        Delete
    </p>
  )
}

export default DeleteFromCart