import { Board } from 'tictactoe-game-modules';
import { Minimax } from 'tictactoe-game-modules';
import { Player } from '../interfaces/Player';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class UnbeatablePlayer implements Player {
  minimax: Minimax;
  constructor(minimax: Minimax) {
    this.minimax = minimax;
  }

  getMove(board: Board): number {
    return this.minimax.findBestMove(board);
  }
}
export default UnbeatablePlayer;
