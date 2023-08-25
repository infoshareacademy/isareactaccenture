import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Wrapper } from './Wrapper';
import { MyForm } from './forms/MyForm';
import { MyBetterForm } from './forms/MyBetterForm';
import { MyBoostedForm } from './forms/MyBoostedForm';
import { Game } from './game/Game';
import { GameClass } from './game/GameClass';
import { Users } from './users/Users';
import { Sign } from './sign/Sign';
import { Text, Spinner } from '@fluentui/react';
import { UserDetails } from './users/UserDetails';

const LazyAboutMe = lazy(() => import('./about-me/AboutMe').then((module => ({ default: module.AboutMe }))));

function App() {
    return (
        <>
            <Navigation />
            <Wrapper>
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<Text variant="xxLarge">Witaj na naszej stronie!</Text>} />
                        <Route path="/about-me" element={<LazyAboutMe />} />
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
                        <Route path="/users/:id" element={<UserDetails />} />
                        <Route path="/sign" element={<Sign />} />
                    </Routes>
                </Suspense>
            </Wrapper>
        </>
    );
}

export default App;
