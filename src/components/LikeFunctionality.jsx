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
    const [liked, setLiked] = useState(false);
    const { selectedProduct } = useSelector((state)=> state?.selectedProduct);
    const { likedProducts } = useSelector((state)=> state?.allLikedProducts)


    // handle when like button is clicked
    const handleliked = ()=> {
        setFunctionCalled(true)
        setLiked(!liked);
      
      }

    //   handle if product's been liked before
    // cartItem pack for whether component is called in an 'each...
      // ...product' display
    const isLikedProduct = ()=> {
      likedProducts?.map((product)=> {
        if (product?.id === productid || cartItemID) {
          setLiked(true)
        }
      })
    }

    //   effect handling whether product's been liked before on pageload
    useEffect(()=> {
        isLikedProduct();
        // console.log('liked is', liked)
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
            productid ? dispatch(removeLikedProduct(productid)) : dispatch(removeLikedProduct(cartItemID));
          }
        }
      }, [liked, selectedProduct, cartItem, cartItemID, dispatch, functionCalled, productid])

  return (
    <AiFillHeart
      style={productid ? { fontSize: '36px' } : { fontSize: '26px'}}
      className={`${liked ? 'text-red-500' : (productid ? 'text-white' : 'text-gray-400')} hover:cursor-pointer`}
      onClick={()=> handleliked()} />
  )
}

export default LikeFunctionality