import Game from './Game';
import Messages from './Messages';
import GameLoop from './GameLoop';
import Board from './Board';
import ConsoleInteraction from './ConsoleInteraction';
import { IO } from './IO';

let io: IO;

const game = new Game(
  new Board(),
  new GameLoop(),
  new Messages(),
  new ConsoleInteraction(io)
);
game.startConsoleGame();
