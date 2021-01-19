import HumanPlayer from './players/HumanPlayer';
import BeatablePlayer from './players/BeatablePlayer';
import UnbeatablePlayer from './players/UnbeatablePlayer';
import Minimax from './Minimax';
import RandomChoice from './RandomChoice';
import { Player } from './interfaces/Player';
import Board from './Board';
import Messages from './Messages';
import { Display } from './interfaces/Display';

class GameMode {
  board: Board;
  display: Display;
  messages: Messages;
  constructor(board: Board, display: Display, messages: Messages) {
    this.board = board;
    this.display = display;
    this.messages = messages;
  }

  modeType(mode: number): Player[] {
    const gameModeType = {
      1: [
        new HumanPlayer(this.display, this.messages),
        new HumanPlayer(this.display, this.messages)
      ],
      2: [
        new UnbeatablePlayer(new Minimax('X', 'O')),
        new HumanPlayer(this.display, this.messages)
      ],
      3: [
        new BeatablePlayer(new RandomChoice()),
        new HumanPlayer(this.display, this.messages)
      ]
    };
    return gameModeType[mode];
  }
}

export default GameMode;
