import Game from "../lib/Game";
import Board from "../lib/Board";
jest.mock("../lib/Board");

describe("Game", () => {
  it("plays a round", () => {
    // Create a mock object of type Board
    const board = new Board()
    let spy = jest.spyOn(board, 'hasWinner')
    const game = new Game(board);
    expect(spy).toHaveBeenCalledTimes(1);

    // Stub the "hasWinner" method on the Board mock object
    // spyOn(board, "hasWinner").and.returnalue(false)

    expect(game.isOver()).toEqual(false);
  });
});
