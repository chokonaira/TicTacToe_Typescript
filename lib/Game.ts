import Board from './Board';

class Game{
  board : Board
  constructor(board : Board){
      this.board = board
  }
  isOver(){
    return false
  }

}

export default Game;