import React from 'react';

const ProductCard = (props) => {
    
  return (
    <div className={`${props?.className}
    p-4 flex rounded-lg w-[95%] h-[90%] xl:w-[80%] xl:h-[80%]
    box-border`}>
        {props?.children}
    </div>
  )
}

export default ProductCard