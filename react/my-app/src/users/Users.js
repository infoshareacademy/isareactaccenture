import { useState, useEffect } from 'react';
import { User } from './User';

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(r => r.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    return <ul>
        {users.map(user => <User key={user.id} user={user} />)}
    </ul>
}