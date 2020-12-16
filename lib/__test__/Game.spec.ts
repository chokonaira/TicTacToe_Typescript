import Game from '../Game';
import Board from '../Board';
import { Display } from '../Display';

test('plays a winning round ', async () => {
  const grid = ['X', 'X', '', '', '', '', '', 'O', 'O'];
  const board = new Board(grid);
  const display = new DisplayMock(['3']);
  const game = new Game(board, display);

  await game.playGame();

  expect(game.isOver()).toEqual(true);
  expect(board.hasWinner()).toEqual(true);
});

test('plays a winning round including an invalid move', async () => {
  const grid = ['X', '', 'X', '', '', '', '', 'O', 'O'];
  const board = new Board(grid);
  const display = new DisplayMock(['^&*', '2']);
  const game = new Game(board, display);

  await game.playGame();

  expect(game.isOver()).toEqual(true);
  expect(board.hasWinner()).toEqual(true);
});

test('plays a draw round', async () => {
  const grid = ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', ''];
  const board = new Board(grid);
  const display = new DisplayMock(['9']);
  const game = new Game(board, display);

  await game.playGame();

  expect(game.isOver()).toEqual(true);
  expect(board.hasWinner()).toEqual(false);
  expect(board.isGameDraw()).toEqual(true);
});

class DisplayMock implements Display {
  inputs: string[];

  constructor(inputs: string[]) {
    this.inputs = inputs;
  }

  show(): void {
    return;
  }
  constructBoard(board: Board): string[] {
    return board.grid;
  }
  askUserForMove(): Promise<number> {
    return Promise.resolve(Number(this.inputs.shift()));
  }
  askToRestartGame(): Promise<boolean> {
    return Promise.resolve(false);
  }
}
