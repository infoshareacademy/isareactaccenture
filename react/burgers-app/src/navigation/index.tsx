import styled from 'styled-components';
import { PrimaryButton } from '@fluentui/react';

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
            <PrimaryButton text={link.label} />
        ))}
    </NavContainer>
}