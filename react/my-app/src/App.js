import { Contact } from './Contact';
import { MyFavouriteDishes } from './MyFavouriteDishes';
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
            <MyFavouriteDishes dishes={
                [
                    { id: 1, name: 'pierogi' },
                    { id: 2, name: 'bułeczki bao' },
                    { id: 3, name: 'zupa cebulowa' },
                ]
            } />
        </Wrapper>
    );
}

export default App;
