class Line {
    firstPosition: number
    secodPosition: number
    thirdPossition: number
  constructor(
    firstPosition: number,
    secodPosition: number,
    thirdPossition: number
  ) {
    this.firstPosition = firstPosition;
    this.secodPosition = secodPosition
    this.thirdPossition = thirdPossition
  }

  hasWinner() {
    return true;
  }
}
export default Line;
