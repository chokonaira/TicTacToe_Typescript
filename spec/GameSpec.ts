import Game from "../lib/Game";
import Board from "../lib/Board";

describe("Game", () => {
  it("plays a round", () => {
    // Create a mock object of type Board
    let board = jasmine.createSpyObj<Board>("board")
    let game = new Game(board);

    // Stub the "hasWinner" method on the Board mock object
    spyOn(board, "hasWinner").and.returnalue(false)

    expect(game.isOver()).toEqual(false);
  });
});
