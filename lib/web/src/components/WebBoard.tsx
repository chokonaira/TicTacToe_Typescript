import React from 'react';
import Board from '../lib/Board';
import Button from './Button';
import { Dispatch, SetStateAction } from 'react';
import '../App.css';

interface Props {
  board: Board;
  setBoard: Dispatch<SetStateAction<Board>>;
  gameStatus: () => string;
}

const WebBoard = (props: Props) => {
  const [disableCells, setDisableCells] = React.useState<boolean>(false);

  const playPosition = (position: number) => {
    console.log(position);
    if (!props.board.isMoveValid(position)) return;
    if (props.board.hasWinner()) {
      setDisableCells(true);
      return;
    }
    const newBoard = props.board.makeMove(position, props.board.currentMark());
    props.setBoard(newBoard);
  };

  return (
    <div className="board-container">
      <div className="status">{props.gameStatus()}</div>
      <div>
        {props.board.rows().map((row, rowIndex) => (
          <div className="board-row" key={rowIndex}>
            {row.map((_cell, colIndex) => {
              const index = ((rowIndex * props.board.rows().length + colIndex) + 1);
              return (
                <Button
                  key={index}
                  disabled={disableCells}
                  className='cell'
                  onClick={() => playPosition(index)}
                  cellValue={props.board.grid[index-1]}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebBoard;
