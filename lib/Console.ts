import * as readline from 'readline';
import Board from './Board';
import Messages from './Messages';
import Game from './Game';
import { IO } from './IO';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const sleep = (waitTimeInMs: number) =>
  new Promise((resolve) => setTimeout(resolve, waitTimeInMs));

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
        console.log(messages.winningPlayer(board));
        const playAgain = await this.askToPlayAgain();
        this.playAgain(playAgain);
      } else if (board.isGameDraw()) {
        console.log(this.squareBoardGrid(board));
        console.log(messages.drawGame());
        const playAgain = await this.askToPlayAgain();
        this.playAgain(playAgain);
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
    const userInput = await this.io.getUserInput();
    const result = Number(userInput);

    if (isNaN(result)) {
      return this.askUserForMove();
    } else {
      return result;
    }
  }

  async askToPlayAgain(): Promise<string> {
    const messages = new Messages();
    const readCLI = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    let answer = undefined;
    readCLI.question(messages.playAgain(), (input: string) => {
      answer = input;
    });
    while (answer === undefined) await sleep(100);

    readCLI.close();

    return answer;
  }

  playAgain(input: string): boolean {
    const messages = new Messages();
    const userInput = input.toUpperCase();
    if (userInput === 'Y') this.startGame();
    console.log(messages.thankYou());
    return;
  }
}

export default Console;
