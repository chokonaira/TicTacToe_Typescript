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

  miniMax(board: Board, depth: number, isMax: boolean): number {
    const score = this.evaluate(board);

    if (score == 10) return score;

    if (score == -10) return score;

    if (board.isGameDraw()) return 0;

    if (isMax) {
      let bestValue = -1000;
      for (let position = 1; position <= board.grid.length; position++) {
        if (!board.isPositionTaken(position)) {
          board.makeMove(position, this.currentPlayer);
          bestValue = Math.max(
            bestValue,
            this.miniMax(board, depth + 1, false)
          );
          board.makeMove(position, '');
        }
      }
      return bestValue;
    } else {
      let bestValue = 1000;
      for (let position = 1; position <= board.grid.length; position++) {
        if (!board.isPositionTaken(position)) {
          board.makeMove(position, this.opponent);
          bestValue = Math.min(bestValue, this.miniMax(board, depth + 1, true));
          board.makeMove(position, '');
        }
      }
      return bestValue;
    }
  }

  findBestMove(board: Board): number {
    let bestValue = -1000;
    let bestMove = null;
    for (let position = 1; position <= board.grid.length; position++) {
      if (!board.isPositionTaken(position)) {
        board.makeMove(position, this.currentPlayer);
        const moveValue = this.miniMax(board, 0, false);
        board.makeMove(position, '');

        if (moveValue > bestValue) {
          bestMove = position;
          bestValue = moveValue;
        }
      }
    }
    return bestMove;
  }
}

export default Minimax;
