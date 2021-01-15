import { Player } from '../Player';
import Messages from '../Messages';
import { Display } from '../Display';

class HumanPlayer implements Player {
  display: Display;
  messages: Messages;
  constructor(display: Display, messages: Messages) {
    this.display = display;
    this.messages = messages;
  }

  async getMove(): Promise<number> {
    return await this.display.askUserForInput(this.messages.askPosition());
  }
}

export default HumanPlayer;
