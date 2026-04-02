import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import Failedtaks from './Failedtaks';
import CompleteTask from './completeTask';

const Tasklist = ({data}) => {
  // console.log(data);
  
  return (
    <div id='task' className='h-[55%] w-full flex flex-nowrap  items-center justify-start gap-5 py-5  mt-10 overflow-x-auto'>
      {data.tasks.map((elem, idx) =>{
        if(elem.active) {
           return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.newTask) {
          return <NewTask key={idx}  data={elem}/>
        }
        if(elem.completed) {
          return <CompleteTask key={idx}  data={elem}/>
        }
        if(elem.failed) {
          return <Failedtaks key={idx}  data={elem}/>
        }
        
      })}
      
     
       
    </div>
  )
}

export default Tasklist

