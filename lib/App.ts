import Game from './Game';
import Messages from './Messages';
import GameLoop from './GameLoop';
import Board from './Board';

const game = new Game(
  new Board(),
  new GameLoop(new Board(), new Messages()),
  new Messages()
);
game.startConsoleGame();
