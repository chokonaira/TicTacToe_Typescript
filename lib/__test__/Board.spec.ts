import Board from "../Board";

  test("Board has no winner", () => {
    let grid = [
      "X", "-", "X", 
      "-", "-", "-",
      "-", "-", "-"
    ]
    let board = new Board(grid);
    expect(board.hasWinner()).toEqual(false);
  });

  test("Board has a winner", () => {
    let grid = [
      "X", "X", "X", 
      "-", "-", "-",
      "-", "-", "-"
    ]
    let board = new Board(grid);
    expect(board.hasWinner()).toEqual(true);
  });
  
  test('Win on first row', ()=>{
    let grid = [
      "X", "X", "X", 
      "-", "-", "-",
      "-", "-", "-"
    ]
    let board = new Board(grid);
    board.hasWinner()
    expect(board.checkRowWin()).toEqual(true)
  });
  

