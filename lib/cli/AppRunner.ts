import Game from '../Game';
import CommandLineIO from './CommandLineIO';
import { Board } from 'tictactoe-game-modules';
import ConsoleInteraction from './ConsoleInteraction';
import Messages from '../Messages';

const messages = new Messages();
const board = new Board();
const display = new ConsoleInteraction(new CommandLineIO());

const game = new Game(board, display, messages);
game.playGame();
