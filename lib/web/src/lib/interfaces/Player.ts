import Board from 'tictactoe-board';

export interface Player {
  getMove(board: Board): number;
}
