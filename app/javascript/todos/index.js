import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TodoList from './TodoList';

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('/api/todos')
      .then(response => setTodos(response.data))
      .catch(console.error);
  }, []);

  return (
    <>
      <h1>Todos</h1>
      <TodoList todos={todos} />
    </>
  );
}
