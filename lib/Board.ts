class Board {
  grid: String[];
  constructor(grid: String[]) {
    this.grid = grid;
  }
  boardState() : String[]{
    return this.grid;
  }

  makeMove(position : number, symbol : string) : String{
    return this.grid[position] = symbol;
  }

  hasWinner(symbol : string): Boolean {
    if (this.checkRowWin(symbol)) return true
      return false
  }
  checkRowWin(symbol : string): Boolean {
    if (this.grid[0] === symbol && this.grid[1] === symbol && this.grid[2] === symbol) return true
  }

}

export default Board;
