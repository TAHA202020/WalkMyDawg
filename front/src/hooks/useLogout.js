import { useEffect } from "react";

export function useLogout(setLoading)
{
    useEffect(()=>
    {
        fetch("http://localhost:4000/api/logout", {method:"GET",headers: {"Content-Type": "application/json"}, credentials: "include"})
        .then(res=>res.json()).
        then(data=>setLoading(false))
    }, [])
}