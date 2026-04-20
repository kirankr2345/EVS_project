import { createContext, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utilies/localStorage"
import { useEffect } from "react"

export const AuthContext = createContext()
const Authprovider = ({children}) => {

    const [userData, SetUserData] = useState(null)

    useEffect(() =>{
      setLocalStorage()
      const [employees,admin] = getLocalStorage()
      SetUserData({employees, admin})
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
