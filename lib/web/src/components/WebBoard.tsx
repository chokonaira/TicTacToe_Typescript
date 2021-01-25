import React from 'react';
import Board from '../lib/Board';
import '../App.css';

interface Props {
  board: Board;
}

const WebBoard = (props: Props) => {
  const [board, setBoard] = React.useState<Board>(props.board);

  const playPosition = (position: number) => {
    console.log(position);
    if (!board.isMoveValid(position)) return;
    const newBoard = board.makeMove(position, board.currentMark());
    setBoard(newBoard);

  const status = `Next player is: ${board.currentMark()}`;


  return (
    
    <div className="board-container">
      <div className="status">{status}</div>
      {board.grid.map((position, index) => {
        const row = Math.trunc(0/3)
        
        return (
          <div key={index} className="row">
              <button key={index} className="cell" onClick={(()=> playPosition(index+1))}>
                {board.grid[index]}
              </button>
          </div>
        );
      })}
    </div>
  );
};

export default WebBoard;
