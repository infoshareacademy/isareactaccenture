import React from 'react';
import { Todo } from '../../types';

import styles from './Item.module.css';

type Actions = {
  deleteTodo: (id: number) => void;
  markTodoDone: (id: number) => void;
  markTodoNotDone: (id: number) => void;
};

export const Item = ({ todo, actions }: { todo: Todo; actions: Actions }) => {
  const isChecked = !!todo.doneAt;

  const checkItem = () => {
    isChecked
      ? actions.markTodoNotDone(todo.id)
      : actions.markTodoDone(todo.id);
  };

  const deleteTodo = () => actions.deleteTodo(todo.id);

  return (
    <div className={styles.container}>
      <label className={isChecked ? styles.done : ''}>
        <input type='checkbox' checked={isChecked} onChange={checkItem} />
        <span>{todo.content}</span>
      </label>
      <button onClick={deleteTodo}>🗑</button>
    </div>
  );
};
