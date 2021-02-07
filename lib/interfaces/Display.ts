import Board from 'tictactoe-board';

export interface Display {
  show(message: string | string[]): void;
  constructBoard(board: Board): string[];
  askUserForInput(message: string): Promise<number>;
  askToRestartGame(message: string): Promise<boolean>;
}
