import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Images/logo.png'
function SimpleNavbar() {
  return (<div className='navbar-container'>
    <img src={logo} alt='logo'  className='navbar-logo'/>
    <div className='navbar-features'>
        <div><Link to="/logout" className='link'>Logout</Link></div>
    </div>
    </div>
  )
}

export default SimpleNavbar