import React from 'react';
import Board from '../lib/Board';
import { Dispatch, SetStateAction } from "react";
import '../App.css';

interface Props {
  gameBoard: Board;
  setGameBoard: Dispatch<SetStateAction<Board>>;
  gameStatus:() => string
}

const WebBoard = (props: Props) => {
  const [disableCells, setDisableCells] = React.useState<boolean>(false);

  const playPosition = (position: number) => {
    console.log(position);
    if (!props.gameBoard.isMoveValid(position)) return;
    if (props.gameBoard.hasWinner()){ setDisableCells(true); return} 
    const newBoard = props.gameBoard.makeMove(position, props.gameBoard.currentMark());
    props.setGameBoard(newBoard);
  };
  

  return (
    <div className="board-container">
      <div className="status">{props.gameStatus()}</div>
      {props.gameBoard.grid.map((position, index) => {
        const row = Math.trunc(0 / 3);

        return (
          <div key={index} className="row">
            <button
              key={index}
              disabled={disableCells}
              className="cell"
              onClick={() => playPosition(index + 1)}
            >
              {props.gameBoard.grid[index]}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default WebBoard;
