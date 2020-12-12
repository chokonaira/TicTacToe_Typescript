import Board from './Board';
import Messages from './Messages';
import ConsoleInteraction from './ConsoleInteraction';
import { IO } from './IO';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class GameLoop {
  board: Board;
  messages: Messages;
  io: IO;
  constructor(board: Board, messages: Messages) {
    this.board = board;
    this.messages = messages;
  }
  async gameLoop(board: Board, messages: Messages): Promise<string[]> {
    const consoleInteraction = new ConsoleInteraction(this.io);
    while (!board.isGameOver()) {
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
        if (playAgain) await this.gameLoop(board, messages);
        console.log(messages.thankYou());
        break;
      } else if (board.isGameDraw()) {
        console.log(consoleInteraction.squareBoardGrid(board));
        console.log(messages.drawGame());
        const playAgain = await consoleInteraction.askToRestartGame();
        if (playAgain) await this.gameLoop(board, messages);
        console.log(messages.thankYou());
        break;
      }
    }
    return;
  }
}

export default GameLoop;
