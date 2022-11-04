import React from 'react';
import { removeCheckoutProduct, setCheckoutProducts } from '../redux/actions/ProductActions';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import CartItemInfo from './CartItemInfo';
import  Media  from 'react-media';

const EachCartProduct = ({product}) => {
    const dispatch = useDispatch();
    const [handleCheckOut, setHandleCheckout] = useState(false);
    const [currentItem, setCurrentItem] = useState({});
    const [isShowingImage, setIsShowingImage] = useState(true);
    

    // onload of page, set current item with incoming product
    useEffect(()=> {
      setCurrentItem(product)
    }, [product])

    // set current item's checked property to toggle b/w t & f
    const handleClick = ()=> {
      setHandleCheckout(true);
      setCurrentItem({...currentItem, checked: !currentItem?.checked})
      console.log('checkout product is', !product?.checked)
    }


    useEffect(()=> {
      if (handleCheckOut) {
        // if current item checked prop === false
        if (!currentItem?.checked) {
          // remove product from checkout products
          dispatch(removeCheckoutProduct(product))
        }

        // if current item checked prop === true
        if (currentItem?.checked) {
          // add product to checkout products 
          dispatch(setCheckoutProducts(product))
        }
      }
    }, [currentItem?.checked])
    
  return (
  
    <Media query='(min-width: 840px)'>

      {(matches)=> {
        return matches ? (
          <div className='flex px-2 py-6 bg-transparent border-t-2 border-black
              border-dotted gap-4'
                key={product?.id}>
               <input 
                 type='checkbox'
                 checked={currentItem?.checked || product?.checked}
                 className='w-6 h-6'
                 onChange={handleClick} />
       
               <img
                 src={product?.image}
                 alt={product?.title}
                 className='w-[150px] h-[150px] object-contain' />
       
               {/* returns final flex item, div wrapper */}
               <CartItemInfo 
                 product={product} />
          </div>
        ) : (
          // when width < specified width
          <div className='flex flex-col px-2 py-6 pb-2 bg-transparent border-t-2 border-black
               border-dotted gap-2'
               key={product?.id}>
            
                {/* first div flex child */}
                <div className='w-full flex py-1'>

                  {/* show product image */}
                  {isShowingImage && (
                    <>
                      <input 
                        type='checkbox'
                        checked={currentItem?.checked || product?.checked}
                        className='w-6 h-6 animate-slideup'
                        onChange={handleClick} />
             
                     <img
                       src={product?.image}
                       alt={product?.title}
                       className='w-[60%] h-[150px] object-contain m-auto animate-slideup' />
                    </>
                  )}

                  {!isShowingImage && (
                    // show product info
                    <CartItemInfo 
                    product={product}
                    className='animate-slideup' />
                  )}
                </div>  
            
                {/* second div flex child */}
                <div className='flex-1 w-full bg-blue-200 flex items-end justify-center'>

                  {/* when product image is showing */}
                  {isShowingImage && (
                    <button 
                      className='w-full bg-transparent'
                      onClick={()=> setIsShowingImage(false)}>
                      Show Product Info
                    </button>
                  )}
  
                  {/* when product info is showing */}
                  {!isShowingImage && (
                    <button
                      className='w-full bg-transparent'
                      onClick={()=> setIsShowingImage(true)}>
                      Show Product
                    </button>
                  )}
                </div>
           </div>
        )
      }}
    </Media>  
  )
}

export default EachCartProduct