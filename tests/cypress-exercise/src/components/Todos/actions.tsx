type AddTodoAction = {
    type: 'ADD';
    payload: string;
};

export const addTodo = (content: string): AddTodoAction => ({
    type: 'ADD',
    payload: content,
});

export const toggleShowAll = () => ({
    type: 'TOGGLE_SHOW_ALL',
}) as const;

type DeleteTodoAction = {
    type: 'DELETE',
    payload: number
};

export const deleteTodo = (id: number): DeleteTodoAction => ({
    type: 'DELETE',
    payload: id,
});

export const markTodoDone = (id: number) => ({
    type: 'MARK_DONE',
    payload: id,
}) as const;

export const markTodoNotDone = (id: number) => ({
    type: 'MARK_NOT_DONE',
    payload: id,
}) as const;

export type Action = AddTodoAction 
    | DeleteTodoAction
    | ReturnType<typeof markTodoDone>
    | ReturnType<typeof markTodoNotDone>
    | ReturnType<typeof toggleShowAll>;