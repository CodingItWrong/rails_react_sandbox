import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React from 'react';
import Todos from './index';

jest.mock('axios');

describe('Todos', () => {
  const todo1 = {id: 1, name: 'Todo 1'};
  const todo2 = {id: 2, name: 'Todo 2'};
  const initialTodos = [todo1, todo2];

  beforeEach(() => {
    jest.resetAllMocks();
    axios.get.mockResolvedValue({data: initialTodos});
  });

  it('loads and displays todos from the server initially', async () => {
    render(<Todos />);

    expect(axios.get).toHaveBeenCalledWith('/api/todos');

    await screen.findByText(todo1.name);
    expect(screen.queryByText(todo2.name)).not.toBeNull();
  });

  it('allows creating a todo', async () => {
    const newTodoName = 'My Todo';

    axios.post.mockResolvedValue({
      data: {
        id: 3,
        name: newTodoName,
      },
    });

    render(<Todos />);

    userEvent.type(screen.getByLabelText('New Todo Name'), newTodoName);
    userEvent.click(screen.getByText('Add'));

    // confirm todo sent to server
    expect(axios.post).toHaveBeenCalledWith('/api/todos', {
      name: newTodoName,
    });

    // confirm todo shown in list
    await screen.findByText(newTodoName);
  });

  it('allows deleting a todo', async () => {
    axios.delete.mockResolvedValue();

    render(<Todos />);

    const deleteButton = await screen.findByText(`Delete ${todo1.name}`);
    userEvent.click(deleteButton);

    // confirm todo sent to server
    expect(axios.delete).toHaveBeenCalledWith(`/api/todos/${todo1.id}`);

    // confirm todo shown in list
    await waitForElementToBeRemoved(screen.queryByText(todo1.name));
  });
});
