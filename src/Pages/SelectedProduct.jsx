import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct, removeSelectedProduct } from '../redux/actions/ProductActions';
import ProductCard from '../components/ProductCard';
import ProductImage from '../components/ProductImage';
import ProductContent from '../components/ProductContent';

const SelectedProduct = () => {
    const { productid } = useParams();
    const { selectedProduct } = useSelector((state)=> state.selectedProduct);
    const dispatch = useDispatch();

    // fetch the selected product from api
    const fetchSelectedProduct = async ()=> {
        const response = await axios.get(`https://fakestoreapi.com/products/${productid}`).catch(
            () => console.log('Error')
        );

        dispatch(setSelectedProduct(response.data))
        // console.log(response.data)
    }

    // run fetch-product function whenever product id changes
    useEffect(()=> {
      if (productid && productid !== '') fetchSelectedProduct();

      return () => dispatch(removeSelectedProduct(selectedProduct));

  }, [productid])

  return (
    <div className='w-full h-full flex items-center justify-center'>

      {selectedProduct && Object.keys(selectedProduct)?.length === 0 ? (
        <h1 className='w-full text-center 
        absolute top-[50%] translate-y-[-50%]'>Loading Product...</h1>
      ) : (
        <>

          {/* sm devices and upwards */}
          <ProductCard className='xl:pl-0 hidden sm:flex'>

              <ProductImage
                className='w-[50%] h-[70%] object-contain mr-[3%] xl:w-[40%] xl:object-fill xl:mr-[6%]'
                src={selectedProduct?.image}
                alt={selectedProduct?.title} />
  
              <ProductContent />
          </ProductCard>
          
          {/* devices smaller than sm devices */}
          <ProductCard 
          className='sm:hidden flex flex-col gap-4'>
            <ProductImage
              className='w-[100%] h-[300px] object-contain'
              src={selectedProduct?.image}
              alt={selectedProduct?.title} />
            <ProductContent />
          </ProductCard>
          
        </>
      )} 
    </div>
  )
    }
export default SelectedProduct 