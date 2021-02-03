import Board from '../Board';
import Mininmax from '../Minimax';
import { Player } from '../interfaces/Player';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class UnbeatablePlayer implements Player {
  minimax: Mininmax;
  constructor(minimax: Mininmax) {
    this.minimax = minimax;
  }

  getMove(board: Board): number {
    return this.minimax.findBestMove(board);
  }
}
export default UnbeatablePlayer;
