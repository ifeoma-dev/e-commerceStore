import React from 'react'
import { AiFillHeart } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { setLikedProducts, removeLikedProduct } from '../redux/actions/ProductActions';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LikeFunctionality = ({cartItemID, cartItem}) => {
    const { productid } = useParams();
    const dispatch = useDispatch();
    const [functionCalled, setFunctionCalled] = useState(false);
    const [liked, setLiked] = useState(false)
    const { selectedProduct } = useSelector((state)=> state?.selectedProduct);
    const { likedProducts } = useSelector((state)=> state?.allLikedProducts)
 

    // handle when like button is clicked
    const handleliked = ()=> {
        setFunctionCalled(true)
        setLiked(!liked)
      
      }

      // check if product has been liked before
      useEffect(()=> {
        if (likedProducts?.length > 0) {
            likedProducts?.map((product)=> {
              // window parse int makes string a number
              if (product?.id === window.parseInt(productid) || product?.id === cartItemID) {
                setLiked(true)
                productid ? console.log('product', window.parseInt(productid)) : console.log('cart item', cartItemID)
              }
            
          });
        }
         
      }, [])    

      // whenever product is liked/disliked
      // cartItem pack for whether component is called in an 'each...
      // ...product' display
    useEffect(()=> {
        if (functionCalled) {
          if (liked) {
        
            productid ? dispatch(setLikedProducts(selectedProduct)) : dispatch(setLikedProducts(cartItem)) 
          } 
    
          if (!liked) {
            productid ? dispatch(removeLikedProduct(productid)) : dispatch(removeLikedProduct(cartItem)) 
          }
        }
      }, [liked])

  return (
    <AiFillHeart
      style={productid ? { fontSize: '36px' } : { fontSize: '26px'}}
      className={`${liked ? 'text-red-500' : (productid ? 'text-white' : 'text-gray-400')} hover:cursor-pointer`}
      onClick={()=> handleliked()} />
  )
}

export default LikeFunctionality