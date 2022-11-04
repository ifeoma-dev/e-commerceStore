import React from 'react'

const CheckoutLayoutR = (props) => {
  return (
    <div className='flex-1 border-l-[1px] border-black 
        border-solid sm:pl-10 pl-4 h-[400px] inline-flex flex-col gap-8'>
        {props?.children}
    </div>
  )
}

export default CheckoutLayoutR