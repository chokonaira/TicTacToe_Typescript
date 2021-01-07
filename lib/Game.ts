import Board from './Board';
import Messages from './Messages';
import { Display } from './Display';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class Game {
  board: Board;
  display: Display;
  messages: Messages;

  constructor(board: Board, display: Display, messages: Messages) {
    this.board = board;
    this.display = display;
    this.messages = messages;
  }

  async playGame(): Promise<string[]> {
    await this.startGameOptions(this.messages.gameMode());
    let currentPlayer: string;

    while (!this.isOver()) {
      this.display.show(this.messages.welcomeMassage());
      this.display.show(this.display.constructBoard(this.board));

      const move = await this.display.askUserForMove(
        this.messages.askPosition()
      );
      currentPlayer = this.board.currentMark();
      if (this.board.isMoveValid(move)) {
        this.board.makeMove(move, currentPlayer);
      } else {
        this.display.show(this.messages.inValidMove());
      }
    }
    if (this.board.hasWinner()) {
      this.endGameOptions(this.messages.winningPlayer(currentPlayer));
    } else {
      this.endGameOptions(this.messages.drawGame());
    }
    return;
  }

  async startGameOptions(message: string): Promise<string[]> {
    const mode = await this.display.askUserForMove(message);
    if (!this.board.isModeValid(mode)) {
      this.display.show(this.messages.inValidGameMode());
      return new Game(new Board(), this.display, this.messages).playGame();
    }
  }

  async endGameOptions(message: string): Promise<void> {
    this.display.show(this.display.constructBoard(this.board));
    this.display.show(message);
    const playAgain = await this.display.askToRestartGame(
      this.messages.playAgain()
    );
    if (playAgain) {
      new Game(new Board(), this.display, this.messages).playGame();
    } else {
      this.display.show(this.messages.thankYou());
    }
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
