import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import logo from '../../Images/logo.png'
function SimpleNavbar() {

  const navigate=useNavigate()
  return (<div className='navbar-container'>
    <img src={logo} alt='logo'  className='navbar-logo'  onClick={()=>navigate("/")}/>
    <div className='navbar-features'>
        <div><Link to="/logout" className='link'>Logout</Link></div>
    </div>
    </div>
  )
}

export default SimpleNavbar