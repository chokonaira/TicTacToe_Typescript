import './App.css';
import Board from './lib/Board';
import WebBoard from './components/WebBoard';
import React from 'react';

const App = () => {
  const [board, setBoard] = React.useState<Board>(new Board());

  const gameStatus = () => {
    const winner = board.winningPlayer();
    let status;
    if (winner) {
      status = `Congratulations: ${winner} has won!`;
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
      <WebBoard board={board} setBoard={setBoard} gameStatus={gameStatus} />
    </div>
  );
};

export default App;
