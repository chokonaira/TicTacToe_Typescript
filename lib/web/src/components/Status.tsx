import Board from 'tictactoe-board';
import '../App.css';

interface Props {
  board: Board;
}

const GameStatus = (props: Props) => {
  const statusType = () => {
    let status;
    if (props.board.hasWinner()) {
      status = `Congratulations: ${props.board.winningPlayer()} has won! 🎉`;
    } else if (props.board.isGameDraw()) {
      status = `Its a Draw game 😁`;
    } else {
      status = `Next player is: ${props.board.currentMark()}`;
    }
    return status;
  };
  return <div className="status">{statusType()}</div>;
};

export default GameStatus;
