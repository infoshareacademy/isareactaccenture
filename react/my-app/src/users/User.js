import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LanguageContext } from '../App';

export const User = ({ user }) => {
    const language = useContext(LanguageContext);

    return <li>
        <Link to={`/users/${user.id}`}>{user.name}</Link>
        {language === 'en' ? ' works in ' : ' pracuję w '}
        <span title={user.company.catchPhrase}>{user.company.name}</span>
    </li>
}