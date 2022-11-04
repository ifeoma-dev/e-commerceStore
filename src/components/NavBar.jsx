import React from 'react';
import AddToCart from './AddToCart';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import LinkButton from './LinkButton';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropup} from 'react-icons/io';


const NavBar = () => {
    const [allCategories, setAllCategories] = useState([]);
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    const fetchAllCategories = async ()=> {
        const response = await axios.get('https://fakestoreapi.com/products/categories')
                           .catch(()=> console.log('Error'))
        setAllCategories(response?.data)
    }

    // all categroies shouldnt exist till injected with res.data
    useEffect(()=> {
        fetchAllCategories();
    }, [])
    

  return (

    <>
      {/* large devices and upwards */}
      <div className='w-full h-full hidden md:flex bg-white box-border items-center 
      justify-around px-4 border-b-slate-700 border-b-2'>
  
          <LinkButton
            to='/'
            string='Home'
            givenClass='group' />
  
          {allCategories?.map((category, i)=> (
              <LinkButton
              key={i}
              to={`/categories/${category}`}
              string={category}
              givenClass='group' />
          ))}
  
  
          <div className='mr-[3rem] justify-self-end'>
              <AddToCart 
                cartStyle={{ fontSize: '36px', color: 'rgb(75, 85, 99)' }}
                heartStyle={{ fontSize: '36px', color: 'rgb(75, 85, 99)' }} />
          </div>
  
      </div>

      {/* downwards large devices */}
      <div className='w-full h-full md:hidden flex bg-white box-border 
      items-center justify-between px-4 pl-[calc(1rem-0.5rem)] border-b-slate-700 border-b-2'>
         <LinkButton
            to='/'
            string='Home'
            givenClass='group' />

         <div className={`py-4 relative flex items-center justify-center gap-1`}>
            <h1 className='xs.5:text-xl font-bold'>Categories</h1>
            {/* set to open dropdown */}
            {!dropdownIsOpen ? (
                <IoMdArrowDropdown 
                style={{ fontSize: '30px', cursor: 'pointer', color: 'rgb(29, 78, 216)'}}
                onClick={()=> setDropdownIsOpen(true)} />
              ) : (
                // set to close dropdown
                  <IoMdArrowDropup 
                style={{ fontSize: '30px', cursor: 'pointer', color: 'rgb(29, 78, 216)'}}
                onClick={()=> setDropdownIsOpen(false)} />
              )
            }

            {/* dropdown Menu */}
            <div className={`${dropdownIsOpen ? 'block' : 'hidden'} absolute top-[50px] rounded-lg 
                    left-0 translate-x-0 z-10 bg-white 3xs:left-[50%] 
                    3xs:translate-x-[-50%] shadow-black shadow-md`}>
              <ul className='flex flex-col items-start p-1 gap-4 justify-around'>
                  {allCategories?.map((category, i)=> (
                      <LinkButton
                      className='sm:w-[250px] w-[170px]'
                      key={i}
                      to={`/categories/${category}`}
                      string={category}
                      givenClass='group'
                      dropdownClass='dropmenu'
                      handleClick={()=> setDropdownIsOpen(false)} />
                  ))}
              </ul>
            </div>

         </div>

         <AddToCart
           cartStyle={{ fontSize: '20px', color: 'rgb(75, 85, 99)' }}
           heartStyle={{ fontSize: '20px', color: 'rgb(75, 85, 99)' }} />
       </div>
    </>
  )
}

export default NavBar