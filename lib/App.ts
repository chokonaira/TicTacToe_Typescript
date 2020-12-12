import Game from './Game';
import CommandLineIO from './CommandLineIO';
import Board from './Board';
import ConsoleInteraction from './ConsoleInteraction';

const game = new Game(new Board());
game.startConsoleGame(new ConsoleInteraction(new CommandLineIO()));
