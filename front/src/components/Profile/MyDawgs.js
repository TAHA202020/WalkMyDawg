import React, { useContext } from 'react'
import { UserInfoContext } from './Profile';
import DawgCard from './DawgCard';
function MyDawgs() {

    const  {userInfo,setUserInfo} =useContext(UserInfoContext);
  return (<>
    <div>MyDawgs</div>
    {userInfo.dawgs.map((dawg)=>{
      return <DawgCard  name={dawg.name} image={dawg.image} />
    })}
    </>
  )
}

export default MyDawgs