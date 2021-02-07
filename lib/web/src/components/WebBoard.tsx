import React from 'react';
import Board from 'tictactoe-board';
import Cell from './Cell';
import '../App.css';
import { Player } from '../lib/interfaces/Player';
import { Dispatch, SetStateAction } from 'react';
interface Props {
  board: Board;
  disableCells: boolean;
  className: string;
  setBoard: Dispatch<SetStateAction<Board>>;
  setDisableCells: Dispatch<SetStateAction<boolean>>;
  opponent: Player;
  opponentMode: number;
  setShowMode: Dispatch<SetStateAction<boolean>>;
  setOpponentMode: Dispatch<SetStateAction<number>>;
}

const WebBoard = (props: Props) => {
  React.useEffect(() => {
    if (props.board.hasWinner() || props.board.isGameDraw()) {
      props.setDisableCells(true);
      return;
    }
    opponentMove();
  });

  const opponentMove = () => {
    if ([1, 2, 'X'].includes(props.opponentMode && props.board.currentMark())) {
      props.setDisableCells(true);
      const position = props.opponent.getMove(props.board);
      let newBoard = props.board.makeMove(position, props.board.currentMark());
      props.setBoard(newBoard);
    } else {
      setTimeout(() => {
        props.setDisableCells(false);
      }, 100);
    }
  };

  const playPosition = (position: number) => {
    if (!props.board.isMoveValid(position)) return;
    let newBoard = props.board.makeMove(position, props.board.currentMark());
    props.setBoard(newBoard);
    props.setOpponentMode(props.opponentMode);
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
