import React, { useState } from 'react';

import styles from './Create.module.css';

type Props = {
    onSubmitted: (content: string) => void;
};

export const Create = ({ onSubmitted }: Props) => {
    const [content, setContent] = useState<string>('');

    const submit = (event: React.SyntheticEvent): void => {
        onSubmitted(content);
        setContent('');
        event.preventDefault();
    };
    const handleInput = (event: React.FormEvent<HTMLInputElement>) =>
        setContent(event.currentTarget.value);

    return (
        <form className={styles.todoForm} onSubmit={submit}>
            <input
                className={styles.todoInput}
                type="text"
                required
                value={content}
                onChange={handleInput}
            />
            <button type="submit">➕</button>
        </form>
    );
};
