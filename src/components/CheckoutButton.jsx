import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutButton = (props) => {
  return (
    <Link to={props?.to} className='w-full'>
      <button 
        className='w-full mb-4 font-bold xs:text-2xl text-xl bg-blue-700 p-2
        hover:bg-blue-700/80'>
        {props?.text}
      </button>
    </Link>
  )
}

export default CheckoutButton