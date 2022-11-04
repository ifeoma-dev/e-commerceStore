import React from 'react';
import CheckoutLayoutL from '../components/CheckoutLayoutL';
import CheckoutLayoutR from '../components/CheckoutLayoutR';
import ShippingAddress from '../components/ShippingAddress';
import CheckoutPayment from '../components/CheckoutPayment';
import ItemsToBuy from '../components/ItemsToBuy';
import OrderSummary from '../components/OrderSummary';
import CheckoutButton from '../components/CheckoutButton';
import CheckoutWrapper from '../components/CheckoutWrapper';


const CheckoutPage = () => {
  return (
    <CheckoutWrapper>
        {/* first div flex child of checkout layout */}
        <CheckoutLayoutL>
                <ShippingAddress />
                <CheckoutPayment />
                <ItemsToBuy />
            </CheckoutLayoutL>
        
            {/* second div flex child of checkout layout */}
            <CheckoutLayoutR>
                <OrderSummary />
                <CheckoutButton 
                  text='Place Order'/>
            </CheckoutLayoutR>
    </CheckoutWrapper>
  )
}

export default CheckoutPage