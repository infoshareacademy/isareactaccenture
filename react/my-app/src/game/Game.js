import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Score = styled.span`
    color: ${props => props.isRed ? 'red' : 'black'}
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
    })

    return <>
        <h1>Witaj w grzę {name}!</h1>
        <h2>Twoja liczba punktów to: <Score isRed={points < 0}>{points}</Score>!</h2>
        <div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    </>
}