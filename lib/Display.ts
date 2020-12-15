import Board from './Board';

export interface Display {
  show(message: string | string[]): void;
  constructBoard(board: Board): string[];
  askUserForMove(): Promise<number>;
  askToRestartGame(): Promise<boolean>;
}
