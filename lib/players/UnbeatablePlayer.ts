import { Minimax } from 'tictactoe-game-modules';
import { Board } from 'tictactoe-game-modules';
import { Player } from '../interfaces/Player';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class UnbeatablePlayer implements Player {
  minimax: Minimax;
  constructor(minimax: Minimax) {
    this.minimax = minimax;
  }

  getMove(board: Board): Promise<number> {
    return Promise.resolve(this.minimax.findBestMove(board));
  }
}
export default UnbeatablePlayer;
