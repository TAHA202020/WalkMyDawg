import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import { useIsAuth } from '../../hooks/useIsAuth'
function ProtectedDashboard() {
    
    const naviagte=useNavigate()
    const [loading, setLoading] = useState(true)
    useIsAuth(()=>{setLoading(false)},()=>{naviagte("/login")})
    if(loading)
        return null
    return (<Dashboard />
  )
  
}

export default ProtectedDashboard