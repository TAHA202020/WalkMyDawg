import React from 'react'
import { Outlet } from 'react-router-dom'
import SimpleNavbar from './SimpleNavbar'

function Profile() {
  return (<>
        <SimpleNavbar/>
        <Outlet />
        </>
  )
}

export default Profile