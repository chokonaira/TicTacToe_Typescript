import Board from '../lib/Board';
import '../App.css';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  className: string;
  setBoard: Dispatch<SetStateAction<Board>>;
  setDisableCells: Dispatch<SetStateAction<boolean>>;
  gameMode: string;
  restart: string;
}

const Buttons = (props: Props) => (
  <div className={props.className}>
    <button>{props.gameMode}</button>
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

export default Buttons;
