import './App.css';
import Board from './lib/Board';
import WebBoard from './components/WebBoard';
import React from 'react';

const board = new Board();

const App = () => {
  const [gameBoard, setGameBoard] = React.useState<Board>(board);

  const gameStatus = () => {
    const winner = gameBoard.winningPlayer();
    let status;
    if (winner) {
      status = `Congratulations: ${winner} has won!`;
    } else {
      status = `Next player is: ${gameBoard.currentMark()}`;
    }
    return status;
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <WebBoard
        gameBoard={gameBoard}
        setGameBoard={setGameBoard}
        gameStatus={gameStatus}
      />
    </div>
  );
};

export default App;
