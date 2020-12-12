import Board from './Board';
import Messages from './Messages';
import GameLoop from './GameLoop';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class Game {
  board: Board;
  gameLoop: GameLoop;
  messages: Messages;
  constructor(board: Board, gameLoop: GameLoop, messages: Messages) {
    this.board = board;
    this.gameLoop = gameLoop;
    this.messages = messages;
  }
  async startConsoleGame(): Promise<string[]> {
    console.log(this.messages.welcomeMassage());
    console.log(this.messages.gameMode());

    await this.gameLoop.gameLoop(this.board, this.messages);
    return;
  }

  isOver(): boolean {
    return this.board.hasWinner() || this.board.isGameDraw();
  }
}

export default Game;
