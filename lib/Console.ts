import * as readline from 'readline';
import Board from './Board';
import Messages from './Messages';
import Game from './Game';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const sleep = (waitTimeInMs: number) =>
  new Promise((resolve) => setTimeout(resolve, waitTimeInMs));

const breakLoop = (board: Board) => {
  let stop = undefined;
  while (board.hasWinner()) {
    if (board.hasWinner()) {
      stop = true;
      console.log(`Player ${board.currentMark()} Won`);
      break;
    } else if (board.isGameDraw()) {
      stop = true;
      console.log(`Its a Draw`);
      break;
    }
  }
  return stop;
};

class Console {
  board: Board;

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
        console.log(`Invalid move, play again`);
      }

      if (board.hasWinner()) {
        console.log(`Player ${board.currentMark()} Won`);
        break;
      } else if (board.isGameDraw()) {
        console.log(`Its a Draw`);
        break;
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
    const readCLI = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    let result = undefined;
    readCLI.question('What position do you want to play?', (input: string) => {
      result = Number(input);
    });

    while (result === undefined) await sleep(100);

    readCLI.close();

    return result;
  }
}

export default Console;
