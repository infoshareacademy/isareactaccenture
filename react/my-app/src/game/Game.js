import { useState } from 'react';

export const Game = ({ name }) => {
    const [points, setPoints] = useState(0);

    return <>
        <h1>Witaj w grzę {name}!</h1>
        <h2>Twoja liczba punktów to: {points}!</h2>
    </>
}