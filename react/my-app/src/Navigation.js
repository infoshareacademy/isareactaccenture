import { PrimaryButton, DefaultButton } from '@fluentui/react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useLanguageContext } from './LanguageContext';

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px;
`;

const links = [
    { to: '/', label: "Home" },
    { to: '/about-me', label: "About me" },
    { to: '/games', label: "Games" },
    { to: '/forms', label: "Forms" },
    { to: '/users', label: "Users" },
    { to: '/sign', label: "Sign" },
]

export const Navigation = () => {
    const { setLanguage } = useLanguageContext();

    return (
        <NavContainer>
            <div>
                {links.map((link) => (
                    <NavLink key={link.to} to={link.to}>
                        {({ isActive }) => isActive
                            ? <PrimaryButton text={link.label} />
                            : <DefaultButton text={link.label} />
                        }
                    </NavLink>
                ))}
            </div>
            <div>
                <DefaultButton onClick={() => setLanguage('pl')} text="PL" />
                <DefaultButton onClick={() => setLanguage('en')} text="EN" />
            </div>
        </NavContainer>
    )
}