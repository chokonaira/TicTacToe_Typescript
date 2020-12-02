// import prompts from 'prompts';
import Board from './Board';
import Messages from './Messages';
import Game from './Game';

class Console {
  board: Board;

  // printBoard(): string {
  //   var board = {
  //     1: '1',
  //     2: '2',
  //     3: '3',
  //     4: '4',
  //     5: '5',
  //     6: '6',
  //     7: '7',
  //     8: '8',
  //     9: '9'
  // };
  //   console.log('\n' +
  //       ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
  //       ' ---------\n' +
  //       ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
  //       ' ---------\n' +
  //       ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');
  //   return;
  // }

  printBoard(board: Board): string {
    let result = '';
    let counter = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        console.log(`-|${board.grid}|-`);
        result += `${board.grid[counter]}`;
        counter++;
      }
    }
    return result;
  }

  toggleTurns(): string {
    const board = new Board();

    if (board.availablePositionCount() % 2 === 0) {
      return 'X';
    }
    return 'O';
  }

  startGame(): string[] {
    const board = new Board();
    const messages = new Messages();
    const game = new Game(board);

    console.log(messages.welcomeMassage());
    console.log(messages.gameMode());

    this.printBoard(board);

    while (!game.isOver()) {
      const player = this.toggleTurns();

      // first move
      board.makeMove(0, player);
      this.printBoard(board);

      // second move
      board.makeMove(1, player);
      this.printBoard(board);

      // third move
      board.makeMove(2, player);
      this.printBoard(board);

      // forth move
      board.makeMove(3, player);
      this.printBoard(board);

      // fifth move
      board.makeMove(4, player);
      this.printBoard(board);

      // sixth move
      board.makeMove(4, player);
      this.printBoard(board);

      // seventh move
      board.makeMove(4, player);
      this.printBoard(board);

      if (game.isOver()) {
        break;
      }

      console.log(`Player ${this.toggleTurns()} Won`);
    }
    return;
  }
}
export default Console;
