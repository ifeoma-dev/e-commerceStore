import React from 'react'
import Media from 'react-media';
const CheckoutLayoutL = (props) => {
  return (
    <Media query='(min-width: 1125px)'>
        {(matches)=> {
            return matches ? (
                <div className='w-[70%] pb-2 pr-24 inline-flex flex-col gap-10'>
                  {props?.children}
                </div>
            ) : (
                <div className='w-full pb-2 inline-flex flex-col gap-10'>
                  {props?.children}
                </div>
            )
        }}
    </Media>
    
  )
}

export default CheckoutLayoutL