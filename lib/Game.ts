import Board from './Board';

class Game {
  board: Board;

  constructor(board: Board) {
    this.board = board;
  }

  isOver(): boolean {
    return this.board.hasWinner() || this.board.isGameDraw();
  }
}

export default Game;
