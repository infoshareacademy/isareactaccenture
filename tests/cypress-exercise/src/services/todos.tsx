import { Todo } from '../types';

const TODOS = [
    {
        id: 1,
        content: 'do shopping',
        addedAt: new Date('2020-10-10T09:00:00Z'),
    },
    {
        id: 2,
        content: 'check internet',
        addedAt: new Date('2020-10-13T09:00:00Z'),
        doneAt: new Date('2020-10-13T09:15:00Z'),
    },
];

export const fetchTodos = async (): Promise<Todo[]> => Promise.resolve(TODOS);
