import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Wrapper } from './Wrapper';
import { AboutMe } from './about-me/AboutMe';
import { MyForm } from './forms/MyForm';
import { MyBetterForm } from './forms/MyBetterForm';
import { MyBoostedForm } from './forms/MyBoostedForm';
import { Game } from './game/Game';
import { GameClass } from './game/GameClass';
import { Users } from './users/Users';
import { Sign } from './sign/Sign';
import { Text } from '@fluentui/react';

function App() {
    return (
        <>
            <Navigation />
            <Wrapper>
                <Routes>
                    <Route path="/" element={<Text variant="xxLarge">Witaj na naszej stronie!</Text>} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/games" element={<>
                        <Game name="Heavy Rain" />
                        <GameClass name="Green Hell" />
                    </>} />
                    <Route path="/forms" element={<>
                        <MyForm />
                        <MyBetterForm />
                        <MyBoostedForm />
                    </>} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/sign" element={<Sign />} />
                </Routes>
            </Wrapper>
        </>
    );
}

export default App;
