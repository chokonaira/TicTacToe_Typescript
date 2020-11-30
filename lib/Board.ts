class Board {
  grid: string[];
  constructor(grid: string[] = new Array(9).fill('')) {
    this.grid = grid;
  }

  boardState(): string[] {
    return this.grid;
  }

  makeMove(position: number, symbol: string): string {
    return (this.grid[position] = symbol);
  }

  isPositionTaken(position: number): boolean {
    if (this.grid[position] !== '') {
      return true;
    }
    return false;
  }

  availablePositionCount(): number {
    let counter = 0;
    for (let index = 0; index < this.grid.length; index++) {
      this.grid[index] === '' && counter++;
    }
    return counter;
  }

  hasWinner(): boolean {
    const rows = this.rows();
    const columns = this.columns();
    const diagonals = this.diagonals();
    const lines = rows.concat(columns, diagonals);

    const result = lines.filter((line) =>
      line.every((position) => position !== '' && position === line[0])
    );

    return result.length !== 0;
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
    for (let row = 0; row < this.rows().length; row++) {
      firstDiagonal.push(this.rows()[row][row]);
      secondDiagonal.push(this.rows()[row][this.rows().length - row - 1]);
    }
    return [firstDiagonal, secondDiagonal];
  }
}

export default Board;
