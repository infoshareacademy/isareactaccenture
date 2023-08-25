import { PrimaryButton, DefaultButton } from '@fluentui/react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
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
    return (
        <NavContainer>
            {links.map((link) => (
                <NavLink key={link.to} to={link.to}>
                    {({ isActive }) => isActive
                        ? <PrimaryButton text={link.label} />
                        : <DefaultButton text={link.label} />
                    }
                </NavLink>
            ))}
        </NavContainer>
    )
}