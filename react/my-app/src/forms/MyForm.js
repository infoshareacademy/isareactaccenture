import { useState } from 'react';

export const MyForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('facet');
    const [comment, setComment] = useState('');

    const handleNameChange = event => setName(event.target.value);
    const handleAgeChange = event => setAge(event.target.value);
    const handleGenderChange = event => setGender(event.target.value);
    const handleCommentChange = event => setComment(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify({ name, age, gender, comment }, null, 2))
    }

    return <form onSubmit={handleSubmit}>
        <label>Imię</label>
        <input type="text" value={name} onChange={handleNameChange} />
        <label>Wiek</label>
        <input type="number" value={age} onChange={handleAgeChange} />
        <label>Płeć</label>
        <select value={gender} onChange={handleGenderChange}>
            <option value="facet">Męzczyzna</option>
            <option value="kobitka">Kobieta</option>
            <option value="facetka">Pani w szkole</option>
        </select>
        <label>Komentarz</label>
        <textarea value={comment} onChange={handleCommentChange} />
        <input type="submit" value="Kliknij mnie" />
    </form>
}