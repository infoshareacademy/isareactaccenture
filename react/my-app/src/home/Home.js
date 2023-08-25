
import { Text } from '@fluentui/react';
import { useLanguageContext } from '../LanguageContext';

export const Home = () => {
    const { language } = useLanguageContext();

    if (language === 'en') {
        return <Text variant="xxLarge">Welcome on our site!</Text>
    }

    return <Text variant="xxLarge">Witaj na naszej stronie!</Text>
}