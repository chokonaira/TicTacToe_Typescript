import { IO } from './IO';
import * as readline from 'readline';
import Messages from './Messages';

const sleep = (waitTimeInMs: number) =>
  new Promise((resolve) => setTimeout(resolve, waitTimeInMs));

class CommandLineIO implements IO {
  messages: Messages;

  constructor() {
    this.messages = new Messages();
  }

  async getUserInput(): Promise<string> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    let answer = undefined;
    rl.question(this.messages.askPosition(), (input: string) => {
      answer = input;
    });

    while (answer === undefined) await sleep(10);

    return answer;
  }
}

export default CommandLineIO;
