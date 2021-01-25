import './App.css';
import Board from './lib/Board';
import WebBoard from './components/WebBoard'
import React from 'react';

const board = new Board();

const App = () => (
    <div className="App">
        <h1>Tic Tac Toe</h1>
        <WebBoard board={board}/>
    </div>
  );

export default App;
