import React from 'react';
import GameMode from '../lib/GameMode';
import { Dispatch, SetStateAction } from 'react';
import '../App.css';
import { Player } from '../lib/interfaces/Player';
import Board from '../lib/Board';

interface Props {
  board: Board;
  gameMode: GameMode
  setShowBoard: Dispatch<SetStateAction<boolean>>;
  setOpponent: Dispatch<SetStateAction<Player>>;
  setOpponentMode: Dispatch<SetStateAction<number>>;
}

const Mode = (props: Props) => {
  const [gameMode] = React.useState<GameMode>(props.gameMode);

  const selectOpponent = (mode: number) => {
    const opponent = gameMode.modeType(mode)
    props.setOpponent(opponent)
    props.setOpponentMode(mode)
    props.setShowBoard(false);
  };

  return (
    <div className="modes">
      <h4>Select Game Mode</h4>
      <div className="mode-types">
        <button onClick={()=> {selectOpponent(0)}}>Play against a Human Player</button>
        <button onClick={()=> {selectOpponent(1)}}>Play against a Smart Computer</button>
        <button onClick={()=> {selectOpponent(2)}}>Play against a Random Computer</button>
      </div>
    </div>
  );
};

export default Mode;
