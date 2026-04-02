import React from 'react'

const Adminform = () => {
  return (
    <div className='p-5 mt-5'>
      <form className='flex justify-center items-start'>
        <div className='w-1/2 '>
            <div className='mt-4' >
              <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
              <input className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-2 border-emerald-400 rounded-xl' type="text" />
            </div>
            <div className='mt-4'>
              <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
              <input className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-2 border-emerald-400 rounded-xl' type="date" />
            </div>
            <div className='mt-4'>
              <h3 className='text-sm text-gray-300 mb-0.5'>Asian paints</h3>
              <input className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-2 border-emerald-400 rounded-xl' type="text" />
            </div>
            <div className='mt-4'>
              <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
              <input className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent border-2 border-emerald-400 rounded-xl' type="text" />
            </div>
        </div>
        <div className='w-2/5 flex-col items-start'>
              <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
              <textarea className='w-full h-44 text-sm outline-none border-1 rounded border-emerald-500' placeholder='Enter anything you want'></textarea>
              <button className='bg-emerald-500 text-lg px-2 py-1 rounded font-semibold mt-2'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Adminform
