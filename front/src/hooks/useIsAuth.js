import React,  { useEffect } from "react"
export function useIsAuth( onLoggedin, onNotLoggedin)
{
    useEffect(()=>
        {
            fetch("http://localhost:4000/api/login", {method:"GET",headers: {"Content-Type": "application/json"}, credentials: "include"})
            .then(res=>res.json())
            .then(data=>{
                if(data.response==="success")
                {
                    onLoggedin()
                }
                else
                {
                    onNotLoggedin()
                }
            })

        },[])
}