class Messages {
  welcomeMassage(): string {
    return 'Welcome to Tic Tac Toe';
  }

  gameMode(): string {
    return 'Play now Human Vs. Human';
  }

  askPosition(): string {
    return 'What position do you want to play?';
  }

  inValidMove(): string {
    return 'Invalid move, play again';
  }

  winningPlayer(currentPlayer: string): string {
    return `Player ${currentPlayer} Won`;
  }

  drawGame(): string {
    return 'Its a Draw';
  }

  thankYou(): string {
    return 'Thank you for playing';
  }

  playAgain(): string {
    return 'Play again, Y or N?';
  }

  choosePosition(): string {
    return 'What position do you want to play?';
  }
}

export default Messages;
