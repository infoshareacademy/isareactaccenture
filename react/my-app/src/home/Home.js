
import { Text } from '@fluentui/react';
import { useContext } from 'react';
import { LanguageContext } from '../App';

export const Home = () => {
    const language = useContext(LanguageContext);

    if (language === 'en') {
        return <Text variant="xxLarge">Welcome on our site!</Text>
    }

    return <Text variant="xxLarge">Witaj na naszej stronie!</Text>
}