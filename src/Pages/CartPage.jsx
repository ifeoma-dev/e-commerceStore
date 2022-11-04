import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EachCartProduct from '../components/EachCartProduct';
import { Link } from 'react-router-dom';
import CheckoutComponent from '../components/CheckoutComponent';
import ShippingLocation from '../components/ShippingLocation';
import PaymentOptions from '../components/PaymentOptions';
import CheckoutTracker from '../components/CheckoutTracker';
import { AiOutlineArrowRight } from 'react-icons/ai';

const CartPage = () => {
  const { cartProducts, checkoutProducts } = useSelector((state)=> state?.allCartProducts)
  const isSmallDevice = window.innerWidth >= 768 ;

  return (
    <div className='w-full md:pt-0 pt-6 flex flex-col bg-[#f6f9fc]'>
      {isSmallDevice && <CheckoutTracker />}

      <div className='w-full flex sm:flex-row flex-col sm:gap-0 gap-6 pb-2 px-[3%] justify-around bg-[#f6f9fc]'>

        {/* cart area/first div child */}
        <div className='sm:w-[55%] w-full flex flex-col gap-6 bg-transparent'>
          <ShippingLocation />

          {/* display cart products */}
          <div className='flex flex-col w-full bg-white p-6'>
            <h2 className='sm:text-2xl text-xl mb-4'>Total Items ({cartProducts?.length})</h2>

            {(cartProducts?.length === 0) ? (
              <h2 className='sm:text-2xl text-xl mb-4'>
                Your Cart is Empty... <br />
                <Link to='/' className='flex gap-2 mt-2 items-center'>
                  <AiOutlineArrowRight
                    style={{fontSize: '26px', color: 'rgb(29, 78, 216)'}} /> 
                    <span className='text-blue-700 font-bold break-words'>Go Shop!</span>
                </Link>
              </h2>
            ) : (
              <>
                {cartProducts?.map((product)=> (
                  <EachCartProduct product={product} key={product?.id} />
                ))}
              </>
            )}

           
          </div>
        </div>

        {/* checkout area/ second div child */}
        <div className="sm:w-[30%] w-full box-border bg-transparent flex flex-col gap-8 pb-2" >
        <CheckoutComponent />
        {/* <PaymentOptions /> */}
        </div>
        
      </div>
    </div>
  )
}

export default CartPage