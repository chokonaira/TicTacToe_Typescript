import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Board from './lib/Board';

ReactDOM.render(
  <React.StrictMode>
    <App board={new Board()} />
  </React.StrictMode>,
  document.getElementById('root')
);
