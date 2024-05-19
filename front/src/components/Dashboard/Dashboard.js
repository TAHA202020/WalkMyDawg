import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useIsAuth } from '../../hooks/useIsAuth'

function Dashboard() {
    const naviagte=useNavigate()
    const [loading, setLoading] = useState(true)
    useIsAuth(()=>{setLoading(false)},()=>{naviagte("/login")})


    if(loading)
        return(<h1>Loading</h1>)
    return (<>
    <div>Dashboard</div>
    <Link to="/logout">Logout</Link>
    </>)
}

export default Dashboard