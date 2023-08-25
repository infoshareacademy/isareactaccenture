import { Text } from '@fluentui/react';
import { useParams } from 'react-router-dom';

export const UserDetails = () => {
    const params = useParams();

    return <Text variant="large">Witaj uzytkowniku o id: {params.id}</Text>
}