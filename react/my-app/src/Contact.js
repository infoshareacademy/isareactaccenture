import './Contact.css';

export function Contact({ data: { phone, address, email } }) {
    return (
        <div className="contact-container">
            <h3>TEL</h3>
            <p>{phone}</p>
            <h3>ADRES</h3>
            <p>{address.street} {address.number}, {address.city}</p>
            <h3>E-MAIL</h3>
            <p>{email}</p>
        </div>
    )
}