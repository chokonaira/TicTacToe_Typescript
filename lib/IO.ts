export interface IO {
  getUserInput(): Promise<string>;
  letsPlayAgain(input: string): boolean;
}
