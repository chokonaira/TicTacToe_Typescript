import React from 'react';
import GameMode from '../../../GameMode';
import Messages from '../../../Messages';
import { Display } from '../../../interfaces/Display';
import Board from '../../../Board';

import '../App.css';

const gameModes = new GameMode(new Board(), new Display(), new Messages())

const Mode = () => {
  const [gameMode, setGameMode] = React.useState<object>([gameModes.modeType]);

  const modetype = (mode: number) => {
    setGameMode(gameMode[mode])
    return gameMode;
  }

  return (
    <div className="modes">
      <h2>Select Game Mode</h2>
      <div className="mode-types">
        <button onClick={()=> modetype(1)}>Play Human Vs. Human Player</button>
        <button onClick={()=> modetype(2)}>Play Human Vs. Smart Computer</button>
        <button onClick={()=> modetype(3)}>Play Human Vs. Random Computer</button>
      </div>
    </div>
  );
};

export default Mode;
