import Board from '../Board';
import Messages from '../Messages';
import { IO } from '../IO';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class ConsoleInteraction {
  io: IO;
  constructor(io: IO) {
    this.io = io;
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
    if (isNaN(answer)) {
      return this.askUserForMove();
    } else {
      return answer;
    }
  }

  async askToRestartGame(): Promise<boolean> {
    const userInput = await this.io.getUserInput(new Messages().playAgain());
    const answer = userInput.toUpperCase();
    return answer === 'Y';
  }
}

export default ConsoleInteraction;
