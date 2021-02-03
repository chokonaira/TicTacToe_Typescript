import React from 'react';
import GameMode from '../lib/GameMode';
import { Dispatch, SetStateAction } from 'react';
import '../App.css';
import Game from '../lib/Game';
import Board from '../lib/Board';
import UnbeatablePlayer from '../lib/players/UnbeatablePlayer';

// import { Player } from '../lib/interfaces/Player';

interface Props {
  board: Board;
  gameMode: GameMode
  setShowBoard: Dispatch<SetStateAction<boolean>>;
}

const Mode = (props: Props) => {
  const [gameMode] = React.useState<GameMode>(props.gameMode);

  const selectMode = (mode: number) => {
    const currentMode = gameMode.modeType(mode)
    new Game(props.board, currentMode).playGame()
    console.log(currentMode)
  };

  return (
    <div className="modes">
      <h4>Select Game Mode</h4>
      <div className="mode-types">
        <button onClick={()=> {selectMode(1); props.setShowBoard(false)}}>Play against a Human Player</button>
        <button onClick={()=> {selectMode(2); props.setShowBoard(false)}}>Play against a Smart Computer</button>
        <button onClick={()=> {selectMode(3); props.setShowBoard(false)}}>Play against a Random Computer</button>
      </div>
    </div>
  );
};

export default Mode;
