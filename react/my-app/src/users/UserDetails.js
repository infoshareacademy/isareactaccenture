import { useEffect, useState } from 'react';
import { Text } from '@fluentui/react';
import { useParams } from 'react-router-dom';
import { Spinner, SpinnerSize } from '@fluentui/react';

export const UserDetails = () => {
    const [user, setUser] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(r => r.json())
            .then(data => {
                setUser(data);
            })
    }, [params.id]);

    if (!user) {
        return <Spinner size={SpinnerSize.large} />
    }

    return <Text variant="large">Witaj {user.name}!</Text>
}