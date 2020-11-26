import Board from "../Board";
import Line from "../Line";

test("Board has winner on first row", () => {
  let line = new Line(0,1,2);
  line.hasWinner();
  expect(line.hasWinner()).toEqual(true);
});