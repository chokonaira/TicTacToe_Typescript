import Board from '../Board';
import RandomChoice from '../RandomChoice';
import { Player } from '../Player';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class BeatablePlayer implements Player {
  board: Board;
  randomChoice: RandomChoice;
  constructor(board: Board, randomChoice: RandomChoice) {
    this.board = board;
    this.randomChoice = randomChoice;
  }

  getMove(): Promise<number> {
    return Promise.resolve(this.randomChoice.findRandomMove(this.board));
  }
}
export default BeatablePlayer;
