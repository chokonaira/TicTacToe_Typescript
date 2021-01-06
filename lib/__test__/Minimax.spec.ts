import Minimax from '../Minimax';
import Board from '../Board';

test('checks that winning player evaluates for current player', () => {
  const board = new Board();
  const minimax = new Minimax('X', 'O');
  board.makeMove(0, 'X');
  board.makeMove(1, 'X');
  board.makeMove(2, 'X');

  expect(minimax.evaluate()).toEqual(10);
});
