import Board from './Board';

class Minimax {
  currentPlayer: string;
  opponent: string;
  constructor(currentPlayer: string, opponent: string) {
    this.currentPlayer = currentPlayer;
    this.opponent = opponent;
  }

  evaluate(board: Board): number {
    if (board.winningPlayer() === this.currentPlayer) {
      return 10;
    }
    return -10;
  }
}

export default Minimax;
