import Board from './Board';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class RandomPlayer {
  findRandomMove(board: Board): number {
    const randomMove = board.availablePositions()[
      Math.floor(Math.random() * board.availablePositions().length)
    ];
    return randomMove;
  }
}

export default RandomPlayer;
