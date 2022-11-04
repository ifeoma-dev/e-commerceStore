import React from 'react'

const CheckoutMiniCard = (props) => {
  return (
    <div className='w-full bg-transparent flex flex-col gap-6'>
        {props?.children}
    </div>
  )
}

export default CheckoutMiniCard