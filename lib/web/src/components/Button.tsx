import { Board } from 'tictactoe-game-modules';
import '../App.css';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  className: string;
  setBoard: Dispatch<SetStateAction<Board>>;
  setDisableCells: Dispatch<SetStateAction<boolean>>;
  setShowMode: Dispatch<SetStateAction<boolean>>;
  gameMode: string;
  restart: string;
}

const Button = (props: Props) => (
  <div className={props.className}>
    <button
      onClick={() => {
        props.setShowMode(true);
      }}
    >
      {props.gameMode}
    </button>
    <button
      onClick={() => {
        props.setBoard(new Board());
        props.setDisableCells(false);
      }}
    >
      {props.restart}
    </button>
  </div>
);

export default Button;
