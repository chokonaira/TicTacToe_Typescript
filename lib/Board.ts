class Board {
  grid: string[];
  constructor(grid: string[]) {
    this.grid = grid;
  }
  boardState(): string[] {
    return this.grid;
  }

  makeMove(position: number, symbol: string): string {
    return (this.grid[position] = symbol);
  }

  hasWinner(symbol: string): boolean {
    if (
      this.checkRowWin(symbol) ||
      this.checkColumnWin(symbol) ||
      this.checkDiagonalWin(symbol)
    )
      return true;
    return false;
  }
  checkRowWin(symbol: string): boolean {
    if (
      (this.grid[0] && this.grid[1] && this.grid[2] === symbol) ||
      (this.grid[3] && this.grid[4] && this.grid[5] === symbol) ||
      (this.grid[6] && this.grid[7] && this.grid[8] === symbol)
    )
      return true;
  }
  checkColumnWin(symbol: string): boolean {
    if (
      (this.grid[0] && this.grid[3] && this.grid[6] === symbol) ||
      (this.grid[1] && this.grid[4] && this.grid[7] === symbol) ||
      (this.grid[2] && this.grid[5] && this.grid[8] === symbol)
    )
      return true;
  }
  checkDiagonalWin(symbol: string): boolean {
    if (
      (this.grid[0] && this.grid[4] && this.grid[8] === symbol) ||
      (this.grid[2] && this.grid[4] && this.grid[6] === symbol)
    )
      return true;
  }
}

export default Board;
