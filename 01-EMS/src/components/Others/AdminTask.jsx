import React from 'react'
import { createContext } from 'react'
import { AuthContext } from '../../context/Authprovider'

const AdminTask = () => {

 const authData = createContext(AuthContext)
  console.log(authData.employees);
  
  return (
    <div className='h-50 p-5 overflow-auto'>
      {authData.employees.map(function(){
        return <div className='flex justify-between px-2 h-10  mb-2 items-center rounded bg-red-400 '>
          <h3>Kiran</h3>
          <h3>Make an UI/UX Design</h3>
          <h5> Status</h5>
        </div>
        
      })}
        
        <div className='flex justify-between px-2 h-10 mb-2  items-center rounded bg-yellow-400 '>
          <h3>Kiran</h3>
          <h3>Make an UI/UX Design</h3>
          <h5> Status</h5>
        </div>
        <div className='flex justify-between px-2 h-10  mb-2  items-center rounded bg-green-400 '>
          <h3>Kiran</h3>
          <h3>Make an UI/UX Design</h3>
          <h5> Status</h5>
        </div>
        <div className='flex justify-between px-2 h-10  mb-2  items-center rounded bg-amber-800'>
          <h3>Kiran</h3>
          <h3>Make an UI/UX Design</h3>
          <h5> Status</h5>
        </div>
        <div className='flex justify-between px-2 h-10 mb-2 items-center rounded bg-emerald-500 '>
          <h3>Kiran</h3>
          <h3>Make an UI/UX Design</h3>
          <h5> Status</h5>
        </div>
        <div className='flex justify-between px-2 h-10  mb-2 items-center rounded bg-red-400 '>
          <h3>Kiran</h3>
          <h3>Make an UI/UX Design</h3>
          <h5> Status</h5>
        </div>
        
    </div>
  )
}

export default AdminTask
