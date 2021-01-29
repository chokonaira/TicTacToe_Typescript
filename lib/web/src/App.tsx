import './App.css';
import Board from './lib/Board';
import DisplayBoard from './components/DisplayBoard';
import React from 'react';

interface Props {
  board: Board;
}

const App = (props: Props) => {
  
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <DisplayBoard board={props.board}/>
    </div>
  );
};

export default App;
