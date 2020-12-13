import Board from './Board';
import Messages from './Messages';
import GameLoop from './GameLoop';
import ConsoleInteraction from './ConsoleInteraction';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class Game {
  board: Board;
  gameLoop: GameLoop;
  messages: Messages;
  consoleInteraction: ConsoleInteraction;
  constructor(
    board: Board,
    gameLoop: GameLoop,
    messages: Messages,
    consoleInteraction: ConsoleInteraction
  ) {
    this.board = board;
    this.gameLoop = gameLoop;
    this.messages = messages;
    this.consoleInteraction = consoleInteraction;
  }
  async startConsoleGame(): Promise<string[]> {
    console.log(this.messages.welcomeMassage());
    console.log(this.messages.gameMode());

    await this.gameLoop.gameLoop(
      this.board,
      this.messages,
      this.consoleInteraction
    );
    return;
  }

  isOver(): boolean {
    return this.board.hasWinner() || this.board.isGameDraw();
  }
}

export default Game;
