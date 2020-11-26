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

  rows(): string[][] {
    let rows = [];
    for (let index = 0; index < this.grid.length; index += 3) {
      rows.push(this.grid.slice(index, index + 3));
    }
    return rows;
  }

  checkRowWin(): boolean {
    const result = this.rows().filter((row) =>
      row.every((position) => position !== "" && position === row[0])
    );
    return (result.length && result[0].length !== 0) ? true : false 
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
