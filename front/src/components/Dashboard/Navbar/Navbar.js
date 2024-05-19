import React from 'react'
import logo from "../../../Images/logo.png"
import { Link } from 'react-router-dom'
function Navbar() {
  return (<div className='navbar-container'>
    <img src={logo} alt='logo'  className='navbar-logo'/>
    <div className='navbar-features'>
        <div><Link to="/request-walker" className='link'>Walk My Dawg</Link></div>
        <div><Link to="/profile" className='link'>Profile</Link></div>
        <div><Link to="/logout" className='link'>Logout</Link></div>
        
    </div>
    </div>
  )
}

export default Navbar