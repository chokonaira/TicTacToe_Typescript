import Game from '../Game';
import Board from '../Board';
import Messages from '../Messages';
import { Display } from '../Display';

const setup = (grid: string[], moves: string[], replays: boolean[]) => {
  const board = new Board(grid);
  const messages = new Messages();
  const display = new DisplayMock(moves, replays);
  const game = new Game(board, display, messages);

  return { game, board, display, messages };
};

test('plays a winning round ', async () => {
  const grid = ['X', 'X', '', '', '', '', '', 'O', 'O'];

  const { game, board } = setup(grid, ['3'], [false]);

  await game.playGame();

  expect(game.isOver()).toEqual(true);
  expect(board.hasWinner()).toEqual(true);
});

test('plays a winning round including an invalid move', async () => {
  const grid = ['X', '', 'X', '', '', '', '', 'O', 'O'];
  const { game, board } = setup(grid, ['^&*', '2'], [false]);

  await game.playGame();

  expect(game.isOver()).toEqual(true);
  expect(board.hasWinner()).toEqual(true);
});

test('plays a draw round', async () => {
  const grid = ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', ''];
  const { game, board } = setup(grid, ['9'], [false]);

  await game.playGame();

  expect(game.isOver()).toEqual(true);
  expect(board.hasWinner()).toEqual(false);
  expect(board.isGameDraw()).toEqual(true);
});

test('plays a game and restarts the game in a win scenerio', async () => {
  const grid = ['X', '', '', 'X', '', '', '', 'O', 'O'];
  const { game } = setup(grid, ['7', '1', '4', '2', '5', '3'], [true, false]);

  await game.playGame();

  expect(game.isOver()).toEqual(true);
  expect(game.boardGrid()).not.toEqual(grid);
});

test('it shows the initial messages to the players', async () => {
  const grid = ['X', 'X', 'X', '', '', '', '', 'O', 'O'];
  const { game, display, messages } = setup(grid, [], [false]);

  const showFunctionSpy = jest.spyOn(display, 'show').mockImplementation();
  await game.playGame();

  expect(showFunctionSpy).toHaveBeenCalledWith(messages.welcomeMassage());
  expect(showFunctionSpy).toHaveBeenCalledWith(messages.gameMode());
});

class DisplayMock implements Display {
  moves: string[];
  replay: boolean[];
  showWasCalled: boolean;

  constructor(moves: string[], replay: boolean[]) {
    this.moves = moves;
    this.replay = replay;
    this.showWasCalled = false;
  }

  show(): void {
    this.showWasCalled = true;
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

  showMethodWasCalled(): boolean {
    return this.showWasCalled;
  }
}
