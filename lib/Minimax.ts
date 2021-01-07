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
    } else if (board.winningPlayer() === this.opponent) {
      return -10;
    } else {
      return 0;
    }
  }

  findBestMove(board: Board): number {
    return 1;
  }
}

export default Minimax;
