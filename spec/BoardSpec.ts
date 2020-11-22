import Board from "../lib/Board";

describe("Board", () => {
  it("display welcome message", () => {
    let board = new Board();
    let message = "Welcome to TicTacToe"
    expect(board.welcomeMessage()).toEqual(message);
  });
});