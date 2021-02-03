import React from 'react';
import Board from '../lib/Board';
import Cell from './Cell';
import '../App.css';
import { Player } from '../lib/interfaces/Player';
import { Dispatch, SetStateAction } from 'react';
import UnbeatablePlayer from '../lib/players/UnbeatablePlayer'
interface Props {
  board: Board;
  disableCells: boolean;
  className: string;
  setBoard: Dispatch<SetStateAction<Board>>;
  setDisableCells: Dispatch<SetStateAction<boolean>>;
  opponent: Player
  opponentMode: number
}

const WebBoard = (props: Props) => {
  const playPosition = (position: number) => {
    if (!props.board.isMoveValid(position)) return;
    let newBoard = props.board.makeMove(position, props.board.currentMark());
    // if([1].includes(props.opponentMode)){
      console.log(props.opponentMode);
    // }
    //  if gameMode === (1 | 2) {
    //   const position = props.opponent.getMove(newBoard);
    //   newBoard = newBoard.makeMove(position, props.board.currentMark());
    //  } 
     console.log(props.opponent);
     

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
