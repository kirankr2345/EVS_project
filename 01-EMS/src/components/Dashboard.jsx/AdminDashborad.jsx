import React from 'react'
import Adminform from '../Others/Adminform'
import AdminTask from '../Others/AdminTask'
import AdminHeader from '../Others/AdminHeader'

const adminDashborad = () => {

  
  return (
    <div className='bg-[#1c1c1c] h-screen w-full text-white p-6'>
      <AdminHeader/>
      <Adminform/>
      <AdminTask/>
      
    </div>
  )
}

export default adminDashborad
