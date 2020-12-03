// import prompts from 'prompts';
import { ReadLine } from 'readline';
import Board from './Board';
import Messages from './Messages';
import Game from './Game';

const rl = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Console {
  board: Board;

  // printBoard(): string {
  //   var board = {
  //     1: '1',
  //     2: '2',
  //     3: '3',
  //     4: '4',
  //     5: '5',
  //     6: '6',
  //     7: '7',
  //     8: '8',
  //     9: '9'
  // };
  //   console.log('\n' +
  //       ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
  //       ' ---------\n' +
  //       ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
  //       ' ---------\n' +
  //       ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');
  //   return;
  // }

  printBoard(board: Board): string {
    let result = '';
    let counter = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        console.log(`-|${board.grid}|-`);
        result += `${board.grid[counter]}`;
        counter++;
      }
    }
    return result;
  }

  startGame(): string[] {
    const board = new Board();
    const messages = new Messages();
    const game = new Game(board);

    console.log(messages.welcomeMassage());
    console.log(messages.gameMode());

    while (!game.isOver()) {
      this.printBoard(board);

      const move = this.askUserForMove();
      board.makeMove(move, board.currentMark());

      if (game.isOver()) {
        console.log(`Player ${board.currentMark()} Won`);
        break;
      }
    }
    return;
  }

  askUserForMove(): number {
    const input = [];
    rl.question('What position do you want to play?', (position: string) => {
      input.push(Number(position));
      rl.close();
    });
    return input[0];
  }
}
export default Console;
