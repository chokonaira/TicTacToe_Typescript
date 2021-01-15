import Board from '../Board';
import Mininmax from '../Minimax';
import { Player } from '../interfaces/Player';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class UnbeatablePlayer implements Player {
  board: Board;
  minimax: Mininmax;
  constructor(board: Board, minimax: Mininmax) {
    this.board = board;
    this.minimax = minimax;
  }

  getMove(): Promise<number> {
    return Promise.resolve(this.minimax.findBestMove(this.board));
  }
}
export default UnbeatablePlayer;
