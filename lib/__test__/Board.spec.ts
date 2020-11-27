import Board from '../Board';

xtest('Board has no winner', () => {
  const grid = ['X', '', 'X', '', '', '', '', '', ''];
  const board = new Board(grid);
  expect(board.hasWinner()).toEqual(false);
});

xtest('Board has a winner for a row scenerio', () => {
  const grid = ['X', 'X', 'X', '', '', '', '', '', ''];
  const board = new Board(grid);
  expect(board.hasWinner()).toEqual(true);
});

xtest('Board has a winner for a column scenerio', () => {
  const grid = ['X', '', '', 'X', '', '', 'X', '', ''];
  const board = new Board(grid);
  expect(board.hasWinner()).toEqual(true);
});

xtest('Board has a winner for a diagonal scenerio', () => {
  const grid = ['X', '', '', '', 'X', '', '', '', 'X'];
  const board = new Board(grid);
  expect(board.hasWinner()).toEqual(true);
});

xtest('Win on first row scenerios', () => {
  const grid = ['X', 'X', 'X', '', '', '', '', '', ''];
  const board = new Board(grid);
  expect(board.checkForWinner()).toEqual(true);
});

xtest('Does not return true if there is no winner', () => {
  const grid = ['', '', '', 'X', 'X', '', '', '', ''];
  const board = new Board(grid);
  expect(board.checkForWinner()).toEqual(false);
});
xtest('Win on second row scenerios', () => {
  const grid = ['', '', '', 'X', 'X', 'X', '', '', ''];
  const board = new Board(grid);
  expect(board.checkForWinner()).toEqual(true);
});
xtest('Win on third row scenerios', () => {
  const grid = ['', '', '', '', '', '', 'X', 'X', 'X'];
  const board = new Board(grid);
  expect(board.checkForWinner()).toEqual(true);
});
xtest('Win on first column', () => {
  const grid = ['X', '', '', 'X', '', '', 'X', '', ''];
  const board = new Board(grid);
  expect(board.checkForWinner()).toEqual(true);
});
xtest('Win on second column', () => {
  const grid = ['', 'X', '', '', 'X', '', '', 'X', ''];
  const board = new Board(grid);
  expect(board.checkForWinner()).toEqual(true);
});
xtest('Win on third column', () => {
  const grid = ['', '', 'X', '', '', 'X', '', '', 'X'];
  const board = new Board(grid);
  expect(board.checkForWinner()).toEqual(true);
});

test('Win on first diagonal', () => {
  const grid = ['X', '', '', '', 'X', '', '', '', 'X'];
  const board = new Board(grid);
  expect(board.checkForWinner()).toEqual(true);
});
xtest('Win on second diagonal', () => {
  const grid = ['', '', '', '', 'X', '', 'X', '', ''];
  const board = new Board(grid);
  expect(board.checkDiagonalWin()).toEqual(true);
});

xtest('check empty board state', () => {
  const grid = ['', '', '', '', '', '', '', '', ''];
  const board = new Board(grid);
  const actual = board.boardState();
  expect(actual).toEqual(grid);
});

xtest('make a move on board position 0', () => {
  const grid = ['X', '', '', '', '', '', '', '', ''];
  const board = new Board(grid);
  board.makeMove(0, 'X');
  expect(board.boardState()).toEqual(grid);
});

xtest('make a move on board position 4', () => {
  const grid = ['', '', '', '', 'X', '', '', '', ''];
  const board = new Board(grid);
  board.makeMove(4, 'X');
  expect(board.boardState()).toEqual(grid);
});

xtest('check that position 4 is not empty', () => {
  const grid = ['', '', '', '', 'X', '', 'X', '', ''];
  const board = new Board(grid);
  expect(board.isNotEmptyPosition(4)).toEqual(true);
});

xtest('check that position 1 is empty', () => {
  const grid = ['', '', '', '', 'X', '', 'X', '', ''];
  const board = new Board(grid);
  expect(board.isNotEmptyPosition(1)).toEqual(false);
});

xtest('check that position 3 is not empty', () => {
  const grid = ['', '', '', 'X', 'X', '', 'X', '', ''];
  const board = new Board(grid);
  expect(board.isNotEmptyPosition(3)).toEqual(true);
});

xtest('check that position 0 is not empty', () => {
  const grid = ['X', '', '', '', 'X', '', 'X', '', ''];
  const board = new Board(grid);
  expect(board.isNotEmptyPosition(0)).toEqual(true);
});
