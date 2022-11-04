import React from 'react';
import CheckoutHeaderTxt from './CheckoutHeaderTxt';
import CheckoutMiniCard from './CheckoutMiniCard';

const CheckoutPayment = () => {
  return (
    <CheckoutMiniCard>
        <CheckoutHeaderTxt
          text='Payment Method' />

        <form className='w-full flex flex-col gap-4 pl-6 bg-transparent'>
            <label className='text-lg'>
              <input 
               type='radio'
               name='paymentMethod'
               value='Credit/debitCard'
               className='mr-2' />
               Credit/Debit Card
            </label>

            <label className='text-lg'>
              <input 
               type='radio'
               name='paymentMethod'
               value='Paypal'
               className='mr-2' />
              Paypal
            </label>
           
        </form>
    </CheckoutMiniCard>
  )
}

export default CheckoutPayment