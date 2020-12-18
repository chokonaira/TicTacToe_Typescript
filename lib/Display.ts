import Board from './Board';

export interface Display {
  show(message: string | string[]): void;
  constructBoard(board: Board): string[];
  askUserForMove(message: string): Promise<number>;
  askToRestartGame(message: string): Promise<boolean>;
}
