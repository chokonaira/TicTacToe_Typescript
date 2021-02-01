import React from 'react';
import Board from '../lib/Board';
import WebBoard from './WebBoard';
import GameStatus from './Status';
import Buttons from './Buttons';
import '../App.css';

interface Props {
  board: Board;
}

const DisplayBoard = (props: Props) => {
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
        board={board}
        setBoard={setBoard}
        setDisableCells={setDisableCells}
        disableCells={disableCells}
        className="row"
      />
    </div>
  );
};

export default DisplayBoard;
