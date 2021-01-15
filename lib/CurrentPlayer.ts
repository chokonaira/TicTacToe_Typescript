import Board from './Board';
import Minimax from './Minimax';
import RandomPlayer from './RandomPlayer';
import Messages from './Messages';
import { Display } from './Display';

class CurrentPlayer {
  board: Board;
  player: string;
  minimax: Minimax;
  display: Display;
  messages: Messages;
  constructor(
    board: Board,
    player: string,
    minimax: Minimax,
    display: Display,
    messages: Messages
  ) {
    this.board = board;
    this.player = player;
    this.minimax = minimax;
    this.display = display;
    this.messages = messages;
  }
  async playerType(type: string): Promise<void> {
    if (this.player === type)
      if (this.player === 'ComputerPlayer') {
        await this.humanPlayer();
      } else if (this.player === 'RandomPlayer') {
        this.computerPlayer();
      } else {
        this.randomPlayer();
      }
  }

  async humanPlayer(): Promise<number> {
    return await this.display.askUserForInput(this.messages.askPosition());
  }
  computerPlayer(): number {
    return this.minimax.findBestMove(this.board);
  }
  randomPlayer(): number {
    const randomPlayer = new RandomPlayer();
    return randomPlayer.findRandomMove(this.board);
  }
}
