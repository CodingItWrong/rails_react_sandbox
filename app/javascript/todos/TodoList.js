import React from 'react';

export default function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.name}
          <button onClick={() => onDelete(todo)}>
            Delete {todo.name}
          </button>
        </li>
      ))}
    </ul>
  )
}
