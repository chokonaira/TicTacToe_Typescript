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
    this.board = board;
    this.display = display;
    this.messages = messages;
    this.gameMode = new GameMode(this.board, this.display, this.messages);
  }

  async playGame(): Promise<string[]> {
    this.display.show(this.messages.welcomeMassage());
    const mode = await this.startGameOptions(this.messages.gameMode());
    const gameMode = new GameMode(this.board, this.display, this.messages);
    let players = gameMode.modeType(mode);
    this.display.show(this.display.constructBoard(this.board));

    await this.recurs(players)

    if (this.board.hasWinner()) {
      this.endGameOptions(this.messages.winningPlayer(this.board.winningPlayer()));
    } else {
      this.endGameOptions(this.messages.drawGame());
    }
    return;
  }

  async recurs(players: Player[]): Promise<string[]>{
      let currentMark: string;
      let currentPlayer: Player;
      currentMark = this.board.currentMark();
      currentPlayer = players[0];

      const move = await currentPlayer.getMove(this.board);

      this.playMove(move, players, currentMark)

    if (!this.isOver()) {
      return this.recurs(players)
    }
    return this.board.grid
  }

  playMove(move: number, players: Player[], currentMark: string): void {
    if (this.board.isMoveValid(move)) {
      this.board = this.board.makeMove(move, currentMark);
      this.display.show(this.display.constructBoard(this.board));
      players = players.reverse();
    } else { 
      this.display.show(this.messages.inValidMove());
      this.display.show(this.display.constructBoard(this.board));
    }
  }

  PrintCLIBoard(display: Display): void {
    display.constructBoard(this.board);
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