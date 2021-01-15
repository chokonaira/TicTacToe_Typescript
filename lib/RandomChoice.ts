import Board from './Board';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class RandomChoice {
  findRandomMove(board: Board): number {
    const randomMove = board.availablePositions()[
      Math.floor(Math.random() * board.availablePositions().length)
    ];
    if (randomMove === undefined) {
      return -1;
    } else {
      return randomMove;
    }
  }
}

export default RandomChoice;
