class Board {
  grid: string[];
  constructor(grid: string[]) {
    this.grid = grid;
  }
  boardState(): string[] {
    return this.grid;
  }

  makeMove(position: number, symbol: string): string {
    return (this.grid[position - 1] = symbol);
  }

  isNotEmptyPosition(position: number): boolean {
    if (this.grid[position] !== '') {
      return true;
    }
    return false;
  }

  checkAvailableMove(): number {
    let counter = 0;
    for (let index = 0; index < this.grid.length; index++) {
      this.grid[index] === '' && counter++;
    }
    return counter;
  }

  hasWinner(): boolean {
    if (this.checkForWinner()) return true;
    return false;
  }

  rows(): string[][] {
    const rows = [];
    for (let index = 0; index < this.grid.length; index += 3) {
      rows.push(this.grid.slice(index, index + 3));
    }
    return rows;
  }

  columns(): string[][] {
    const columns = [];

    for (let index = 0; index < this.rows().length; index++) {
      const column = [];

      this.rows().forEach((row) => {
        column.push(row[index]);
      });

      columns.push(column);
    }

    return columns;
  }

  diagonals(): string[][] {
    const firstDiagonal = [];
    const secondDiagonal = [];
    const diagonals = [];
    for (let row = 0; row < this.rows().length; row++) {
      firstDiagonal.push(this.rows()[row][row]);
      secondDiagonal.push(this.rows()[row][this.rows().length - row - 1]);
    }
    diagonals.push(firstDiagonal, secondDiagonal);
    console.log(diagonals, 'diagonals');
    return;
  }

  checkForWinner(): boolean {
    this.diagonals();
    const rows = this.rows();
    const columns = this.columns();
    // const diagonals = this.diagonals();
    const lines = rows.concat(columns);

    const result = lines.filter((line) =>
      line.every((position) => position !== '' && position === line[0])
    );

    return result.length !== 0;
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
