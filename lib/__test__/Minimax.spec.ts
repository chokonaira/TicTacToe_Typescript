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

test('checks that winning player evaluates to a draw', () => {
  const grid = ['X', 'X', '', '', '', '', '', 'O', 'O'];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.evaluate(board)).toEqual(0);
});

test('checks for the best initial move on an empty board state', () => {
  const grid = ['', '', '', '', '', '', '', '', ''];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.findBestMove(board)).toEqual(1);
});

// X _ X
// O _ _
// X O O
test('checks for the best move horizontally', () => {
  const grid = ['X', '', 'X', 'O', '', '', 'X', 'O', 'O'];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.findBestMove(board)).toEqual(2);
});

// O X X
// _ _ _
// O X O
test('checks for the best move vertically', () => {
  const grid = ['O', 'X', 'X', '', '', '', 'O', 'X', 'O'];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.findBestMove(board)).toEqual(5);
});

// O O X
// _ X _
// _ X O
test('checks for the best move diagonally', () => {
  const grid = ['O', 'O', 'X', '', 'X', '', '', 'X', 'O'];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.findBestMove(board)).toEqual(7);
});

// O _ _
// _ X _
// _ _ O
xtest('checks for the best move for double chances', () => {
  const grid = ['O', '', '', '', 'X', '', '', '', 'O'];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.findBestMove(board)).toEqual(3);
});

// X _ O
// O X X
// O _ O
test('checks for the best move to block opponents move', () => {
  const grid = ['X', '', 'O', 'O', 'X', 'X', 'O', '', 'O'];
  const board = new Board(grid);
  const minimax = new Minimax('X', 'O');

  expect(minimax.findBestMove(board)).toEqual(8);
});
