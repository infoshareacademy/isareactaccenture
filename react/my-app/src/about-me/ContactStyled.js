import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h3`
    color: blue;
    letter-spacing: 5px;
`;

const Text = styled.p`
    font-size: 15px;
    font-weight: 700;
`;

export const ContactStyled = ({ data: { phone, address, email } }) => {
    const handleClick = () => {
        alert(`Dziękuję! Zapraszam do mnie przy ${address.street} ${address.number}, ${address.city}!`)
    }

    return (
        <Container>
            <Title>TEL</Title>
            <Text>{phone}</Text>
            <Title>ADRES</Title>
            <Text>{address.street} {address.number}, {address.city}</Text>
            <Title>E-MAIL</Title>
            <Text>{email}</Text>
            <button onClick={handleClick}>Wyślij</button>
        </Container>
    )
}