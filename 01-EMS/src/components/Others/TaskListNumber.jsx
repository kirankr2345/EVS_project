import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className=' flex gap-5'>
        <div className='w-[45%] bg-red-500 px-8 py-6 mt-5 rounded-3xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-2xl font-bold'>New Task</h3>
        </div>

        <div className='w-[45%] bg-green-500 px-8 py-6 mt-5 rounded-3xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-2xl font-bold'>New Task</h3>
        </div>

        <div className='w-[45%] bg-yellow-500 px-8 py-6 mt-5 rounded-3xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-2xl font-bold'>New Task</h3>
        </div>
        <div className='w-[45%] bg-emerald-600 px-8 py-6 mt-5 rounded-3xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-2xl font-bold'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber
