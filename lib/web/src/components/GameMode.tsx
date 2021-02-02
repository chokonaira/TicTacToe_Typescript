import React from 'react';
import GameMode from '../lib/GameMode';

import '../App.css';

const Mode = () => {
  const [gameMode, setGameMode] = React.useState<GameMode>(new GameMode());

  const modetype = (mode: number) => {
    // modeTypes[mode];
    // setGameMode(gameMode.Mode)
    console.log(gameMode.modeType(mode));
    // return gameMode[mode];
  };

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
