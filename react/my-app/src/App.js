import { Contact } from './Contact';
import MyName from './MyName';
import { Wrapper } from './Wrapper';

function App() {
    return (
        <Wrapper>
            <MyName name="Kamil" surname="Richert" />
            <MyName name="Kamil" />
            <Contact data={
                {
                    phone: '111 222 333',
                    address: { street: 'Słowackiego', city: 'Gdańsk', number: 37 },
                    email: 'moj@mail.com'
                }
            } />
        </Wrapper>
    );
}

export default App;
