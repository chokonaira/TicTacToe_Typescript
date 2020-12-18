import Game from '../Game';
import CommandLineIO from './CommandLineIO';
import Board from '../Board';
import ConsoleInteraction from './ConsoleInteraction';
import Messages from '../Messages';

const game = new Game(
  new Board(),
  new ConsoleInteraction(new CommandLineIO()),
  new Messages()
);
game.playGame();
