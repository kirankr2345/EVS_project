import React from 'react'

const NewTask = ({data}) => {
  return (
 
      <div className='w-[300px]  h-full bg-emerald-300 rounded-2xl py-4 flex-shrink-0'>
        <div className='flex justify-between items-center p-3 font-bold '>
          <h3 className='bg-red-500 px-3 py-2 rounded-3xl '>{data.category}</h3>
          <h4>{data.taskDate}</h4>
        </div>
        <h2 className='px-2 text-lg'>{data.taskTitle}</h2>
        <p className=' px-2 text-sm'>{data.taskDescription}</p>
        <div className='mt-4'>
        <button className='bg-green-400 px-3 py-1.5 ml-2 rounded '>Accept Task</button>
      </div>
      </div>
      
   
  )
}

export default NewTask
