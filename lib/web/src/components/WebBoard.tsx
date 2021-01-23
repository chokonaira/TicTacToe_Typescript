import React from 'react';
import Board from '../lib/Board';
import '../App.css';

interface Props {
  board: Board;
}

const WebBoard = (props: Props) => {
  const [grid, setGrid] = React.useState<string[]>(props.board.grid);
  const [player, setPlayer] = React.useState<string>('X');

  const playPosition = (index: number) => {
    grid.slice();
    grid[index] = player;
    setGrid(grid);
    setPlayer(player === 'X' ? 'O' : 'X');
  };

  const status = `Next player is: ${player}`;

  return (
    <div className="board-container">
      {status}
      {grid.map((_cell, index) => (
        <div key={index} className="row">
          <button onClick={() => playPosition(index)} className="cell">
            {grid[index]}
          </button>
        </div>
      ))}
    </div>
  );
};

export default WebBoard;
