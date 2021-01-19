import Board from './Board';
import Messages from './Messages';
import { Display } from './interfaces/Display';
import { Player } from './interfaces/Player';
import GameMode from './GameMode';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class Game {
  gameMode: GameMode;
  board: Board;
  display: Display;
  messages: Messages;

  constructor(board: Board, display: Display, messages: Messages) {
    this.gameMode = new GameMode(this.board, this.display, this.messages);
    this.board = board;
    this.display = display;
    this.messages = messages;
  }

  async playGame(): Promise<string[]> {
    this.display.show(this.messages.welcomeMassage());
    const mode = await this.startGameOptions(this.messages.gameMode());
    const gameMode = new GameMode(this.board, this.display, this.messages);
    let players = gameMode.modeType(mode);
    this.display.show(this.display.constructBoard(this.board));
    let currentMark: string;
    let currentPlayer: Player;

    while (!this.isOver()) {
      currentMark = this.board.currentMark();
      currentPlayer = players[0];
      const move = await currentPlayer.getMove(this.board);

      if (this.board.isMoveValid(move)) {
        this.board = this.board.makeMove(move, currentMark);
        this.display.show(this.display.constructBoard(this.board));
        players = players.reverse();
      } else {
        this.display.show(this.messages.inValidMove());
        this.display.show(this.display.constructBoard(this.board));
      }
    }
    if (this.board.hasWinner()) {
      this.endGameOptions(this.messages.winningPlayer(currentMark));
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
    const validGameMode = [1, 2, 3];
    return validGameMode.includes(input);
  }

  isOver(): boolean {
    return this.board.hasWinner() || this.board.isGameDraw();
  }

  boardGrid(): string[] {
    const board = new Board();
    return board.grid;
  }

  gameHasWinner(): boolean {
    return this.board.hasWinner();
  }

  gameHasDraw(): boolean {
    return this.board.isGameDraw();
  }
}

export default Game;
