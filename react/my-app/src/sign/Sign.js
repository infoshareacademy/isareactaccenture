import { TextField, PrimaryButton } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';

export const Sign = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return <form onSubmit={handleSubmit}>
        <TextField label="email" type="email" />
        <TextField label="password" type="password" />
        <PrimaryButton type="submit" text="Zaloguj" />
    </form>
}