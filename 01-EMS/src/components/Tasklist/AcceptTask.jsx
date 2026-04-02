import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data);
  
  return (
   
    <div className='w-[300px]  h-full bg-yellow-400 rounded-2xl py-4 flex-shrink-0'>
      <div className='flex justify-between items-center p-3 font-bold '>
          <h3 className='bg-red-500 px-3 py-2 rounded-3xl '>{data.category}</h3>
          <h4>{data.taskDate}</h4>
      </div>
    <h2 className='px-2 text-lg'>{data.taskTitle}</h2>
        <p className=' px-2 text-sm'>{data.taskDescription}</p>

      <div className='flex justify-between mt-4'>
        <button className='px-2 py-1 ml-2 bg-green-500 rounded-2xl'>Accept me</button>
        <button className='px-2 py-1 mr-2 bg-red-500 rounded-2xl'>Reject me</button>

      </div>
    </div>

      
   
  )
}

export default AcceptTask
