import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setProducts, removeSetProducts } from '../redux/actions/ProductActions';
import EachProduct from '../components/EachProduct';


const ShowProducts = () => {
    const dispatch = useDispatch();
    const { products }  = useSelector((state)=> state.allProducts)
  
    const fetchProducts = async() => {
      const response = await axios.get('https://fakestoreapi.com/products').catch(
        ()=> console.log('error')
      )
  
      dispatch(setProducts(response?.data))
    }
  
    // if (products?.length > 0) {
    //   console.log('products have arrived', products)
    // }

    useEffect(()=> {
      fetchProducts();
      
      return ()=> dispatch(removeSetProducts());
    },[])


  return (
    <>
      {products?.length === 0 ? (
        <h1 className='w-full text-center 
        absolute top-[50%] translate-y-[-50%]'>Loading Products...</h1>
      ): (
        <div className='h-[calc(100vh-4.5rem)] w-full flex flex-wrap 
        items-center justify-center gap-6'>
          {products?.map((product)=> (
            <EachProduct
            product={product}
            key={product?.id} />
          ))}
        </div>
      )}
      
    </>
  )
}

export default ShowProducts