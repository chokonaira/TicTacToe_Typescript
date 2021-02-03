import './App.css';
import Board from './lib/Board';
import GameMode from './lib/GameMode';
import Display from './components/Display';
import React from 'react';
import Mode from './components/GameMode';
import { Player } from './lib/interfaces/Player';

interface Props {
  board: Board;
  gameMode: GameMode;
}

const App = (props: Props) => {
  const [showMode, setShowMode] = React.useState<boolean>(true);
  const [opponent, setOpponent] = React.useState<Player>(props.gameMode.modeType(0));
  const [opponentMode, setOpponentMode] = React.useState<number>(0);

  if (showMode) {
    return (
      <div className="App">
        <h2>Welcome to Tic Tac Toe</h2>
        <Mode
          gameMode={props.gameMode}
          setShowBoard={setShowMode}
          board={props.board}
          setOpponent={setOpponent}
          setOpponentMode={setOpponentMode}
        />
      </div>
    );
  }
  return (
    <div className="App">
      <h2>Tic Tac Toe</h2>
      <Display board={props.board} opponent={opponent} opponentMode={opponentMode} />
    </div>
  );
};

export default App;
