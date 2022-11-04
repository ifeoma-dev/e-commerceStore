import React from 'react'

const ProductImage = (props) => {
  return (
    <img
    className={`${props.className}`}
    src={props.src}
    alt={props?.alt} />
  )
}

export default ProductImage