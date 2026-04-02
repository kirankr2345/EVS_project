import { createContext, useState } from "react"
import { getLocalStorage } from "../utilies/localStorage"
import { useEffect } from "react"

export const AuthContext = createContext()
const Authprovider = ({children}) => {

    const [userData, SetUserData] = useState(null)

    useEffect(() =>{
      const [employees,admin] = getLocalStorage()
      SetUserData({employees, admin})
      getLocalStorage()
    },[])
  return (
    <div>
     <AuthContext.Provider value={userData}>
      {children}
     </AuthContext.Provider>
    </div>
  )
}

export default Authprovider
