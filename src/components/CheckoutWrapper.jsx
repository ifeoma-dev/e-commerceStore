import React from 'react';
import CheckoutTracker from '../components/CheckoutTracker';
import CheckoutLayout from '../components/CheckoutLayout';


const CheckoutWrapper = (props) => {
    const islargeScreen = window.innerWidth >= 768;

  return (
    <div className='w-full pb-10 md:pt-0 pt-6 flex flex-col items-center gap-10'>
        {islargeScreen && <CheckoutTracker />}

        <CheckoutLayout>
            {props?.children}
        </CheckoutLayout>
    </div>
  )
}

export default CheckoutWrapper