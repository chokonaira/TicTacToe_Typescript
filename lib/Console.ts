import Board from './Board';
import Messages from './Messages';
import Game from './Game';
import { IO } from './IO';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class Console {
  io: IO;
  board: Board;

  constructor(io: IO) {
    this.io = io;
  }

  async startGame(): Promise<string[]> {
    const board = new Board();
    const messages = new Messages();
    const game = new Game(board);

    console.log(messages.welcomeMassage());
    console.log(messages.gameMode());

    while (!game.isOver()) {
      console.log(this.squareBoardGrid(board));

      const move = await this.askUserForMove();
      if (board.isMoveValid(move)) {
        board.makeMove(move, board.currentMark());
      } else {
        console.log(messages.inValidMove());
      }

      if (board.hasWinner()) {
        console.log(this.squareBoardGrid(board));
        console.log(messages.winningPlayer(board.currentMark()));
        const playAgain = await this.askToRestartGame();
        if (playAgain) await this.startGame();
        console.log(messages.thankYou());
      } else if (board.isGameDraw()) {
        console.log(this.squareBoardGrid(board));
        console.log(messages.drawGame());
        const playAgain = await this.askToRestartGame();
        if (playAgain) await this.startGame();
        console.log(messages.thankYou());
      }
    }
    return;
  }

  squareBoardGrid(board: Board): string[] {
    let counter = 1;
    const result: string[] = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board.rows()[i][j] === '') {
          result.push((board.rows()[i][j] = `${counter}`));
        } else {
          result.push(board.rows()[i][j]);
        }
        counter++;
      }
    }
    return result;
  }

  async askUserForMove(): Promise<number> {
    const userInput = await this.io.getUserInput(new Messages().askPosition());
    const answer = Number(userInput);
    if (isNaN(answer)) return this.askUserForMove();
    return answer;
  }

  async askToRestartGame(): Promise<boolean> {
    const userInput = await this.io.getUserInput(new Messages().playAgain());
    const answer = userInput.toUpperCase();
    return answer === 'Y';
  }
}

export default Console;
