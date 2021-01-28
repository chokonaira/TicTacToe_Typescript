import './App.css';
import Board from './lib/Board';
import DisplayBoard from './components/DisplayBoard';
import React from 'react';

const App = () => {
  const [board, setBoard] = React.useState<Board>(new Board());
  
  const gameStatus = () => {
    let status;
    if (board.hasWinner()) {
      status = `Congratulations: ${board.winningPlayer()} has won!`;
    } else if (board.isGameDraw()) {
      status = `Its a Draw game`;
    } else {
      status = `Next player is: ${board.currentMark()}`;
    }
    return status;
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="commands">
        <button>Game Mode</button>
        <button onClick={() => setBoard(new Board())}>Restart</button>
      </div>
      <DisplayBoard board={board} setBoard={setBoard} gameStatus={gameStatus} />
    </div>
  );
};

export default App;
