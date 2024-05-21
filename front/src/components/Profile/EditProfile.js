import React, { useContext } from 'react'
import { UserInfoContext } from './Profile';

function EditProfile() {
    const {userInfo,setUserInfo} =useContext(UserInfoContext);
  return (
    <div>{userInfo.email}</div>
  )
}

export default EditProfile