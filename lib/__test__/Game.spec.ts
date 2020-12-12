import Board from '../Board';

test('plays a round', () => {
  const grid = ['X', '', 'X', '', '', '', '', '', ''];
  const board = new Board(grid);
  const spy1 = jest.spyOn(board, 'hasWinner').mockImplementation(() => false);
  const spy2 = jest.spyOn(board, 'isGameDraw').mockImplementation(() => false);

  expect(board.isGameOver()).toEqual(false);
  expect(spy1).toHaveBeenCalledTimes(1);
  expect(spy2).toHaveBeenCalledTimes(1);
});
