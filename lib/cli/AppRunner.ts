import Game from '../Game';
import CommandLineIO from './CommandLineIO';
import Board from '../Board';
import ConsoleInteraction from './ConsoleInteraction';
import Messages from '../Messages';
import GameMode from '../GameMode';

const messages = new Messages();
const board = new Board();
const display = new ConsoleInteraction(new CommandLineIO());

const game = new Game(
  new GameMode(board, display, messages),
  board,
  display,
  messages
);
game.playGame();
