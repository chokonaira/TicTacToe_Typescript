import Board from './Board';
import Messages from './Messages';
import { Display } from './Display';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class Game {
  board: Board;
  display: Display;

  constructor(board: Board, display: Display) {
    this.board = board;
    this.display = display;
  }

  async playGame(): Promise<string[]> {
    const messages = new Messages();
    this.display.show(messages.welcomeMassage());
    this.display.show(messages.gameMode());

    while (!this.isOver()) {
      this.display.show(this.display.constructBoard(this.board));

      const move = await this.display.askUserForMove();
      const currentPlayer = this.board.currentMark();
      if (this.board.isMoveValid(move)) {
        this.board.makeMove(move, currentPlayer);
      } else {
        this.display.show(messages.inValidMove());
      }

      if (this.board.hasWinner()) {
        this.display.show(this.display.constructBoard(this.board));
        this.display.show(messages.winningPlayer(currentPlayer));
        const playAgain = await this.display.askToRestartGame();
        if (playAgain) {
          new Game(new Board(), this.display).playGame();
        } else {
          this.display.show(messages.thankYou());
        }
        break;
      } else if (this.board.isGameDraw()) {
        this.display.show(this.display.constructBoard(this.board));
        this.display.show(messages.drawGame());
        const playAgain = await this.display.askToRestartGame();
        if (playAgain) {
          new Game(new Board(), this.display).playGame();
        } else {
          this.display.show(messages.thankYou());
        }
        break;
      }
    }
    return;
  }

  isOver(): boolean {
    return this.board.hasWinner() || this.board.isGameDraw();
  }

  boardGrid(): string[] {
    const board = new Board();
    return board.grid;
  }
}

export default Game;
