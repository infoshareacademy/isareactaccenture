import { Link } from 'react-router-dom';
import { useLanguageContext } from '../LanguageContext';


export const User = ({ user }) => {
    const { language } = useLanguageContext();

    return <li>
        <Link to={`/users/${user.id}`}>{user.name}</Link>
        {language === 'en' ? ' works in ' : ' pracuję w '}
        <span title={user.company.catchPhrase}>{user.company.name}</span>
    </li>
}