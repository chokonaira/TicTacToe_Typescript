import Board from './Board';
import Messages from './Messages';
import ConsoleInteraction from './ConsoleInteraction';
import { IO } from './IO';
import CommandLineIO from './CommandLineIO';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class Game {
  board: Board;
  consoleInteraction: ConsoleInteraction;
  io: IO;
  commandLineIO: CommandLineIO;
  constructor(
    board: Board,
    consoleInteraction: ConsoleInteraction,
    commandLineIO: CommandLineIO
  ) {
    this.board = board;
    this.consoleInteraction = consoleInteraction;
    this.commandLineIO = commandLineIO;
  }

  async playGame(): Promise<string[]> {
    const board = new Board();
    const messages = new Messages();
    this.commandLineIO.stringLogger(messages.welcomeMassage());
    this.commandLineIO.stringLogger(messages.gameMode());

    while (!this.isOver()) {
      this.commandLineIO.arrayLogger(
        this.consoleInteraction.squareBoardGrid(board)
      );

      const move = await this.consoleInteraction.askUserForMove();
      const currentPlayer = board.currentMark();
      if (board.isMoveValid(move)) {
        board.makeMove(move, currentPlayer);
      } else {
        this.commandLineIO.stringLogger(messages.inValidMove());
      }

      if (board.hasWinner()) {
        this.commandLineIO.arrayLogger(
          this.consoleInteraction.squareBoardGrid(board)
        );
        this.commandLineIO.stringLogger(messages.winningPlayer(currentPlayer));
        const playAgain = await this.consoleInteraction.askToRestartGame();
        if (playAgain) {
          this.playGame();
        } else {
          this.commandLineIO.stringLogger(messages.thankYou());
        }

        break;
      } else if (board.isGameDraw()) {
        this.commandLineIO.arrayLogger(
          this.consoleInteraction.squareBoardGrid(board)
        );
        this.commandLineIO.stringLogger(messages.drawGame());
        const playAgain = await this.consoleInteraction.askToRestartGame();
        if (playAgain) {
          this.playGame();
        } else {
          this.commandLineIO.stringLogger(messages.thankYou());
        }
        break;
      }
    }
    return;
  }

  isOver(): boolean {
    return this.board.hasWinner() || this.board.isGameDraw();
  }
}

export default Game;
