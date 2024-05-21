import React ,{useState}from 'react'
import { useIsAuth } from '../../hooks/useIsAuth'
import { useNavigate } from 'react-router-dom'
import Profile from '../Profile/Profile'
function ProtectedProfile() {
    const naviagte=useNavigate()
    const [loading, setLoading] = useState(true)
    useIsAuth(()=>{setLoading(false)},()=>{naviagte("/login")})
    if(loading) return null
  return (
    <Profile />
  )
}

export default ProtectedProfile