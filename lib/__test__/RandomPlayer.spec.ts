import Board from '../Board';
import RandomPlayer from '../RandomPlayer';

test('random player returns a move on position 3', async () => {
  const grid = ['X', 'X', '', '', '', '', '', 'O', 'O'];
  const randomPlayer = new RandomPlayer();
  const board = new Board(grid);

  jest.spyOn(randomPlayer, 'findRandomMove').mockReturnValue(3);

  expect(randomPlayer.findRandomMove(board)).toEqual(3);
});

test('random player returns a move on the first position', async () => {
  const grid = ['', '', '', '', '', '', '', '', ''];
  const randomPlayer = new RandomPlayer();
  const board = new Board(grid);

  jest.spyOn(randomPlayer, 'findRandomMove').mockReturnValue(1);

  expect(randomPlayer.findRandomMove(board)).toEqual(1);
});
