import styled from 'styled-components';
import { PrimaryButton } from '@fluentui/react';
import { Link } from 'react-router-dom';

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px;
    background-color: rgb(0, 120, 212);
`;

const links = [
    { to: '/', label: "Home" },
    { to: '/menu', label: "Menu" },
    { to: '/admin', label: "Admin" },
]

export const Navigation  = () => {
    return <NavContainer>
        {links.map((link) => (
            <Link key={link.to} to={link.to}>
                <PrimaryButton  text={link.label} />
            </Link>
        ))}
    </NavContainer>
}