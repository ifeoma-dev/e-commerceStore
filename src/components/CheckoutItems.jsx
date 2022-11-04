import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { MdDoubleArrow } from "react-icons/md";
import CheckoutBag from './CheckoutBag';



const CheckoutItems = () => {
    const { checkoutProducts } = useSelector((state)=> state?.allCartProducts);
    // set indexes to different nums based on device width
    const largeScreen = window.innerWidth >= 1350;
    const xSmallScreen = window.innerWidth <= 400;
    const [firstIndex, setFirstIndex] = useState(0);
    // screen is large? (3), !large, & not !xSmall (2), else (1)
    const [lastIndex, setlastIndex] = useState(largeScreen ? 3 : !xSmallScreen ? 2 : 1);
    const [products, setProducts] = useState([]);

    useEffect(()=> {
      const sliceCheckoutList = ()=> {
        setProducts(checkoutProducts?.slice(firstIndex, lastIndex));
      }
      sliceCheckoutList();
    }, [firstIndex])

  return (
    <div className='w-full relative sm:h-[250px] xs:h-[150px] bg-transparent flex gap-6 justify-center'>
            <MdDoubleArrow
              style={{
                position: 'absolute', 
                zIndex: '10',
                color: `${firstIndex === 0 ? 'gray' : 'black'}`,
                fontSize: '36px',
                top: '40%',
                left: '0.5rem',
                transform: 'translateY(-50%) scaleX(-1)',
                cursor: 'pointer',}}
                
                onClick={()=> {
                    if (firstIndex !== 0) {
                        // screen is large? (3), !large, & not !xSmall (2), else (1)
                        const correctInt = largeScreen ? 3 : !xSmallScreen ? 2 : 1;
                        setFirstIndex((prevIndex)=> prevIndex - correctInt)
                        setlastIndex((prevIndex)=> prevIndex - correctInt)
                    }
                }}/>

            <CheckoutBag
              products={products} />

            <MdDoubleArrow
              style={{
                position: 'absolute',
                zIndex: '10', 
                color: `${lastIndex >= checkoutProducts?.length ? 'gray' : 'black'}`,
                fontSize: '36px',
                top: '40%',
                right: '0.5rem',
                transform: 'translateY(-50%)',
                cursor: 'pointer',}}
                
              onClick={()=> {
                // screen is large? (3), !large, & not !xSmall (2), else (1)
                const rightInt = largeScreen ? 3 : !xSmallScreen ? 2 : 1 ;
                if (!(lastIndex >= checkoutProducts?.length)) {
                    setFirstIndex((prevIndex)=> prevIndex + rightInt)
                    setlastIndex((prevIndex)=> prevIndex + rightInt) 
                }
              }}/>
        </div>
  )
}

export default CheckoutItems