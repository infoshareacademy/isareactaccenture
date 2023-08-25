import { useState } from 'react';

export const MyBetterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: 'facetka',
        comment: ''
    })

    const handleChange = event => setFormData({
        ...formData,
        [event.target.name]: event.target.value
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formData, null, 2))
    }

    const { name, age, gender, comment } = formData;

    return <form onSubmit={handleSubmit}>
        <label>Imię</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <label>Wiek</label>
        <input type="number" name="age" value={age} onChange={handleChange} />
        <label>Płeć</label>
        <select name="gender" value={gender} onChange={handleChange}>
            <option value="facet">Męzczyzna</option>
            <option value="kobitka">Kobieta</option>
            <option value="facetka">Pani w szkole</option>
        </select>
        <label>Komentarz</label>
        <textarea name="comment" value={comment} onChange={handleChange} />
        <input type="submit" value="Kliknij mnie lepiej" />
    </form>
}