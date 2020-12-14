import Board from './Board';
import Messages from './Messages';
import ConsoleInteraction from './ConsoleInteraction';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class Game {
  board: Board;
  consoleInteraction: ConsoleInteraction;

  constructor(board: Board, consoleInteraction: ConsoleInteraction) {
    this.board = board;
    this.consoleInteraction = consoleInteraction;
  }

  async playGame(): Promise<string[]> {
    const board = new Board();
    const messages = new Messages();
    console.log(messages.welcomeMassage());
    console.log(messages.gameMode());

    while (!this.isOver()) {
      console.log(this.consoleInteraction.squareBoardGrid(board));

      const move = await this.consoleInteraction.askUserForMove();
      const currentPlayer = board.currentMark();
      if (board.isMoveValid(move)) {
        board.makeMove(move, currentPlayer);
      } else {
        console.log(messages.inValidMove());
      }

      if (board.hasWinner()) {
        console.log(this.consoleInteraction.squareBoardGrid(board));
        console.log(messages.winningPlayer(currentPlayer));
        const playAgain = await this.consoleInteraction.askToRestartGame();
        if (playAgain) {
          this.playGame();
        } else {
          console.log(messages.thankYou());
        }

        break;
      } else if (board.isGameDraw()) {
        console.log(this.consoleInteraction.squareBoardGrid(board));
        console.log(messages.drawGame());
        const playAgain = await this.consoleInteraction.askToRestartGame();
        if (playAgain) {
          this.playGame();
        } else {
          console.log(messages.thankYou());
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
