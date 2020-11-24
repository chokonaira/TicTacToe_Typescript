import Game from "../Game";
import Board from "../Board";

  test("plays a round", () => {
    let grid = [
      "X", "", "X", 
      "", "", "",
      "", "", ""
    ]
    const board = new Board(grid);
    let spy = jest.spyOn(board, "hasWinner").mockImplementation(() => false);
    const game = new Game(board);

    expect(game.isOver()).toEqual(false);
    expect(spy).toHaveBeenCalledTimes(1);
  });