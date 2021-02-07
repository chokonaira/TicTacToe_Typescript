import BeatablePlayer from './players/BeatablePlayer';
import UnbeatablePlayer from './players/UnbeatablePlayer';
import Minimax from 'ttt-minimax-typescript';
import RandomChoice from './RandomChoice';
import { Player } from './interfaces/Player';

export interface Mode {
  1: UnbeatablePlayer;
  2: BeatablePlayer;
  [key: number]: UnbeatablePlayer | BeatablePlayer;
}

class GameMode {
  modeType(mode: number): Player {
    const gameModeType: Mode = {
      1: new UnbeatablePlayer(new Minimax('X', 'O')),
      2: new BeatablePlayer(new RandomChoice())
    };
    return gameModeType[mode];
  }
}

export default GameMode;
