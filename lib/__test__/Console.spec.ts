import Board from '../Board';
import Console from '../Console';

jest.mock('readline');

test('check that position 2 has a valid symbol', () => {
  const board = new Board();
  const console = new Console();

  board.makeMove(2, 'X');
  expect(console.consoleBoardGrid(board)[1]).toEqual(board.grid[1]);
});

test('check that position 0 has a valid symbol', () => {
  const board = new Board();
  const console = new Console();

  board.makeMove(1, 'O');
  expect(console.consoleBoardGrid(board)[0]).toEqual(board.grid[0]);
});

test('check that position 5 has a valid symbol', () => {
  const board = new Board();
  const console = new Console();

  board.makeMove(6, 'X');
  expect(console.consoleBoardGrid(board)[5]).toEqual(board.grid[5]);
});
