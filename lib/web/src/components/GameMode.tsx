import React from 'react';
import '../App.css';

const GameMode = () => {
  return (
    <div className="modes">
      <h2>Select Game Mode</h2>
      <div className="mode-types">
        <button>Play Human Vs. Human Player</button>
        <button>Play Human Vs. Smart Computer</button>
        <button>Play Human Vs. Random Computer</button>
      </div>
    </div>
  );
};

export default GameMode;
