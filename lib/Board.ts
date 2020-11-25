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

  isNotEmptyPosition(position: number): boolean {
    if (this.grid[position] !== "") {
      return true;
    }
    return false;
  }

  hasWinner(): boolean {
    if (this.checkRowWin()) return true;
    return false;
  }

  checkRowWin(): boolean {
    if (
      this.rowLine(this.grid[0], this.grid[1], this.grid[2]) ||
      this.rowLine(this.grid[3], this.grid[4], this.grid[5])
    ) {
      return true;
    }
  }

  rowLine(symbol1: string, symbol2: string, symbol3: string): boolean {
    if (
      this.isNotEmptyPosition(symbol1.indexOf(symbol1)) &&
      symbol1 === symbol2 &&
      symbol2 === symbol3
    ) {
      return true;
    }
  }

  checkColumnWin(): boolean {
    if (
      (this.grid[0] && this.grid[3] && this.grid[6]) ||
      (this.grid[1] && this.grid[4] && this.grid[7]) ||
      (this.grid[2] && this.grid[5] && this.grid[8])
    )
      return true;
  }
  checkDiagonalWin(): boolean {
    if (
      (this.grid[0] && this.grid[4] && this.grid[8]) ||
      (this.grid[2] && this.grid[4] && this.grid[6])
    )
      return true;
  }
}

export default Board;
