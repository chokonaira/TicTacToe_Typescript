import Game from '../Game';
import Board from '../Board';

test('plays a round', () => {
  const grid = ['X', '', 'X', '', '', '', '', '', ''];
  const board = new Board(grid);
  const spy1 = jest.spyOn(board, 'hasWinner').mockImplementation(() => false);
  const spy2 = jest.spyOn(board, 'isGameDraw').mockImplementation(() => false);
  const game = new Game(board);

  expect(game.isOver()).toEqual(false);
  expect(spy1).toHaveBeenCalledTimes(1);
  expect(spy2).toHaveBeenCalledTimes(1);
});

test('plays a round', () => {
  const grid = ['', '', '', '', '', '', '', '', ''];
  const board = new Board(grid);
  const game = new Game(board);

  nextState = game.nextState({
    position: 1,
    playAgain: false
  });

  expect(nextState).toEqual({
    grid:  ['X', '', '', '', '', '', '', '', ''],
    current_mark: 'X'
  });
});
