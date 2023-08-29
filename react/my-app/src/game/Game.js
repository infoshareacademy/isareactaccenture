import { useState, useEffect } from 'react';
import { DefaultButton, PrimaryButton, FontIcon, Text } from '@fluentui/react';
import styled from 'styled-components';

const Score = styled.span`
    color: ${props => props.$isRed ? 'red' : 'black'}
`;

export const Game = ({ name }) => {
    const [points, setPoints] = useState(0);

    const increase = () => {
        setPoints(points + 5);
    }

    const decrease = () => {
        setPoints(points - 5);
    }

    useEffect(() => {
        if (points >= 50) {
            alert(`Gratulacje wygrałeś w grę ${name}!`)
        }
    }, [points, name])

    return <>
        <Text variant="large">Witaj w grzę {name}!</Text>
        <Text variant="mediumPlus">Twoja liczba punktów to: <Score $isRed={points < 0}>{points}</Score>!</Text>
        <div>
            <PrimaryButton onClick={increase}>
                <FontIcon iconName="Add" />
            </PrimaryButton>
            <DefaultButton onClick={decrease}>
                <FontIcon iconName="Remove" />
            </DefaultButton>
        </div>
    </>
}