import {render} from '@testing-library/react';
import React from 'react';
import TodoList from './TodoList';

describe('TodoList', () => {
  it('renders passed-in todo names', () => {
    const todos = [
      {id: 1, name: 'Todo 1'},
      {id: 2, name: 'Todo 2'},
    ];

    const {queryByText} = render(<TodoList todos={todos} />);

    expect(queryByText('Todo 1')).not.toBeNull();
    expect(queryByText('Todo 2')).not.toBeNull();
  });
});
