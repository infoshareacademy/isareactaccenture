import { useEffect, useState } from 'react';
import { Text } from '@fluentui/react';
import { useParams } from 'react-router-dom';
import { Spinner, SpinnerSize } from '@fluentui/react';

export const UserDetails = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(r => {
                if (!r.ok) {
                    throw new Error('An error occurred');
                }
                return r.json()
            })
            .then(data => {
                setUser(data);
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [params.id]);

    if (isLoading) {
        return <Spinner size={SpinnerSize.large} />
    }

    if (error) {
        return <Text variant="large">Something went wrong!</Text>
    }

    return <Text variant="large">Witaj {user.name}!</Text>
}