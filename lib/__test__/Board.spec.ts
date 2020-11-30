import Board from '../Board';
import TestHelper from './TestHelpers/testHelper';

test('Board has no winner', () => {
  const board = new Board();

  const position = [0];
  const symbols = ['X'];

  TestHelper.fillBoard(board, position, symbols);

  expect(board.hasWinner()).toEqual(false);
});

test('Board has a winner for a row scenerio', () => {
  const board = new Board();

  const position = [0, 1, 2];
  const symbols = ['X', 'X', 'X'];
  TestHelper.fillBoard(board, position, symbols);

  expect(board.hasWinner()).toEqual(true);
});

test('Board has a winner for a column scenerio', () => {
  const board = new Board();

  const position = [0, 3, 6];
  const symbols = ['X', 'X', 'X'];
  TestHelper.fillBoard(board, position, symbols);

  expect(board.hasWinner()).toEqual(true);
});

test('Board has a winner for a diagonal scenerio', () => {
  const board = new Board();

  const position = [0, 4, 8];
  const symbols = ['X', 'X', 'X'];
  TestHelper.fillBoard(board, position, symbols);

  expect(board.hasWinner()).toEqual(true);
});

test('Win on first row scenerios', () => {
  const board = new Board();

  const position = [0, 1, 2];
  const symbols = ['X', 'X', 'X'];
  TestHelper.fillBoard(board, position, symbols);

  expect(board.hasWinner()).toEqual(true);
});

test('Does not return true if there is no winner', () => {
  const board = new Board();

  const position = [3, 4];
  const symbols = ['X', 'X'];
  TestHelper.fillBoard(board, position, symbols);

  expect(board.hasWinner()).toEqual(false);
});

test('Win on second row scenerios', () => {
  const board = new Board();

  const position = [3, 4, 5];
  const symbols = ['X', 'X', 'X'];
  TestHelper.fillBoard(board, position, symbols);

  expect(board.hasWinner()).toEqual(true);
});

test('Win on third row scenerios', () => {
  const board = new Board();

  const position = [6, 7, 8];
  const symbols = ['X', 'X', 'X'];
  TestHelper.fillBoard(board, position, symbols);

  expect(board.hasWinner()).toEqual(true);
});

test('Win on first column', () => {
  const board = new Board();

  const position = [0, 3, 6];
  const symbols = ['X', 'X', 'X'];
  TestHelper.fillBoard(board, position, symbols);

  expect(board.hasWinner()).toEqual(true);
});

test('Win on second column', () => {
  const board = new Board();

  const position = [1, 4, 7];
  const symbols = ['X', 'X', 'X'];
  TestHelper.fillBoard(board, position, symbols);

  expect(board.hasWinner()).toEqual(true);
});
test('Win on third column', () => {
  const board = new Board();

  const position = [2, 5, 8];
  const symbols = ['X', 'X', 'X'];
  TestHelper.fillBoard(board, position, symbols);

  expect(board.hasWinner()).toEqual(true);
});

test('Win on first diagonal', () => {
  const board = new Board();

  const position = [0, 4, 8];
  const symbols = ['X', 'X', 'X'];
  TestHelper.fillBoard(board, position, symbols);

  expect(board.hasWinner()).toEqual(true);
});

test('check that position 4 is not empty', () => {
  const board = new Board();

  const position = [4, 6];
  const symbols = ['X', 'X'];
  TestHelper.fillBoard(board, position, symbols);

  expect(board.isPositionTaken(4)).toEqual(true);
});

test('check if a position is free', () => {
  const board = new Board();

  expect(board.isPositionTaken(1)).toEqual(false);
});

test('checks if a position is taken', () => {
  const board = new Board();

  const position = [3, 6];
  const symbols = ['X', 'X'];
  TestHelper.fillBoard(board, position, symbols);

  expect(board.isPositionTaken(3)).toEqual(true);
  expect(board.isPositionTaken(6)).toEqual(true);
});

test('check for 8 available moves on baord', () => {
  const board = new Board();

  const position = [4];
  const symbols = ['X'];

  TestHelper.fillBoard(board, position, symbols);

  expect(board.availablePositionCount()).toEqual(8);
});

test('check for 5 available moves on baord', () => {
  const board = new Board();

  const position = [3, 4, 7, 8];
  const symbols = ['X', 'X', 'X', 'X'];
  TestHelper.fillBoard(board, position, symbols);

  expect(board.availablePositionCount()).toEqual(5);
});

test('check for 1 available moves on baord', () => {
  const board = new Board();

  const position = [0, 1, 2, 3, 4, 6, 7, 8];
  const symbols = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'];
  TestHelper.fillBoard(board, position, symbols);

  expect(board.availablePositionCount()).toEqual(1);
});
