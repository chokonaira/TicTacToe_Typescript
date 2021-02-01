import React from 'react';
import Board from '../lib/Board';
import Cell from './Cell';
import '../App.css';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  board: Board;
  disableCells: boolean;
  className: string;
  setBoard: Dispatch<SetStateAction<Board>>;
  setDisableCells: Dispatch<SetStateAction<boolean>>;
}

const WebBoard = (props: Props) => {
  const playPosition = (position: number) => {
    if (!props.board.isMoveValid(position)) return;
    const newBoard = props.board.makeMove(position, props.board.currentMark());

    props.setBoard(newBoard);
    if (newBoard.hasWinner() || newBoard.isGameDraw()) {
      props.setDisableCells(true);
      return;
    }
  };

  return (
    <div>
      {props.board.rows().map((row, rowIndex) => (
        <div className={props.className} key={rowIndex}>
          {row.map((_cell, colIndex) => {
            const index = rowIndex * props.board.rows().length + colIndex + 1;
            return (
              <Cell
                key={index}
                disabled={props.disableCells}
                className="cell"
                onClick={() => playPosition(index)}
                cellValue={props.board.markedBoardPositionValue(index)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default WebBoard;
