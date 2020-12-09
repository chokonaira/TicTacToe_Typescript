import Board from '../Board';
import Console from '../Console';

jest.mock('readline');

test('checks that board is a square grid with position a valid symbol in postion 2', () => {
  const board = new Board();
  const console = new Console();

  board.makeMove(2, 'X');
  expect(console.squareBoardGrid(board)[1]).toEqual(board.grid[1]);
});

test('checks that board is a square grid with position a valid symbol in postion 1', () => {
  const board = new Board();
  const console = new Console();

  board.makeMove(1, 'O');
  expect(console.squareBoardGrid(board)[0]).toEqual(board.grid[0]);
});

test('checks that board is a square grid with position a valid symbol in postion 6', () => {
  const board = new Board();
  const console = new Console();

  board.makeMove(6, 'X');
  expect(console.squareBoardGrid(board)[5]).toEqual(board.grid[5]);
});
