import Board from '../Board';
import RandomPlayer from '../RandomPlayer';

test('random player returns a move on position 3', async () => {
  const grid = ['X', 'X', '', '', '', '', '', 'O', 'O'];
  const randomPlayer = new RandomPlayer();
  const board = new Board(grid);

  jest.spyOn(Math, 'floor').mockReturnValue(3);

  expect(randomPlayer.findRandomMove(board)).toEqual(6);
});

test('random player returns a negetive value if there are no available position on the board', async () => {
  const grid = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
  const randomPlayer = new RandomPlayer();
  const board = new Board(grid);

  jest.spyOn(Math, 'floor').mockReturnValue(0);

  expect(randomPlayer.findRandomMove(board)).toEqual(-1);
});
