import Board from '../Board';
import Console from '../Console';
import * as readline from 'readline';
import { IO } from '../IO';

jest.mock('readline');

// test('checks that board is a square grid with position a valid symbol in postion 2', () => {
//   const board = new Board();
//   const console = new Console();

//   board.makeMove(2, 'X');
//   expect(console.squareBoardGrid(board)[1]).toEqual(board.grid[1]);
// });

// test('checks that board is a square grid with position a valid symbol in postion 1', () => {
//   const board = new Board();
//   const console = new Console();

//   board.makeMove(1, 'O');
//   expect(console.squareBoardGrid(board)[0]).toEqual(board.grid[0]);
// });

// test('checks that board is a square grid with position a valid symbol in postion 6', () => {
//   const board = new Board();
//   const console = new Console();

//   board.makeMove(6, 'X');
//   expect(console.squareBoardGrid(board)[5]).toEqual(board.grid[5]);
// });

test('user provides valid move as an input', async () => {
  const console = new Console(new MyIOMock(['1']));

  const actual = await console.askUserForMove();

  expect(actual).toEqual(1);
});

test('user provides invalid move as an input', async () => {
  const console = new Console(new MyIOMock(['%^&', '2']));

  const actual = await console.askUserForMove();

  expect(actual).toEqual(2);
});

class MyIOMock implements IO {
  moves: string[];

  constructor(moves: string[]) {
    this.moves = moves;
  }

  getUserInput(): Promise<string> {
    return Promise.resolve(this.moves.shift());
  }
}
