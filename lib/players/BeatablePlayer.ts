import Board from 'tictactoe-board';
import RandomChoice from '../RandomChoice';
import { Player } from '../interfaces/Player';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

class BeatablePlayer implements Player {
  randomChoice: RandomChoice;
  constructor(randomChoice: RandomChoice) {
    this.randomChoice = randomChoice;
  }

  getMove(board: Board): Promise<number> {
    return Promise.resolve(this.randomChoice.findRandomMove(board));
  }
}
export default BeatablePlayer;
