import React, { useContext ,useState} from 'react'
import { UserInfoContext } from './Profile';

function EditProfile() {
  const {userInfo,setUserInfo} =useContext(UserInfoContext);
  const[Editing,setEdit]=useState({
    name:false,
    last_name:false,
    email:false
  })
  const [updateUser,setUpdateUser]=useState(userInfo)
  const updateUserInfo=(field)=>
  {
    fetch("http://localhost:4000/api/update-user", {method:"POST",headers: {"Content-Type": "application/json"}, credentials: "include", body: JSON.stringify(updateUser)})
    .then(res=>res.json())
    .then(data=>
      {
        setUserInfo(data.userinfo)
        setEdit({...Editing,[field]:!Editing[field]})
      })
  }
  return (<div className='edit-profile'>
    
    <div className='edit-profile-container'>
      <h3>Name</h3>
    <div className='edit-profile-info'>
      {!Editing.name?
      <>
        <div>{userInfo.name}</div>
        <button onClick={()=>setEdit({...Editing,name:!Editing.name})}>Edit</button>
      </>:
      <>
        <input placeholder={userInfo.name} name='name' onChange={(e)=>setUpdateUser({...updateUser,name:e.target.value})}/>
        <button onClick={()=>{updateUserInfo("name")}}>Save</button></>
      
      }
    
    
    </div>
    </div>
    <div className='edit-profile-container'>
    <h3>Last Name :</h3>
    <div className='edit-profile-info'>
    {!Editing.last_name?
      <>
        <div>{userInfo.last_name}</div>
        <button onClick={()=>setEdit({...Editing,last_name:!Editing.last_name})}>Edit</button>
      </>:
      <>
        <input placeholder={userInfo.last_name} name='last_name' onChange={(e)=>setUpdateUser({...updateUser,last_name:e.target.value})}/>
        <button onClick={()=>{updateUserInfo("last_name")}}>Save</button></>
      
      }
    </div>
    </div>
    <div className='edit-profile-container'>
    <h3>Email :</h3>
    <div className='edit-profile-info'>
    {!Editing.email?
      <>
        <div>{userInfo.email}</div>
        <button onClick={()=>setEdit({...Editing,email:!Editing.email})}>Edit</button>
      </>:
      <>
        <input placeholder={userInfo.email} name='email' onChange={(e)=>setUpdateUser({...updateUser,email:e.target.value})}/>
        <button onClick={()=>{updateUserInfo("email")}}>Save</button></>
      
      }
    </div>
    </div>  
  </div>
  )
}

export default EditProfile