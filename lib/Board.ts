class Board {
  grid: String[];
  constructor(grid: String[]) {
    this.grid = grid;
  }

  checkRowWin(): boolean {
    if (this.grid[0] === this.grid[1] && this.grid[1] === this.grid[2]) return true
  }

  hasWinner(): boolean {
    if (this.checkRowWin()) return true
      return false
  }
}

export default Board;
