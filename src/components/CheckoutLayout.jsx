import React from 'react';
import Media from 'react-media';

const CheckoutLayout = (props) => {
  return (
    <Media query='(min-width: 1125px)'>
        {(matches) => {
            return matches ? (
                <div className='w-full flex px-24'>
                  {props?.children}
                </div>
            ) : (
                <div className='w-full flex flex-col gap-16 md:px-24 sm:px-16
                3xs:px-4'>
                  {props?.children}
                </div>
            )
        }}
    </Media>
    
  )
}

export default CheckoutLayout