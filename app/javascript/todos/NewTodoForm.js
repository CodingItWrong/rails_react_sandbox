import React, {useState} from 'react';

export default function NewTodoForm({onCreate}) {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onCreate(name).then(() => {
      setName('');
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">New Todo Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}
