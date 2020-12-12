import Board from './Board';
import Messages from './Messages';
import ConsoleInteraction from './ConsoleInteraction';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class Game {
  board: Board;
  constructor(board: Board) {
    this.board = board;
  }
  async startConsoleGame(
    consoleInteraction: ConsoleInteraction
  ): Promise<string[]> {
    const board = new Board();
    const messages = new Messages();
    console.log(messages.welcomeMassage());
    console.log(messages.gameMode());

    while (!this.isOver()) {
      console.log(consoleInteraction.squareBoardGrid(board));

      const move = await consoleInteraction.askUserForMove();
      const currentPlayer = board.currentMark();
      if (board.isMoveValid(move)) {
        board.makeMove(move, currentPlayer);
      } else {
        console.log(messages.inValidMove());
      }

      if (board.hasWinner()) {
        console.log(consoleInteraction.squareBoardGrid(board));
        console.log(messages.winningPlayer(currentPlayer));
        const playAgain = await consoleInteraction.askToRestartGame();
        if (playAgain) await this.startConsoleGame(consoleInteraction);
        console.log(messages.thankYou());
        break;
      } else if (board.isGameDraw()) {
        console.log(consoleInteraction.squareBoardGrid(board));
        console.log(messages.drawGame());
        const playAgain = await consoleInteraction.askToRestartGame();
        if (playAgain) await this.startConsoleGame(consoleInteraction);
        console.log(messages.thankYou());
      }
    }
    return;
  }

  isOver(): boolean {
    return this.board.hasWinner() || this.board.isGameDraw();
  }
}

export default Game;
