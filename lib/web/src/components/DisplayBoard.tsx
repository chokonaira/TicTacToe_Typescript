import React from 'react';
import Board from '../lib/Board';
import Cell from './Cell';
import { Dispatch, SetStateAction } from 'react';
import '../App.css';

interface Props {
  board: Board;
  setBoard: Dispatch<SetStateAction<Board>>;
  gameStatus: () => string;
}

const DisplayBoard = (props: Props) => {
  const [disableCells, setDisableCells] = React.useState<boolean>(false);

  const playPosition = (position: number) => {
    if (!props.board.isMoveValid(position)) return;
    if (props.board.hasWinner() || props.board.isGameDraw()) {
      setDisableCells(!disableCells); return
    }
    const newBoard = props.board.makeMove(position, props.board.currentMark());
    
    props.setBoard(newBoard);
  };

  return (
    <div className="board-container">
      <div className="status">{props.gameStatus()}</div>
      <div>
        {props.board.rows().map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((_cell, colIndex) => {
              const index = ((rowIndex * props.board.rows().length + colIndex) + 1);
              return (
                <Cell
                  key={index}
                  disabled={disableCells}
                  className='cell'
                  onClick={() => playPosition(index)}
                  cellValue={props.board.markedBoardPositionValue(index)}
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
