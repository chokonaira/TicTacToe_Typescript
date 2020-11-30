import Board from '../../Board';

class TestHelper {
  board: Board;
  static fillBoard(
    board: Board,
    position: number[],
    symbol: string[]
  ): string[] {
    for (let index = 0; index < position.length; index++) {
      board.makeMove(position[index], symbol[index]);
    }
    return board.boardState();
  }
}

export default TestHelper;
