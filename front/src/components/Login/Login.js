import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useIsAuth } from '../../hooks/useIsAuth'
function Login() {
    const naviagte=useNavigate()
    const [cdls, setCredentials] = useState({email: "", password: ""})
    const [loading, setLoading] = useState(true)
    useIsAuth(()=> {naviagte("/")},()=>{setLoading(false)})
    const onChange=(e)=>{
        setCredentials({...cdls, [e.target.name]: e.target.value})
    }
    const Login=async(e)=>{
        let request = await fetch("http://localhost:4000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify(cdls),
            });
        let response = await request.json()
        if(response.response==="success")
        {
            naviagte("/")
        }
    }
    if(loading)
        return <h1>Loading...</h1>
  return (
    <div className='login-container'>
        <div className='login'>
            <h3 className='login-title'>Login</h3>    
            <div className='login-inputs'>
                <label className='login-label'>Email :</label>
                <input type="text" placeholder='Email' required name='email' value={cdls.email}  onChange={onChange}/>
                <label className='login-label'>Password :</label>
                <input type="password" placeholder='Password' name='password' value={cdls.password} required onChange={onChange}/>
                <button className='login-button' onClick={Login}>Login</button>
                <p>don't have an Account, <Link to={"/register"}>Register ?</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login