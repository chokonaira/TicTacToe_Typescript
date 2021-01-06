import Board from '../Board';

test('Board has no winner', () => {
  const board = new Board();
  board.makeMove(1, 'X');
  expect(board.hasWinner()).toEqual(false);
});

test('Board has a winner for a row scenerio', () => {
  const board = new Board();

  board.makeMove(1, 'X');
  board.makeMove(2, 'X');
  board.makeMove(3, 'X');

  expect(board.hasWinner()).toEqual(true);
});

test('Board has a winner for a column scenerio', () => {
  const board = new Board();

  board.makeMove(1, 'X');
  board.makeMove(4, 'X');
  board.makeMove(7, 'X');

  expect(board.hasWinner()).toEqual(true);
});

test('Board has a winner for a diagonal scenerio', () => {
  const board = new Board();

  board.makeMove(1, 'X');
  board.makeMove(5, 'X');
  board.makeMove(9, 'X');

  expect(board.hasWinner()).toEqual(true);
});

test('Does not return true if there is no winner', () => {
  const board = new Board();

  board.makeMove(4, 'X');
  board.makeMove(5, 'X');

  expect(board.hasWinner()).toEqual(false);
});

test('checks for a winner in rows', () => {
  const board1 = new Board();
  const board2 = new Board();
  const board3 = new Board();

  board1.makeMove(1, 'X');
  board1.makeMove(2, 'X');
  board1.makeMove(3, 'X');

  board2.makeMove(4, 'X');
  board2.makeMove(5, 'X');
  board2.makeMove(6, 'X');

  board3.makeMove(7, 'X');
  board3.makeMove(8, 'X');
  board3.makeMove(9, 'X');

  expect(board1.hasWinner()).toEqual(true);
  expect(board2.hasWinner()).toEqual(true);
  expect(board3.hasWinner()).toEqual(true);
});

test('Win on columns', () => {
  const board1 = new Board();
  const board2 = new Board();
  const board3 = new Board();

  board1.makeMove(1, 'X');
  board1.makeMove(4, 'X');
  board1.makeMove(7, 'X');

  board2.makeMove(2, 'X');
  board2.makeMove(5, 'X');
  board2.makeMove(8, 'X');

  board3.makeMove(3, 'X');
  board3.makeMove(6, 'X');
  board3.makeMove(9, 'X');

  expect(board1.hasWinner()).toEqual(true);
  expect(board2.hasWinner()).toEqual(true);
  expect(board3.hasWinner()).toEqual(true);
});

test('Win on diagonals', () => {
  const board1 = new Board();
  const board2 = new Board();

  board1.makeMove(1, 'X');
  board1.makeMove(5, 'X');
  board1.makeMove(9, 'X');

  board2.makeMove(3, 'X');
  board2.makeMove(5, 'X');
  board2.makeMove(7, 'X');

  expect(board1.hasWinner()).toEqual(true);
  expect(board2.hasWinner()).toEqual(true);
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
  board.makeMove(1, 'X');
  board.makeMove(2, 'X');
  board.makeMove(3, 'X');
  board.makeMove(4, 'X');
  board.makeMove(6, 'X');
  board.makeMove(7, 'X');
  board.makeMove(8, 'X');
  board.makeMove(9, 'X');

  expect(board.availablePositionCount()).toEqual(1);
});

test('check for actual draw on board', () => {
  const board = new Board();
  //XOX
  //XOX
  //OXO

  board.makeMove(1, 'X');
  board.makeMove(2, 'O');
  board.makeMove(3, 'X');
  board.makeMove(4, 'X');
  board.makeMove(5, 'O');
  board.makeMove(6, 'X');
  board.makeMove(7, 'O');
  board.makeMove(8, 'X');
  board.makeMove(9, 'O');

  expect(board.isGameDraw()).toEqual(true);
});

test('checks for no Draw on board if there a Win', () => {
  const board = new Board();

  board.makeMove(1, 'O');
  board.makeMove(2, 'X');
  board.makeMove(3, 'X');
  board.makeMove(4, 'X');
  board.makeMove(5, 'O');
  board.makeMove(6, 'O');
  board.makeMove(7, 'X');
  board.makeMove(8, 'X');
  board.makeMove(9, 'X');

  expect(board.isGameDraw()).toEqual(false);
});

test('checks for no Draw if there is still available Position on board', () => {
  const board = new Board();

  board.makeMove(0, 'O');
  board.makeMove(1, 'O');
  board.makeMove(2, 'X');
  board.makeMove(3, 'X');
  board.makeMove(5, 'O');
  board.makeMove(6, 'O');
  board.makeMove(7, 'X');
  board.makeMove(8, 'X');

  expect(board.isGameDraw()).toEqual(false);
});

test('checks for game over if there is a win on the board', () => {
  const board = new Board();

  board.makeMove(1, 'X');
  board.makeMove(5, 'X');
  board.makeMove(9, 'X');

  expect(board.isGameOver()).toEqual(true);
});

test('checks for game over if there is a draw on the board', () => {
  const board = new Board();

  board.makeMove(1, 'O');
  board.makeMove(2, 'X');
  board.makeMove(3, 'X');
  board.makeMove(4, 'X');
  board.makeMove(5, 'O');
  board.makeMove(6, 'O');
  board.makeMove(7, 'X');
  board.makeMove(8, 'X');
  board.makeMove(9, 'X');

  expect(board.isGameOver()).toEqual(true);
});

test('Does not return game over if there is not over', () => {
  const board = new Board();

  board.makeMove(1, 'O');
  board.makeMove(2, 'X');
  board.makeMove(3, 'X');
  board.makeMove(4, 'X');
  board.makeMove(5, 'O');
  board.makeMove(7, 'X');
  board.makeMove(8, 'X');

  expect(board.isGameOver()).toEqual(false);
});

test('check that current mark is X for an empty board', () => {
  const board = new Board();

  expect(board.availablePositionCount()).toBe(9);
  expect(board.currentMark()).toEqual('X');
});

test('check that current mark is O if the first player made a move', () => {
  const board = new Board();

  board.makeMove(1, board.currentMark());

  expect(board.availablePositionCount()).toBe(8);
  expect(board.grid).toContain('X');
  expect(board.currentMark()).toEqual('O');
});

test('check that all positions are free on the baord', () => {
  const board = new Board();

  const actual = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  expect(board.availablePositions()).toEqual(actual);
});

test('returns available positions after moves were made', () => {
  const board = new Board();
  board.makeMove(1, board.currentMark());
  board.makeMove(4, board.currentMark());
  board.makeMove(5, board.currentMark());

  const actual = [2, 3, 6, 7, 8, 9];

  expect(board.availablePositions()).toEqual(actual);
});

test('checks if a move is valid', () => {
  const board = new Board();

  board.makeMove(1, 'X');

  expect(board.isMoveValid(1)).toEqual(false);
  expect(board.isMoveValid(2)).toEqual(true);
});

test('checks that the winning player is X', () => {
  const board = new Board();

  board.makeMove(1, 'X');
  board.makeMove(2, 'X');
  board.makeMove(3, 'X');

  expect(board.winningPlayer()).toEqual('X');
});

test('checks that the winning player is O', () => {
  const board = new Board();

  board.makeMove(1, 'O');
  board.makeMove(2, 'O');
  board.makeMove(3, 'O');

  expect(board.winningPlayer()).toEqual('O');
});

test('checks that there is no winner on the board', () => {
  const board = new Board();

  board.makeMove(1, 'O');
  board.makeMove(2, 'X');
  board.makeMove(3, 'O');

  expect(board.winningPlayer()).toEqual('');
});
