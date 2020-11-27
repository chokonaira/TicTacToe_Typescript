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
    if (this.checkForWinner()||this.checkColumnWin()) return true;
    return false;
  }

  rows(): string[][] {
    let rows = [];
    for (let index = 0; index < this.grid.length; index += 3) {
      rows.push(this.grid.slice(index, index + 3));
    }
    return rows;
  }

  columns():string[][] {
    let columns = []

    for (let index = 0; index < this.rows().length; index++) {
      let column = []

      this.rows().forEach(row => {
        column.push(row[index])
      });

      columns.push(column)
    }
    // console.log(columns, 'columns');
    
    return columns
  }

  checkForWinner(): boolean {
    const rows = this.rows();
    const columns = this.columns();
    const lines = rows.concat(columns);

    const result = lines.filter((line) => 
      line.every((position) => position !== "" && position === line[0])
    );

    return result.length !== 0
  }

  checkColumnWin(): boolean {
    this.columns()
  //   const result = this.rows().filter((column) =>{ 
  //   column.every((position) => position !== "" && position === column[0])
  // });
    return 
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
