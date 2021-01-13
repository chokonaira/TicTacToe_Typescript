import Board from './Board';
import Messages from './Messages';
import { Display } from './Display';
import Minimax from './Minimax';
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
    const randomPlayer = new Minimax('X', 'O');

    this.display.show(this.messages.welcomeMassage());
    const mode = await this.startGameOptions(this.messages.gameMode());
    this.display.show(this.display.constructBoard(this.board));
    let currentPlayer: string;

    while (!this.isOver()) {
      currentPlayer = this.board.currentMark();
      let move: number;
      if (mode === 2) {
        move = randomPlayer.findBestMove(this.board);
      } else {
        move = await this.display.askUserForInput(this.messages.askPosition());
      }
      if (this.board.isMoveValid(move)) {
        this.board.makeMove(move, currentPlayer);
        this.display.show(this.display.constructBoard(this.board));
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

  async startGameOptions(message: string): Promise<number> {
    const mode = await this.display.askUserForInput(message);
    if (!this.isModeValid(mode)) {
      this.display.show(this.messages.inValidGameMode());
      return this.startGameOptions(message);
    }
    return mode;
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

  isModeValid(input: number): boolean {
    const validGameMode = [1, 2];
    return validGameMode.includes(input);
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
