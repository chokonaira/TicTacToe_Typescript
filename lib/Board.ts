class Board {
  grid: String[];
  constructor(grid: String[]) {
    this.grid = grid;
  }
  boardState() : String[]{
    return this.grid;
  }

  hasWinner(symbol : String): boolean {
    if (this.checkRowWin(symbol)) return true
      return false
  }


  checkRowWin(symbol : String): boolean {
    if (this.grid[0] === symbol && this.grid[1] === symbol && this.grid[2] === symbol) return true
  }

}

export default Board;
