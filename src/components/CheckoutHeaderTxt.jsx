import React from 'react'

const CheckoutHeaderTxt = (props) => {
  return (
    <h1 className={`${props?.className} font-semibold text-2xl w-full py-2 border-b-[1px]
        border-black border-solid`}>
        {props.text}
    </h1>
  )
}

export default CheckoutHeaderTxt