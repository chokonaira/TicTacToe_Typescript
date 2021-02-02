import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Board from './lib/Board';
import GameMode from './lib/GameMode';

ReactDOM.render(
  <React.StrictMode>
    <App board={new Board()} gameMode={new GameMode()} />
  </React.StrictMode>,
  document.getElementById('root')
);
