import { PrimaryButton } from '@fluentui/react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 15px;
`

export const Navigation = () => {
    return (
        <NavContainer>
            <Link to="/">
                <PrimaryButton text="Home" />
            </Link>
            <Link to="/about-me">
                <PrimaryButton text="About me" />
            </Link>
            <Link to="/games">
                <PrimaryButton text="Games" />
            </Link>
            <Link to="/forms">
                <PrimaryButton text="Forms" />
            </Link>
            <Link to="/users">
                <PrimaryButton text="Users" />
            </Link>
        </NavContainer>
    )
}