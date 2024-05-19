import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom'
import { useIsAuth } from '../../hooks/useIsAuth'
import Navbar from './Navbar/Navbar'

function Dashboard() {
    const naviagte=useNavigate()
    const [loading, setLoading] = useState(true)
    useIsAuth(()=>{setLoading(false)},()=>{naviagte("/login")})


    if(loading)
        return(<h1>Loading</h1>)
    return (<>
    <Navbar />
    
    </>)
}

export default Dashboard