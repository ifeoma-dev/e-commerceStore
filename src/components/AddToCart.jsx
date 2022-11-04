import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { VscDebugStackframeDot } from "react-icons/vsc";
import { Link } from 'react-router-dom';


const AddToCart = (props) => {
    const { cartProductsQuantities } = useSelector((state)=> state?.allCartProducts)
    const { likedProducts } = useSelector((state)=> state?.allLikedProducts)
    const [likedProductsIsActive, setLikedProductsIsActive] = useState(false);

    const checkLikedItemsLength = ()=> {
      if (likedProducts?.length > 0) {
        setLikedProductsIsActive(true);
      } else{
        setLikedProductsIsActive(false)
      }
    }

    useEffect(()=> {
      checkLikedItemsLength();
    })

    
  return (
    <div className='flex relative gap-3'>
      {/* display number of products in cart */}
      <Link to='/user/cart'>
        <AiOutlineShoppingCart
          style={props?.cartStyle}/>
           <p className='absolute left-[40%] top-[-10px]'>
            {cartProductsQuantities < 50 ? (
              cartProductsQuantities
            ) : '+50'}
          </p>
      </Link>

      <Link to='user/wishlist'>
        <AiOutlineHeart 
          style={props?.heartStyle} />
          {likedProductsIsActive && (
            <VscDebugStackframeDot 
              className='absolute left-[90%] top-[-7px] text-red-600' />
          ) }
      </Link>
        
    </div>
  )
}

export default AddToCart