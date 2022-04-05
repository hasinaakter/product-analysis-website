import { useEffect, useState } from "react"

const useUsersData = () =>{
    const [users, setUsers] = useState([]);
    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);
    return [users, setUsers];
}

export default useUsersData;