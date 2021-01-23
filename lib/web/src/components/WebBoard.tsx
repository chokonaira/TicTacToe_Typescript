import React from 'react';
import Board from '../lib/Board';
import '../App.css';

interface Props {
  board: Board;
}

const WebBoard = (props: Props) => {
  const [grid, setGrid] = React.useState<string[]>(props.board.grid);

  const playPosition = (index: number) => {
    grid.slice();
    grid[index] = 'X';
    setGrid(grid);
  };

  const status = `Next player is: X`;

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
