import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import SimpleNavbar from './SimpleNavbar'
import user from "../../Images/user.png"
import { useGetUser } from '../../hooks/useGetUser'
import LoadingPage from '../LoadingPage.js/LoadingPage'
export const UserInfoContext=React.createContext()
function Profile() {
  const [loading,setLoading]=useState(true)
  const {userInfo,setUserInfo} =useGetUser(setLoading);
  if(loading) return LoadingPage
  return (<UserInfoContext.Provider value={{userInfo,setUserInfo}}>
        <SimpleNavbar/>
        <div className='profile-info'>
          <div className='img-name'>
            <img alt='user' src={user} className='profile-image' />
            <h2>{userInfo.last_name} {userInfo.name}</h2>
          </div>
          <div className='navigation'>
            <NavLink to="" className="link">MyDawgs</NavLink>
            <NavLink to="add-dawg" className="link">Add aDawg</NavLink>
            <NavLink to="edit" className="link">Edit Profile</NavLink>
          </div>
        </div>
        <Outlet />
    </UserInfoContext.Provider>
  )
}

export default Profile