import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import SimpleNavbar from './SimpleNavbar'
import user from "../../Images/user.png"
import { useGetUser } from '../../hooks/useGetUser'
export const UserInfoContext=React.createContext()
function Profile() {

  const {userInfo,setUserInfo} =useGetUser();
  
  return (<UserInfoContext.Provider value={{userInfo,setUserInfo}}>
        <SimpleNavbar/>
        <div className='profile-info'>
          <div className='img-name'>
            <img alt='user' src={user} className='profile-image' />
            <h2>{userInfo.last_name} {userInfo.name}</h2>
          </div>
          <div className='navigation'>
            <NavLink to="add-dawg" className="link">Add a Dawg</NavLink>
            <NavLink to="edit" className="link">Edit Profile</NavLink>
          </div>
        </div>
        <Outlet />
    </UserInfoContext.Provider>
  )
}

export default Profile