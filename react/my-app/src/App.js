import { Suspense, lazy, createContext, useState } from 'react';
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
import { Home } from './home/Home';
import { Spinner } from '@fluentui/react';
import { UserDetails } from './users/UserDetails';


export const LanguageContext = createContext('pl');
const LazyAboutMe = lazy(() => import('./about-me/AboutMe').then((module => ({ default: module.AboutMe }))));

function App() {
    const [lang, setLang] = useState('pl');

    return (
        <LanguageContext.Provider value={lang}>
            <Navigation />
            <div>
                <button onClick={() => setLang('pl')}>PL</button>
                <button onClick={() => setLang('en')}>EN</button>
            </div>
            <Wrapper>
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
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
        </LanguageContext.Provider>
    );
}

export default App;
