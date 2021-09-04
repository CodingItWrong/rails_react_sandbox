import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import NewTodoForm from './NewTodoForm';

describe('NewTodoForm', () => {
  describe('submitting the form', () => {
    const newTodoName = 'my todo name';

    let onCreate;

    beforeEach(() => {
      onCreate = jest.fn();

      render(<NewTodoForm onCreate={onCreate} />);

      userEvent.type(screen.getByLabelText('New Todo Name'), newTodoName);
      userEvent.click(screen.getByText('Add'));
    });

    it('calls onCreate with the name the user entered', async () => {
      expect(onCreate).toHaveBeenCalledWith(newTodoName);
    });

    it('clears the text field', () => {
      expect(screen.getByLabelText('New Todo Name')).toHaveAttribute(
        'value',
        '',
      );
    });
  });
});
