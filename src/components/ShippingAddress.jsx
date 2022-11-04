import React from 'react';
import UserAddressBox from './UserAddressBox';
import CheckoutHeaderTxt from './CheckoutHeaderTxt';
import CheckoutMiniCard from './CheckoutMiniCard';

const ShippingAddress = () => {
  return (
    <CheckoutMiniCard>
        <CheckoutHeaderTxt 
          text='Shipping Address'/>

        <div className='w-full bg-transparent'>
          <UserAddressBox />
        </div>
    </CheckoutMiniCard>
    
  )
}

export default ShippingAddress