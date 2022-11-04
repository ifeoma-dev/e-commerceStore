import React from 'react';
import { useSelector } from 'react-redux';
import EachProduct from '../components/EachProduct';

const WishlistPage = () => {
    const { likedProducts } = useSelector((state)=> state?.allLikedProducts)
  return (
    <div className='w-full h-full flex flex-col items-center'>
        <h1 className='sm:text-4xl my-10 text-2xl font-extrabold'>My Wishlist ({likedProducts?.length} items)</h1>

        <div className='w-full flex flex-wrap items-center justify-center
         gap-6'>
          {/* nest in a div, add like function, pass product into it */}
          {likedProducts?.map((product)=> (
            <EachProduct
            product={product}
            key={product?.id} />
          ))}
        </div>
    </div>
  )
}

export default WishlistPage