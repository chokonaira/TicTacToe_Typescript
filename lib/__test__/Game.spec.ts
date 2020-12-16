import Game from '../Game';
import Board from '../Board';
import { Display } from '../Display';

test('plays a winning round ', async () => {
  const grid = ['X', 'X', '', '', '', '', '', 'O', 'O'];
  const board = new Board(grid);
  const display = new DisplayMock(['3'], [false]);
  const game = new Game(board, display);

  await game.playGame();

  expect(game.isOver()).toEqual(true);
  expect(board.hasWinner()).toEqual(true);
});

test('plays a winning round including an invalid move', async () => {
  const grid = ['X', '', 'X', '', '', '', '', 'O', 'O'];
  const board = new Board(grid);
  const display = new DisplayMock(['^&*', '2'], [false]);
  const game = new Game(board, display);

  await game.playGame();

  expect(game.isOver()).toEqual(true);
  expect(board.hasWinner()).toEqual(true);
});

test('plays a draw round', async () => {
  const grid = ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', ''];
  const board = new Board(grid);
  const display = new DisplayMock(['9'], [false]);
  const game = new Game(board, display);

  await game.playGame();

  expect(game.isOver()).toEqual(true);
  expect(board.hasWinner()).toEqual(false);
  expect(board.isGameDraw()).toEqual(true);
});

test('plays a game and restarts the game in a win scenerio', async () => {
  const grid = ['X', '', '', 'X', '', '', '', 'O', 'O'];
  const board = new Board(grid);
  const display = new DisplayMock(
    ['7', '1', '4', '2', '5', '3'],
    [true, false]
  );
  const game = new Game(board, display);

  await game.playGame();

  expect(game.isOver()).toEqual(true);
  expect(game.boardGrid()).not.toEqual(grid);
});

test('plays a game and restarts the game in a draw scenerio', async () => {
  const grid = ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', ''];
  const board = new Board(grid);
  const display = new DisplayMock(
    ['9', '1', '3', '2', '4', '3', '5', '7', '8', '9'],
    [true, false]
  );
  const game = new Game(board, display);

  await game.playGame();

  expect(game.isOver()).toEqual(true);
  expect(game.boardGrid()).not.toEqual(grid);
});

class DisplayMock implements Display {
  moves: string[];
  replay: boolean[];

  constructor(moves: string[], replay: boolean[]) {
    this.moves = moves;
    this.replay = replay;
  }

  show(): void {
    return;
  }
  constructBoard(board: Board): string[] {
    return board.grid;
  }
  askUserForMove(): Promise<number> {
    return Promise.resolve(Number(this.moves.shift()));
  }
  askToRestartGame(): Promise<boolean> {
    return Promise.resolve(this.replay.shift());
  }
}
