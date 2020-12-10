import { IO } from './IO';
import * as readline from 'readline';
import Messages from './Messages';
import Board from './Board';

const sleep = (waitTimeInMs: number) =>
  new Promise((resolve) => setTimeout(resolve, waitTimeInMs));

class CommandLineIO implements IO {
  messages: Messages;

  constructor() {
    this.messages = new Messages();
  }

  async getUserInput(): Promise<string> {
    const board = new Board();

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const messages =
      board.availablePositionCount() > 0
        ? this.messages.askPosition()
        : this.messages.playAgain();

    let answer = undefined;
    rl.question(messages, (input: string) => {
      answer = input;
    });

    while (answer === undefined) await sleep(100);

    return answer;
  }

  letsPlayAgain(input: string): boolean {
    const userInput = input.toUpperCase();
    if (userInput === 'Y') {
      return true;
    }
    return;
  }
}

export default CommandLineIO;
