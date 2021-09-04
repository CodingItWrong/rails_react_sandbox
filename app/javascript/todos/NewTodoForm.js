import React, {useState} from 'react';

export default function NewTodoForm({ onCreate }) {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onCreate(name).then(() => {
      setName('');
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Todo Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">
        Add
      </button>
    </form>
  )
}
