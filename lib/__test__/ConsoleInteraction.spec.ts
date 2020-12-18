import Board from '../Board';
import { IO } from '../IO';
import ConsoleInteraction from '../cli/ConsoleInteraction';

jest.mock('readline');

test('checks that board is a square grid with position a valid symbol in postion 2', () => {
  const board = new Board();
  const console = new ConsoleInteraction(new MyIOMock([]));

  board.makeMove(2, 'X');
  expect(console.constructBoard(board)[1]).toEqual(board.grid[1]);
});

test('checks that board is a square grid with position a valid symbol in postion 1', () => {
  const board = new Board();
  const console = new ConsoleInteraction(new MyIOMock([]));

  board.makeMove(1, 'O');
  expect(console.constructBoard(board)[0]).toEqual(board.grid[0]);
});

test('checks that board is a square grid with position a valid symbol in postion 6', () => {
  const board = new Board();
  const console = new ConsoleInteraction(new MyIOMock([]));

  board.makeMove(6, 'X');
  expect(console.constructBoard(board)[5]).toEqual(board.grid[5]);
});

test('user provides valid move as an input', async () => {
  const console = new ConsoleInteraction(new MyIOMock(['1']));

  const actual = await console.askUserForMove('test');

  expect(actual).toEqual(1);
});

test('user provides invalid move as an input', async () => {
  const console = new ConsoleInteraction(new MyIOMock(['%^&', '2']));

  const actual = await console.askUserForMove('test');

  expect(actual).toEqual(2);
});

test('user provides a valid input  of Y that restarts a game', async () => {
  const console = new ConsoleInteraction(new MyIOMock(['y']));

  const actual = await console.askToRestartGame('test');

  expect(actual).toEqual(true);
});

test('user provides a invalid input of N', async () => {
  const console = new ConsoleInteraction(new MyIOMock(['n']));

  const actual = await console.askToRestartGame('test');

  expect(actual).toEqual(false);
});

class MyIOMock implements IO {
  inputs: string[];

  constructor(inputs: string[]) {
    this.inputs = inputs;
  }

  getUserInput(): Promise<string> {
    return Promise.resolve(this.inputs.shift());
  }

  log(): void {
    return;
  }
}
