import { Board } from 'tictactoe-game-modules';
export interface Player {
  getMove(board: Board): number;
}
