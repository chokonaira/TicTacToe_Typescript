import Board from './Board';

class Minimax {
  currentPlayer: string;
  opponent: string;
  constructor(currentPlayer: string, opponent: string) {
    this.currentPlayer = currentPlayer;
    this.opponent = opponent;
  }

  evaluate(board: Board, depth = 0): number {
    if (board.winningPlayer() === this.currentPlayer) {
      return 10 - depth;
    } else if (board.winningPlayer() === this.opponent) {
      return depth - 10;
    } else {
      return 0;
    }
  }

  miniMax(board: Board, depth: number, isMax: boolean): number {
    const score = this.evaluate(board, depth);
    if (score != 0) return score;
    if (board.isGameDraw()) return 0;

    if (isMax) {
      let bestValue = -1000;
      board.availablePositions().forEach((position) => {
        const defaultPositionState = board.defaultPositionState(position);
        board.makeMove(position, this.currentPlayer);
        bestValue = Math.max(bestValue, this.miniMax(board, depth + 1, !isMax));
        board.makeMove(position, defaultPositionState);
      });
      return bestValue;
    } else {
      let bestValue = 1000;
      board.availablePositions().forEach((position) => {
        const defaultPositionState = board.defaultPositionState(position);
        board.makeMove(position, this.opponent);
        bestValue = Math.min(bestValue, this.miniMax(board, depth + 1, isMax));
        board.makeMove(position, defaultPositionState);
      });
      return bestValue;
    }
  }

  findBestMove(board: Board): number {
    let bestValue = -1000;
    let bestMove = null;
    board.availablePositions().forEach((position) => {
      const defaultPositionState = board.defaultPositionState(position);
      board.makeMove(position, this.currentPlayer);
      const moveValue = this.miniMax(board, 0, false);
      board.makeMove(position, defaultPositionState);

      if (moveValue > bestValue) {
        bestMove = position;
        bestValue = moveValue;
      }
    });
    return bestMove;
  }
}

export default Minimax;
