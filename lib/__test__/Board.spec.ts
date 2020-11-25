import Board from "../Board";

  xtest("Board has no winner", () => {
    let grid = [
      "X", "", "X", 
      "", "", "",
      "", "", ""
    ]
    let board = new Board(grid);
    expect(board.hasWinner()).toEqual(false);
  });

  xtest("Board has a winner for a row scenerio", () => {
    let grid = [
      "X", "X", "X", 
      "", "", "",
      "", "", ""
    ]
    let board = new Board(grid);
    expect(board.hasWinner()).toEqual(true);
  });

  xtest("Board has a winner for a column scenerio", () => {
    let grid = [
      "X", "", "", 
      "X", "", "",
      "X", "", ""
    ]
    let board = new Board(grid);
    expect(board.hasWinner()).toEqual(true);
  });

  xtest("Board has a winner for a diagonal scenerio", () => {
    let grid = [
      "X", "", "", 
      "", "X", "",
      "", "", "X"
    ]
    let board = new Board(grid);
    expect(board.hasWinner()).toEqual(true);
  });

  xtest('Win on row scenerios', ()=>{
    let grid = [ "X", "X", "X" ]
    let board = new Board(grid);
    board.hasWinner()
    expect(board.checkRowWin()).toEqual(true)
  });
  
  test('Win on first row', ()=>{
    let grid = [ "X", "X", "X",
                  "", "", "",
                  "", "", "" ]
    let board = new Board(grid);
    board.hasWinner()
    expect(board.rowLine('X', 'X', 'X')).toEqual(true)
  });

  test('Win on second row', ()=>{
    let grid = [
      "", "", "",
      "X", "X", "X", 
      "", "", ""
    ]
    let board = new Board(grid);
    expect(board.rowLine('X', 'X', 'X')).toEqual(true)
  });

  xtest('Win on third row', ()=>{
    let grid = [
      "", "", "",
      "", "", "",
      "X", "X", "X" 
    ]
    let board = new Board(grid);
    board.hasWinner()
    expect(board.checkRowWin()).toEqual(true)
  });
  
  xtest('check empty board state', ()=>{
    let grid = [
      "", "", "", 
      "", "", "",
      "", "", ""
    ]
    let board = new Board(grid);
    let actual = board.boardState()
    expect(actual).toEqual(grid)
  })

  xtest('make a move on board position 0', ()=>{
    let grid = [
      "X", "", "", 
      "", "", "",
      "", "", ""
    ]
    let board = new Board(grid);
    board.makeMove(0,'X')
    expect(board.boardState()).toEqual(grid)
  })

  xtest('make a move on board position 4', ()=>{
    let grid = [
      "", "", "", 
      "", "X", "",
      "", "", ""
    ]
    let board = new Board(grid);
    board.makeMove(4,'X')
    expect(board.boardState()).toEqual(grid)
  })
  xtest('Win on first column', ()=>{
    let grid = [
      "X", "", "", 
      "X", "", "",
      "", "", ""
    ]
    let board = new Board(grid);
    board.makeMove(6,'X')
    board.hasWinner()
    expect(board.checkColumnWin()).toEqual(true)
  });

  xtest('Win on second column', ()=>{
    let grid = [
      "", "X", "", 
      "", "", "",
      "", "X", ""
    ]
    let board = new Board(grid);
    board.makeMove(4,'X')
    board.hasWinner()
    expect(board.checkColumnWin()).toEqual(true)
  });

  xtest('Win on third column', ()=>{
    let grid = [
      "", "", "", 
      "", "", "X",
      "", "", "X"
    ]
    let board = new Board(grid);
    board.makeMove(2,'X')
    board.hasWinner()
    expect(board.checkColumnWin()).toEqual(true)
  });

  xtest('Win on first diagonal', ()=>{
    let grid = [
      "X", "", "", 
      "", "X", "",
      "", "", ""
    ]
    let board = new Board(grid);
    board.makeMove(8,'X')
    board.hasWinner()
    expect(board.checkDiagonalWin()).toEqual(true)
  });

  xtest('Win on second diagonal', ()=>{
    let grid = [
      "", "", "", 
      "", "X", "",
      "X", "", ""
    ]
    let board = new Board(grid);
    board.makeMove(2,'X')
    board.hasWinner()
    expect(board.checkDiagonalWin()).toEqual(true)
  });

  xtest('check that position 4 is not empty', ()=>{
    let grid = [
      "", "", "", 
      "", "X", "",
      "X", "", ""
    ]
    let board = new Board(grid);
    expect(board.isNotEmptyPosition(4)).toEqual(true)
  });

  xtest('check that position 1 is empty', ()=>{
    let grid = [
      "", "", "", 
      "", "X", "",
      "X", "", ""
    ]
    let board = new Board(grid);
    expect(board.isNotEmptyPosition(1)).toEqual(false)
  });

  xtest('check that position 3 is not empty', ()=>{
    let grid = [
      "", "", "", 
      "X", "X", "",
      "X", "", ""
    ]
    let board = new Board(grid);
    expect(board.isNotEmptyPosition(3)).toEqual(true)
  });

  xtest('check that position 0 is not empty', ()=>{
    let grid = [
      "X", "", "", 
      "", "X", "",
      "X", "", ""
    ]
    let board = new Board(grid);
    expect(board.isNotEmptyPosition(0)).toEqual(true)
  });

