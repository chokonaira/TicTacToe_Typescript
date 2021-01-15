import { IO } from '../interfaces/IO';
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

  log(string: string | string[]): void {
    console.log(string);
    return;
  }
}

export default CommandLineIO;
