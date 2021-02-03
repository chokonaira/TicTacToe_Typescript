import Board from './Board';
import { Player } from './interfaces/Player';
// import GameMode from './GameMode';
// import BeatablePlayer from './players/BeatablePlayer';
// import UnbeatablePlayer from './players/UnbeatablePlayer';

class Game {
  board: Board;
  currentMode: Player;

  constructor(board: Board, currentMode: Player) {
    this.board = board;
    this.currentMode = currentMode;
  }

  async playGame(): Promise<string[]> {
    console.log('called')    
    return this.board.grid;
  }


  isModeValid(input: number): boolean {
    const validGameMode = [1, 2, 3];
    return validGameMode.includes(input);
  }

  isOver(): boolean {
    return this.board.hasWinner() || this.board.isGameDraw();
  }

  boardGrid(): string[] {
    const board = new Board();
    return board.grid;
  }

  gameHasWinner(): boolean {
    return this.board.hasWinner();
  }

  gameHasDraw(): boolean {
    return this.board.isGameDraw();
  }
}

export default Game;