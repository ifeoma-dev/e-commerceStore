import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setProducts, removeSetProducts } from '../redux/actions/ProductActions';
import { useDispatch, useSelector } from 'react-redux';
import EachProduct from '../components/EachProduct';

const CategoryProducts = () => {
    const {category} = useParams();
    const dispatch = useDispatch();
    const { products } = useSelector((state)=> state.allProducts);

    const fetchCategories = async ()=> {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`).catch(
            ()=> console.log('error')
        )

        dispatch(setProducts(response.data))
    }

    // if (products?.length > 0) {
    //     console.log('products have arrived', products)
    //   }

    useEffect(()=> {
        fetchCategories();
        
        // if (products?.length) {
        //     console.log(category);
        // }
        
        return ()=> dispatch(removeSetProducts());
    }, [category, dispatch, fetchCategories])

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

export default CategoryProducts