export interface IO {
  getUserInput(): Promise<string>;
  wishToPlayAgain(input: string): boolean;
}
