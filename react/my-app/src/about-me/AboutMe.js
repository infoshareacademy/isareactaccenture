import { Contact } from './Contact';
import { ContactStyled } from './ContactStyled';
import { MyFavouriteDishes } from './MyFavouriteDishes';
import MyName from './MyName';

const contactData = {
    phone: '111 222 333',
    address: { street: 'Słowackiego', city: 'Gdańsk', number: 37 },
    email: 'moj@mail.com'
}

export const AboutMe = () => (
    <>
        <MyName name="Kamil" surname="Richert" />
        <MyName name="Kamil" />
        <Contact data={contactData} />
        <ContactStyled data={contactData} />
        <MyFavouriteDishes dishes={
            [
                { id: 1, name: 'pierogi' },
                { id: 2, name: 'bułeczki bao' },
                { id: 3, name: 'zupa cebulowa' },
            ]
        } />
    </>
)