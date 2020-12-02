import Board from '../Board';
import Console from '../Console';

test('check that position 0 has a valid symbol', () => {
  const board = new Board();
  const console = new Console();

  board.makeMove(2, 'X');
  expect(console.printBoard(board)).toEqual(board.grid[2]);
});
