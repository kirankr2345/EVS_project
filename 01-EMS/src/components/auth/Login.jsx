import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {
    // console.log(props);
    
    const [email, SetEmail]  = useState('')
    const [password, SetPassword] = useState('')
   
    const submitHandler = (e) =>{
        e.preventDefault()
        // console.log("Email is", email);
        // console.log("password is", password);
    handleLogin(email,password)

        SetEmail('')
        SetPassword('')
        
    }
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-black'>
        <div className='border-2 border-emerald-500 p-15 rounded-2xl'>
            <form onSubmit={submitHandler}
             className='flex flex-col gap-5 '>
                <input 
                value={email}
                onChange={(e) =>{
                SetEmail(e.target.value);                        
                }}
                className='outline-none text-xl text-gray-400 placeholder:text-gray-400 border-1 border-emerald-500 px-4 py-3 rounded-full'
                type="email" placeholder='Enter your Email' required
                />

                <input
                value={password}
                onChange={(e) =>{
                    SetPassword(e.target.value)
                }}
                 className='outline-none text-xl text-gray-400 placeholder:text-gray-400 border-1 border-emerald-500 px-4 py-3 rounded-full'
                 type="password" placeholder='Enter your Password' required 
                 />

                <button className='outline-none text-xl text-white bg-emerald-500 placeholder:text-gray-400 border-1 border-emerald-500 px-4 py-3 rounded-full'                >Login
                 </button>
            </form>
        </div>
    </div>
  )
}

export default Login

