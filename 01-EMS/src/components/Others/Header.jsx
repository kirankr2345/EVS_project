import React from 'react'

const Header = ({data}) => {
  // console.log(data);
  
  return (
    <div className='flex justify-between items-end  '>
      <h1 className='text-2xl font-medium font-semibold '>HEllo <br /> <span className='text-3xl font-bold'>{data.firstName}</span></h1>
      <button className='bg-red-600 px-5 py-3 rounded-2xl text-lg font-medium active:scale-95'>Log Out</button>
    </div>
  )
}

export default Header
