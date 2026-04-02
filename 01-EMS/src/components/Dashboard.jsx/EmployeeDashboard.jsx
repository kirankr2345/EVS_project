import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = ({data}) => {
  // console.log(data);
  
  
  return (
    <div className='bg-[#1c1c1c] p-10 h-screen text-white'>
      <Header data={data}/>
      <TaskListNumber data={data}/>
      <Tasklist data={data}/>
    </div>
  )
}

export default EmployeeDashboard
