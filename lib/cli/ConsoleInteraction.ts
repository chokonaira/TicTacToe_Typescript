import Board from '../Board';
import { IO } from '../IO';
import { Display } from '../Display';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class ConsoleInteraction implements Display {
  io: IO;
  constructor(io: IO) {
    this.io = io;
  }

  constructBoard(board: Board): string[] {
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

  async askUserForMove(message: string): Promise<number> {
    const userInput = await this.io.getUserInput(message);
    const answer = Number(userInput);
    if (isNaN(answer)) {
      return this.askUserForMove(message);
    } else {
      return answer;
    }
  }

  async askToRestartGame(message: string): Promise<boolean> {
    const userInput = await this.io.getUserInput(message);
    const answer = userInput.toUpperCase();
    return answer === 'Y';
  }

  show(message: string | string[]): void {
    this.io.log(message);
  }
}

export default ConsoleInteraction;
