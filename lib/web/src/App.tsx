import './App.css';
import Board from './lib/Board';
import DisplayBoard from './components/Display';
import React from 'react';
import GameMode from './components/GameMode';

interface Props {
  board: Board;
}

const App = (props: Props) => {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <GameMode/>
      <DisplayBoard board={props.board} />
    </div>
  );
};

export default App;
