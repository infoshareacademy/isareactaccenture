import styled from 'styled-components';
import { PrimaryButton } from '@fluentui/react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../controllers/user-context';
import { getAuth, signOut } from 'firebase/auth';

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    background-color: rgb(0, 120, 212);
`;

const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const LogContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const links = [
    { to: '/', label: "Home", isAvailable: true },
    { to: '/menu', label: "Menu", isAvailable: true },
    { to: '/admin', label: "Admin", isAvailable: false },
]

export const Navigation  = () => {
    const user = useUserContext();

    const handleSignOutClick = () => {
        // --FIREBASE
        const auth = getAuth();
        signOut(auth);
        // --FIREBASE
    }

    return <NavContainer>
        <LinksContainer>
            {links.map((link) => link.isAvailable || (!link.isAvailable && user)
                ? <Link key={link.to} to={link.to}>
                    <PrimaryButton  text={link.label} />
                </Link>
                : null
            )}
        </LinksContainer>
        <LogContainer>
            {user 
                ? <PrimaryButton text="Sign out" onClick={handleSignOutClick} /> 
                : <Link to="/sign">
                      <PrimaryButton text="Sign in" />
                  </Link>
            }
        </LogContainer>
    </NavContainer>
}