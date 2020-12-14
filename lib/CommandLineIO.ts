import { IO } from './IO';
import * as readline from 'readline';

const sleep = (waitTimeInMs: number) =>
  new Promise((resolve) => setTimeout(resolve, waitTimeInMs));

class CommandLineIO implements IO {
  async getUserInput(message: string): Promise<string> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    let answer = undefined;
    rl.question(message, (input: string) => {
      answer = input;
      rl.close();
    });

    while (answer === undefined) await sleep(100);
    return answer;
  }
}

export default CommandLineIO;
