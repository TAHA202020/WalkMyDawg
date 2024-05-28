import { useState } from "react"
import { useEffect } from "react"
export function useGetUser(setLoading)
{
    const[userInfo,setUserInfo] =useState({})

    useEffect(()=>
    {
        fetch("http://localhost:4000/api/user-info", {method:"GET",headers: {"Content-Type": "application/json"}, credentials: "include"})
        .then(res=>res.json())
        .then(data=>{
            if(data.message==="success")
                setUserInfo(data.userinfo)
            else
                alert("something went wrong")
        }).catch(err=>console.log(err)).finally(()=>{setLoading(false)})
    },[])

    return {userInfo,setUserInfo}
}