import Board from '../Board';

test('Board has no winner', () => {
  const board = new Board();
  board.makeMove(0, 'X');
  expect(board.hasWinner()).toEqual(false);
});

test('Board has a winner for a row scenerio', () => {
  const board = new Board();

  board.makeMove(0, 'X');
  board.makeMove(1, 'X');
  board.makeMove(2, 'X');

  expect(board.hasWinner()).toEqual(true);
});

test('Board has a winner for a column scenerio', () => {
  const board = new Board();

  board.makeMove(0, 'X');
  board.makeMove(3, 'X');
  board.makeMove(6, 'X');

  expect(board.hasWinner()).toEqual(true);
});

test('Board has a winner for a diagonal scenerio', () => {
  const board = new Board();

  board.makeMove(0, 'X');
  board.makeMove(4, 'X');
  board.makeMove(8, 'X');

  expect(board.hasWinner()).toEqual(true);
});

test('Win on first row scenerios', () => {
  const board = new Board();

  board.makeMove(0, 'X');
  board.makeMove(1, 'X');
  board.makeMove(2, 'X');

  expect(board.hasWinner()).toEqual(true);
});

test('Does not return true if there is no winner', () => {
  const board = new Board();

  board.makeMove(3, 'X');
  board.makeMove(4, 'X');

  expect(board.hasWinner()).toEqual(false);
});

test('Win on second row scenerios', () => {
  const board = new Board();

  board.makeMove(3, 'X');
  board.makeMove(4, 'X');
  board.makeMove(5, 'X');

  expect(board.hasWinner()).toEqual(true);
});
test('Win on third row scenerios', () => {
  const board = new Board();

  board.makeMove(6, 'X');
  board.makeMove(7, 'X');
  board.makeMove(8, 'X');

  expect(board.hasWinner()).toEqual(true);
});

test('Win on first column', () => {
  const board = new Board();

  board.makeMove(0, 'X');
  board.makeMove(3, 'X');
  board.makeMove(6, 'X');

  expect(board.hasWinner()).toEqual(true);
});

test('Win on second column', () => {
  const board = new Board();

  board.makeMove(1, 'X');
  board.makeMove(4, 'X');
  board.makeMove(7, 'X');

  expect(board.hasWinner()).toEqual(true);
});
test('Win on third column', () => {
  const board = new Board();

  board.makeMove(2, 'X');
  board.makeMove(5, 'X');
  board.makeMove(8, 'X');

  expect(board.hasWinner()).toEqual(true);
});

test('Win on first diagonal', () => {
  const board = new Board();

  board.makeMove(0, 'X');
  board.makeMove(4, 'X');
  board.makeMove(8, 'X');

  expect(board.hasWinner()).toEqual(true);
});

test('check that position 4 is not empty', () => {
  const board = new Board();

  board.makeMove(4, 'X');
  board.makeMove(6, 'X');

  expect(board.isPositionTaken(4)).toEqual(true);
});

test('check if a position is free', () => {
  const board = new Board();

  expect(board.isPositionTaken(1)).toEqual(false);
});

test('checks if a position is taken', () => {
  const board = new Board();

  board.makeMove(3, 'X');
  board.makeMove(6, 'X');

  expect(board.isPositionTaken(3)).toEqual(true);
  expect(board.isPositionTaken(6)).toEqual(true);
});

test('check for 8 available moves on baord', () => {
  const board = new Board();
  board.makeMove(4, 'X');
  expect(board.availablePositionCount()).toEqual(8);
});

test('check for 5 available moves on baord', () => {
  const board = new Board();
  board.makeMove(3, 'X');
  board.makeMove(4, 'X');
  board.makeMove(7, 'X');
  board.makeMove(8, 'X');
  expect(board.availablePositionCount()).toEqual(5);
});

test('check for 1 available moves on baord', () => {
  const board = new Board();
  board.makeMove(0, 'X');
  board.makeMove(1, 'X');
  board.makeMove(2, 'X');
  board.makeMove(3, 'X');
  board.makeMove(4, 'X');
  board.makeMove(6, 'X');
  board.makeMove(7, 'X');
  board.makeMove(8, 'X');
  expect(board.availablePositionCount()).toEqual(1);
});
