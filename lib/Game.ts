import Board from './Board';
import Messages from './Messages';
import { Display } from './Display';
import Minimax from './Minimax';
import RandomPlayer from './RandomPlayer';
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
    const minimax = new Minimax('X', 'O');
    const randomPlayer = new RandomPlayer();

    this.display.show(this.messages.welcomeMassage());
    const mode = await this.startGameOptions(this.messages.gameMode());
    let players = this.gameModeType(mode);
    this.display.show(this.display.constructBoard(this.board));
    let currentMark: string;
    let currentPlayer: string;

    while (!this.isOver()) {
      currentMark = this.board.currentMark();
      currentPlayer = players[0];
      let move: number;
      if (currentPlayer === 'ComputerPlayer') {
        move = minimax.findBestMove(this.board);
      } else if (currentPlayer === 'RandomPlayer') {
        move = randomPlayer.findRandomMove(this.board);
      } else {
        move = await this.display.askUserForInput(this.messages.askPosition());
      }
      if (this.board.isMoveValid(move)) {
        this.board.makeMove(move, currentMark);
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

  gameModeType(mode: number): string[] {
    const gameModeType = {
      '1': ['HumanPlayer', 'HumanPlayer'],
      '2': ['ComputerPlayer', 'HumanPlayer'],
      '3': ['RandomPlayer', 'HumanPlayer']
    };
    for (const [key, value] of Object.entries(gameModeType)) {
      if (Number(key) === mode) return value;
    }
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
}

export default Game;
