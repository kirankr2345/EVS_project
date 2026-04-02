import React, { useState } from 'react'
import Login from './components/auth/Login';
import EmployeeDashboard from './components/Dashboard.jsx/EmployeeDashboard';
import AdminDashborad from './components/Dashboard.jsx/AdminDashborad';
import { useContext } from 'react';
import { AuthContext } from './context/Authprovider';
// import { useEffect } from 'react';
// import { getLocalStorage } from './utilies/localStorage';
// import { getLocalStorage, setLocalStorage } from './utilies/localStorage';

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const AuthData = useContext(AuthContext)

  


// useEffect(()=>{
//   const logIn = getLocalStorage('loggedInUser')
//   console.log(logIn);
  
//   if(logIn ) {
//     console.log("logged by wmployees");
    
//   const userData = JSON.stringify('loggedInUser')
//     console.log(userData);
    
//   }
// }, [])

  const handleLogin = (email, password) =>{
    if(email == 'admin@me.com' && password == '123') {
      // console.log('this is admin');
      
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
      setUser('admin')
    } else if(AuthData ) {
      const employee = AuthData.employees.find((e) => e.email == email && e.password == password)
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))

      // console.log('this is user');
      setUser('employees')
    }else{
      alert("Invalid credential")
    }
  }




  return (
    <div >
     {!user ? <Login handleLogin={handleLogin}/> :'' }
     {user == 'admin'? <AdminDashborad />: user == 'employees' ? <EmployeeDashboard data={loggedInUserData}/> : null }
 
    </div>
  )
}

export default App
