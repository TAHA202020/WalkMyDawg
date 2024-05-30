import React ,{useState}from 'react'
import { Navigate } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import LoadingPage from '../LoadingPage.js/LoadingPage'
function Logout() {
    const [loading,setLoading]=useState(true)
    useLogout(setLoading)
    if(loading)
        return <LoadingPage/>
  return (
    <Navigate to="/login"/>
  )
}

export default Logout