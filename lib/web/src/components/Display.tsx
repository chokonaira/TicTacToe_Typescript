import React from 'react';
import Board from '../lib/Board';
import WebBoard from './WebBoard';
import GameStatus from './Status';
import { Player } from '../lib/interfaces/Player';
import Buttons from './Button';
import '../App.css';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  board: Board;
  opponent: Player
  opponentMode: number
  setOpponentMode:  Dispatch<SetStateAction<number>>;
  setShowBoard: Dispatch<SetStateAction<boolean>>;
}

const Display = (props: Props) => {
  const [board, setBoard] = React.useState<Board>(props.board);
  const [disableCells, setDisableCells] = React.useState<boolean>(false);

  return (
    <div className="board-container">
      <GameStatus board={board} />
      <Buttons
        className="commands"
        setBoard={setBoard}
        setDisableCells={setDisableCells}
        gameMode="Game Mode"
        restart="Restart"
      />
      <WebBoard
        opponent={props.opponent}
        opponentMode={props.opponentMode}
        setOpponentMode={props.setOpponentMode}
        setShowBoard={props.setShowBoard}
        board={board}
        setBoard={setBoard}
        setDisableCells={setDisableCells}
        disableCells={disableCells}
        className="row"
      />
    </div>
  );
};

export default Display;
