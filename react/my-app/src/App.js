import { Wrapper } from './Wrapper';
import { AboutMe } from './about-me/AboutMe';
import { MyForm } from './forms/MyForm';
import { Game } from './game/Game';
import { GameClass } from './game/GameClass';
import { Users } from './users/Users';

function App() {
    return (
        <Wrapper>
            <AboutMe />
            <Game name="Heavy Rain" />
            <GameClass name="Green Hell" />
            <Users />
            <MyForm />
        </Wrapper>
    );
}

export default App;
