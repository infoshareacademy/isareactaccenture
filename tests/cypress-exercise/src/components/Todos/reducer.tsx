import { Todo } from '../../types';
import { Action } from './actions';

export type State = {
    showAll: boolean;
    todos: Todo[];
};

export const initialState: State = {
    showAll: false,
    todos: [],
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length + 1,
                        addedAt: new Date(),
                        content: action.payload,
                    },
                ],
            };
        case 'DELETE':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        case 'MARK_DONE':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload ? { ...todo, doneAt: new Date() } : todo,
                ),
            };
        case 'MARK_NOT_DONE':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        const { doneAt, ...task } = todo;
                        return task;
                    } else {
                        return todo;
                    }
                }),
            };
        case 'TOGGLE_SHOW_ALL':
            return {
                ...state,
                showAll: !state.showAll,
            };
        default:
            return state;
    }
};
