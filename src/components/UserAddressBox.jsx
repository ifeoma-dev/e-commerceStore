import React from 'react'

const UserAddressBox = () => {
  return (
    <div className='group xs:w-[350px] 2xs:w-[300px] w-full h-[200px] bg-gradient-to-b from-green-400 via-blue-600 
    to-blue-800 hover:from-pink-500 hover:to-yellow-500 pl-2 pt-2
    rounded-md'>
        <div className='w-full h-full bg-white shadow-lg shadow-black 
        rounded-md 2xs:p-6 p-4 flex flex-col justify-between'>
            <h2 className='font-normal text-lg'> 
              Jane Doe 
              <span className='ml-6 text-sm'>000-333-000-444</span>
            </h2>

            <div className='w-full h-[4px] rounded-md bg-gradient-to-b 
             from-green-400 via-blue-600 
            to-blue-800 group-hover:from-pink-500 group-hover:to-yellow-500'></div>

            <p>22, Oakley Park Street, CA, USA 199123</p>

            <div className='flex w-full justify-between items-end'>
                <p className='py-[2px] px-[4px] bg-blue-100 
                 text-blue-500 rounded-sm'>
                   default Address
                </p>
                <p className='text-blue-700 cursor-pointer'>Edit</p>
            </div>
        </div>
     </div>
  )
}

export default UserAddressBox