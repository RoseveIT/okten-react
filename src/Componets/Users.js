import {useState, useEffect} from 'react';

const Users = () => {
    const {users, setUsers} = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(data => setUsers(data))
    },[])
    return (
        <div>
            {users.map(data=><div>{data.name}</div>)}
        </div>
    );
};

export default Users;