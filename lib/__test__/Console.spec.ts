import Board from '../Board';
import Console from '../Console';

test('check that position 2 has a valid symbol', () => {
  const board = new Board();
  const console = new Console();

  board.makeMove(2, 'X');
  expect(console.printBoard(board)).toEqual(board.grid[2]);
});

test('check that position 0 has a valid symbol', () => {
  const board = new Board();
  const console = new Console();

  board.makeMove(0, 'O');
  expect(console.printBoard(board)).toEqual(board.grid[0]);
});

test('check that position 5 has a valid symbol', () => {
  const board = new Board();
  const console = new Console();

  board.makeMove(5, 'X');
  expect(console.printBoard(board)).toEqual(board.grid[5]);
});
