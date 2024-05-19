export function useGetUser()
{

    useEffect(()=>
    {
        fetch("http://localhost:4000/api/user", {method:"GET",headers: {"Content-Type": "application/json"}, credentials: "include"})
        .then(res=>res.json())
        .then(data=>console.log(data))   },
        [])
}