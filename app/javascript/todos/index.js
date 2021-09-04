import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('/api/todos')
      .then(response => setTodos(response.data))
      .catch(console.error);
  }, []);

  function handleCreate(name) {
    return axios
      .post('/api/todos', {name})
      .then(response => {
        const todo = response.data;
        setTodos([...todos, todo]);
      });
  }

  function handleDelete(todo) {
    return axios
      .delete(`/api/todos/${todo.id}`)
      .then(() => {
        setTodos(todos.filter(t => t.id !== todo.id));
      });
  }

  return (
    <>
      <h1>Todos</h1>
      <NewTodoForm onCreate={handleCreate} />
      <TodoList todos={todos} onDelete={handleDelete} />
    </>
  );
}
