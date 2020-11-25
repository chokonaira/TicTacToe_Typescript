import Board from '../Board';

test('Board has no winner', () => {
  const grid = ['X', '', 'X', '', '', '', '', '', ''];
  const board = new Board(grid);
  expect(board.hasWinner('X')).toEqual(false);
});

test('Board has a winner for a row scenerio', () => {
  const grid = ['X', 'X', 'X', '', '', '', '', '', ''];
  const board = new Board(grid);
  expect(board.hasWinner('X')).toEqual(true);
});

test('Board has a winner for a column scenerio', () => {
  const grid = ['X', '', '', 'X', '', '', 'X', '', ''];
  const board = new Board(grid);
  expect(board.hasWinner('X')).toEqual(true);
});

test('Board has a winner for a diagonal scenerio', () => {
  const grid = ['X', '', '', '', 'X', '', '', '', 'X'];
  const board = new Board(grid);
  expect(board.hasWinner('X')).toEqual(true);
});

test('Win on first row', () => {
  const grid = ['X', 'X', 'X', '', '', '', '', '', ''];
  const board = new Board(grid);
  board.hasWinner('X');
  expect(board.checkRowWin('X')).toEqual(true);
});

test('Win on second row', () => {
  const grid = ['', '', '', 'X', 'X', 'X', '', '', ''];
  const board = new Board(grid);
  board.hasWinner('X');
  expect(board.checkRowWin('X')).toEqual(true);
});

test('Win on third row', () => {
  const grid = ['', '', '', '', '', '', 'X', 'X', 'X'];
  const board = new Board(grid);
  board.hasWinner('X');
  expect(board.checkRowWin('X')).toEqual(true);
});

test('check empty board state', () => {
  const grid = ['', '', '', '', '', '', '', '', ''];
  const board = new Board(grid);
  const actual = board.boardState();
  expect(actual).toEqual(grid);
});

test('make a move on board position 0', () => {
  const grid = ['X', '', '', '', '', '', '', '', ''];
  const board = new Board(grid);
  board.makeMove(0, 'X');
  expect(board.boardState()).toEqual(grid);
});

test('make a move on board position 4', () => {
  const grid = ['', '', '', '', 'X', '', '', '', ''];
  const board = new Board(grid);
  board.makeMove(4, 'X');
  expect(board.boardState()).toEqual(grid);
});
test('Win on first column', () => {
  const grid = ['X', '', '', 'X', '', '', '', '', ''];
  const board = new Board(grid);
  board.makeMove(6, 'X');
  board.hasWinner('X');
  expect(board.checkColumnWin('X')).toEqual(true);
});

test('Win on second column', () => {
  const grid = ['', 'X', '', '', '', '', '', 'X', ''];
  const board = new Board(grid);
  board.makeMove(4, 'X');
  board.hasWinner('X');
  expect(board.checkColumnWin('X')).toEqual(true);
});

test('Win on third column', () => {
  const grid = ['', '', '', '', '', 'X', '', '', 'X'];
  const board = new Board(grid);
  board.makeMove(2, 'X');
  board.hasWinner('X');
  expect(board.checkColumnWin('X')).toEqual(true);
});

test('Win on first diagonal', () => {
  const grid = ['X', '', '', '', 'X', '', '', '', ''];
  const board = new Board(grid);
  board.makeMove(8, 'X');
  board.hasWinner('X');
  expect(board.checkDiagonalWin('X')).toEqual(true);
});

test('Win on second diagonal', () => {
  const grid = ['', '', '', '', 'X', '', 'X', '', ''];
  const board = new Board(grid);
  board.makeMove(2, 'X');
  board.hasWinner('X');
  expect(board.checkDiagonalWin('X')).toEqual(true);
});
