import Game from "../Game";
import Board from "../Board";

test("plays a round", () => {
    const board = new Board()
    let spy = jest.spyOn(board, 'hasWinner').mockImplementation(() => false)
    const game = new Game(board);
    expect(game.isOver()).toEqual(false);
    expect(spy).toHaveBeenCalledTimes(1);
})