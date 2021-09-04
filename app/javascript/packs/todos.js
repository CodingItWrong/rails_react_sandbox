import React from 'react';
import ReactDOM from 'react-dom';
import Todos from '../todos';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Todos />,
    document.body.appendChild(document.createElement('div')),
  );
});
