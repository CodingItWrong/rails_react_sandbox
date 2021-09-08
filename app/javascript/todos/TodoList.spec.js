import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import TodoList from './TodoList';

describe('TodoList', () => {
  const todo1 = {id: 1, name: 'Todo 1'};
  const todo2 = {id: 2, name: 'Todo 2'};
  const todos = [todo1, todo2];

  it('renders passed-in todo names', () => {
    render(<TodoList todos={todos} />);

    expect(screen.queryByText('Todo 1')).not.toBeNull();
    expect(screen.queryByText('Todo 2')).not.toBeNull();
  });

  it('calls the onDelete handler when a delete button is clicked', () => {
    const onDelete = jest.fn();
    render(<TodoList todos={todos} onDelete={onDelete} />);

    userEvent.click(screen.getByText(`Delete ${todo1.name}`));

    expect(onDelete).toHaveBeenCalledWith(todo1);
  });
});
