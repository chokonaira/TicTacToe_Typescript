import Board from "../Board";

  test("Board has no winner", () => {
    let grid = [
      "X", "", "X", 
      "", "", "",
      "", "", ""
    ]
    let board = new Board(grid);
    expect(board.hasWinner("X")).toEqual(false);
  });

  test("Board has a winner", () => {
    let grid = [
      "X", "X", "X", 
      "", "", "",
      "", "", ""
    ]
    let board = new Board(grid);
    expect(board.hasWinner('X')).toEqual(true);
  });
  
  test('Win on first row', ()=>{
    let grid = [
      "X", "X", "X", 
      "", "", "",
      "", "", ""
    ]
    let board = new Board(grid);
    board.hasWinner('X')
    expect(board.checkRowWin('X')).toEqual(true)
  });

  test('Win on second row', ()=>{
    let grid = [
      "", "", "",
      "X", "X", "X", 
      "", "", ""
    ]
    let board = new Board(grid);
    board.hasWinner('X')
    expect(board.checkRowWin('X')).toEqual(true)
  });

  test('Win on third row', ()=>{
    let grid = [
      "", "", "",
      "", "", "",
      "X", "X", "X" 
    ]
    let board = new Board(grid);
    board.hasWinner('X')
    expect(board.checkRowWin('X')).toEqual(true)
  });
  
  test('check empty board state', ()=>{
    let grid = [
      "", "", "", 
      "", "", "",
      "", "", ""
    ]
    let board = new Board(grid);
    let actual = board.boardState()
    expect(actual).toEqual(grid)
  })

  test('make a move on board position 0', ()=>{
    let grid = [
      "X", "", "", 
      "", "", "",
      "", "", ""
    ]
    let board = new Board(grid);
    board.makeMove(0,'X')
    expect(board.boardState()).toEqual(grid)
  })

  test('make a move on board position 4', ()=>{
    let grid = [
      "", "", "", 
      "", "X", "",
      "", "", ""
    ]
    let board = new Board(grid);
    board.makeMove(4,'X')
    expect(board.boardState()).toEqual(grid)
  })



