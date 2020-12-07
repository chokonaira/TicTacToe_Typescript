import * as readline from 'readline';
import Board from './Board';
import Messages from './Messages';
import Game from './Game';

const sleep = (waitTimeInMs: number) =>
  new Promise((resolve) => setTimeout(resolve, waitTimeInMs));

class Console {
  board: Board;

  async startGame(): Promise<string[]> {
    const board = new Board();
    const messages = new Messages();
    const game = new Game(board);

    console.log(messages.welcomeMassage());
    console.log(messages.gameMode());

    while (!game.isOver()) {
      this.printBoard(board);

      const move = await this.askUserForMove();
      if (board.isMoveValid(move)) {
        board.makeMove(move, board.currentMark());
        continue;
      } else {
        console.log(`Invalid move, play again`);
      }

      if (board.isGameDraw()) {
        console.log(`Player ${board.currentMark()} Won`);
        break;
      }

      if (board.isGameDraw()) {
        console.log(`Its a Draw`);
        break;
      }
    }
    return;
  }

  printBoard(board: Board): number {
    let counter = 1;
    const result = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        result.push((board.rows()[i][j] = `${counter}`));
        counter++;
      }
    }
    console.log(result);
    return counter;
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

    return result;
  }
}

export default Console;
