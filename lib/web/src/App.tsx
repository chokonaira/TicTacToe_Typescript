import './App.css';
import Board from './lib/Board';
import GameMode from './lib/GameMode';
import DisplayBoard from './components/Display';
import React from 'react';
import Mode from './components/GameMode';

interface Props {
  board: Board;
  gameMode: GameMode;
}

const App = (props: Props) => {
  const [showMode, setShowMode] = React.useState<boolean>(true);

  if (showMode) {
    return (
      <div className="App">
        <h2>Welcome to Tic Tac Toe</h2>
        <Mode gameMode={props.gameMode} setShowBoard={setShowMode} />
      </div>
    );
  }
  return (
    <div className="App">
      <h2>Tic Tac Toe</h2>
      <DisplayBoard board={props.board} />
    </div>
  );
};

export default App;
