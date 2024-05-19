import React ,{useState}from 'react'
import { Navigate } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
function Logout() {
    const [loading,setLoading]=useState(true)
    useLogout(setLoading)
    if(loading)
        return <h1>Loading...</h1>
  return (
    <Navigate to="/login"/>
  )
}

export default Logout