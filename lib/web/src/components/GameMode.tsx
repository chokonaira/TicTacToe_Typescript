import React from 'react';
import GameMode from '../lib/GameMode';
import { Dispatch, SetStateAction } from 'react';
import '../App.css';

interface Props {
  gameMode: GameMode
  setShowBoard: Dispatch<SetStateAction<boolean>>;
}

const Mode = (props: Props) => {
  const [gameMode] = React.useState<GameMode>(props.gameMode);

  const modetype = (mode: number) => {
    const currentGameMode = gameMode.modeType(mode)
    console.log(currentGameMode, 'currentGameMode');
    return;
  };

  return (
    <div className="modes">
      <h4>Select Game Mode</h4>
      <div className="mode-types">
        <button onClick={()=> {modetype(1); props.setShowBoard(false)}}>Play against a Human Player</button>
        <button onClick={()=> {modetype(2); props.setShowBoard(false)}}>Play against a Smart Computer</button>
        <button onClick={()=> {modetype(3); props.setShowBoard(false)}}>Play against a Random Computer</button>
      </div>
    </div>
  );
};

export default Mode;
