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

  const { game, board } = setup(grid, ['1', '3'], [false]);

  await game.playGame();

  expect(game.isOver()).toEqual(true);
  expect(board.hasWinner()).toEqual(true);
});

test('plays a winning round including an invalid move', async () => {
  const grid = ['X', '', 'X', '', '', '', '', 'O', 'O'];
  const { game, board } = setup(grid, ['1', '^&*', '2'], [false]);

  await game.playGame();

  expect(game.isOver()).toEqual(true);
  expect(board.hasWinner()).toEqual(true);
});

test('plays a draw round', async () => {
  const grid = ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', ''];
  const { game, board } = setup(grid, ['1', '9'], [false]);

  await game.playGame();

  expect(game.isOver()).toEqual(true);
  expect(board.hasWinner()).toEqual(false);
  expect(board.isGameDraw()).toEqual(true);
});

test('plays a game and restarts the game in a win scenerio', async () => {
  const grid = ['X', '', '', 'X', '', '', '', 'O', 'O'];
  const { game } = setup(
    grid,
    ['1', '7', '1', '1', '4', '2', '5', '3'],
    [true, false]
  );

  await game.playGame();

  expect(game.isOver()).toEqual(true);
  expect(game.boardGrid()).not.toEqual(grid);
});

test('it shows the initial messages to the players', async () => {
  const grid = ['', 'X', 'X', '', '', '', '', 'O', 'O'];
  const { game, display, messages } = setup(grid, ['1', '1'], [false]);

  const showFunctionSpy = jest
    .spyOn(display, 'askUserForInput')
    .mockImplementation();
  await game.playGame();

  expect(showFunctionSpy).toHaveBeenCalledWith(messages.gameMode());
});

xtest('it shows the a messages with the winning player', async () => {
  const grid = ['X', 'X', '', '', '', '', '', 'O', 'O'];
  const { game, display, messages } = setup(grid, ['3'], [false]);

  const showFunctionSpy = jest.spyOn(display, 'show').mockImplementation();
  await game.playGame();

  expect(showFunctionSpy).toHaveBeenCalledWith(messages.winningPlayer('X'));
});

xtest('it shows the a messages asking the user to play again if there is a win', async () => {
  const grid = ['X', 'X', '', '', '', '', '', 'O', 'O'];
  const { game, display, messages } = setup(grid, ['3'], [false]);

  const showFunctionSpy = jest
    .spyOn(display, 'askToRestartGame')
    .mockImplementation();
  await game.playGame();

  expect(showFunctionSpy).toHaveBeenCalledWith(messages.playAgain());
});

xtest('it shows the a messages if a players does not restart the game', async () => {
  const grid = ['X', 'X', '', '', '', '', '', 'O', 'O'];
  const { game, display, messages } = setup(grid, ['3'], [false]);

  const showFunctionSpy = jest.spyOn(display, 'show').mockImplementation();
  await game.playGame();

  expect(showFunctionSpy).toHaveBeenCalledWith(messages.thankYou());
});

xtest('it shows the a messages if there is a draw on the board', async () => {
  const grid = ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', ''];
  const { game, display, messages } = setup(grid, ['9'], [false]);

  const showFunctionSpy = jest.spyOn(display, 'show').mockImplementation();
  await game.playGame();

  expect(showFunctionSpy).toHaveBeenCalledWith(messages.drawGame());
});

xtest('it shows the new board state everytime a move is made', async () => {
  const grid = ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', ''];
  const { game, display } = setup(grid, ['9'], [false]);

  const showFunctionSpy = jest.spyOn(display, 'show').mockImplementation();
  await game.playGame();

  expect(showFunctionSpy).toHaveBeenCalledWith(grid);
});

xtest('it shows an invalid move message and the old board state everytime a user makes a wrong move', async () => {
  const grid = ['X', '', 'X', '', '', '', '', 'O', 'O'];
  const { game, display, messages } = setup(grid, ['^&*', '2'], [false]);

  const showFunctionSpy = jest.spyOn(display, 'show').mockImplementation();
  await game.playGame();

  expect(showFunctionSpy).toHaveBeenCalledWith(grid);
  expect(showFunctionSpy).toHaveBeenCalledWith(messages.inValidMove());
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
  askUserForInput(): Promise<number> {
    return Promise.resolve(Number(this.moves.shift()));
  }
  askToRestartGame(): Promise<boolean> {
    return Promise.resolve(this.replay.shift());
  }
}
