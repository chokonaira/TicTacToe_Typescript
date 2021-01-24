import React from 'react';
import Board from '../lib/Board';
import '../App.css';

interface Props {
  board: Board;
}

const WebBoard = (props: Props) => {
  const [grid, setGrid] = React.useState<string[][]>(props.board.rows());
  const [player, setPlayer] = React.useState<string>('X');

  const playPosition = (rowIndex: number, columnIndex: number) => {
    grid.slice();
    grid[rowIndex][columnIndex] = player;
    setGrid(grid);
    setPlayer(player === 'X' ? 'O' : 'X');
  };

  const status = `Next player is: ${player}`;

  return (
    <div className="board-container">
      <div className="status">{status}</div>
      {grid.map((rows, rowIndex) => (
        <div key={rowIndex} className="row">
          {rows.map((_cols, columnIndex) => (
            <button
              key={columnIndex}
              onClick={() => playPosition(rowIndex, columnIndex)}
              className="cell"
            >
              {grid[rowIndex][columnIndex]}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WebBoard;
