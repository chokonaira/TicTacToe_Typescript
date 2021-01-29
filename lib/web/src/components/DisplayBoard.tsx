import React from 'react';
import Board from '../lib/Board';
import Cell from './Cell';
import '../App.css';

interface Props {
  board: Board;
}

const DisplayBoard = (props: Props) => {
  const [board, setBoard] = React.useState<Board>(props.board);
  const [disableCells, setDisableCells] = React.useState<boolean>(false);

  const playPosition = (position: number) => {
    if (!board.isMoveValid(position)) return;
    const newBoard = board.makeMove(position, board.currentMark());
    
    setBoard(newBoard);
    if (newBoard.hasWinner() || newBoard.isGameDraw()) {
      setDisableCells(true); return
    }
  };

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
    <div className="board-container">
      <div className="status">{gameStatus()}</div>
      <div className="commands">
        <button>Game Mode</button>
        <button onClick={() =>{ setBoard(new Board());setDisableCells(false)}}>Restart</button>
      </div>
      <div>
        {board.rows().map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((_cell, colIndex) => {
              const index = ((rowIndex * board.rows().length + colIndex) + 1);
              return (
                <Cell
                  key={index}
                  disabled={disableCells}
                  className='cell'
                  onClick={() => playPosition(index)}
                  cellValue={board.markedBoardPositionValue(index)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayBoard;
