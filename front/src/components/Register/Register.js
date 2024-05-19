import React, { useState ,useRef} from 'react'
import { Link } from 'react-router-dom'

function Register() {
    const [Credentials, setCredentials] = useState({email: "", password: ""})
    const repeatPassword=useRef()
    const onChange=(e)=>{
        setCredentials({...Credentials, [e.target.name]: e.target.value})
    }
    const Register=async(e)=>{
        if(repeatPassword.current.value!==Credentials.password){
            alert("Passwords don't match")
            return
        }
        let request = await fetch("http://localhost:4000/api/register", {body: JSON.stringify(Credentials), method: "POST", headers: {"Content-Type": "application/json"}})
        let response = await request.json()
        console.log(response)
    }
  return (
    <div className='login-container'>
        <div className='login'>
            <h3 className='login-title'>Register</h3>    
            <div className='login-inputs'>
                <label className='login-label'>Email :</label>
                <input type="text" placeholder='Email' required name='email' value={Credentials.email}  onChange={onChange}/>
                <label className='login-label'>Password :</label>
                <input type="password" placeholder='Password' name='password' value={Credentials.password} required onChange={onChange}/>
                <label className='login-label'>Repeat Password :</label>
                <input type="password" placeholder='Repeat Password' required ref={repeatPassword} />
                <button className='login-button' onClick={Register}>Register</button>
                <p>already have an Account <Link to={"/login"}>Login ?</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Register