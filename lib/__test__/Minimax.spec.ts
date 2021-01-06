import Minimax from '../Minimax';
import Board from '../Board';

test('checks that winning player evaluates for current player', () => {
  const grid = ['X', 'X', 'X', '', '', '', '', 'O', 'O'];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.evaluate(board)).toEqual(10);
});

test('checks that winning player evaluates for opponent player', () => {
  const grid = ['X', 'X', '', '', '', '', 'O', 'O', 'O'];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.evaluate(board)).toEqual(-10);
});
