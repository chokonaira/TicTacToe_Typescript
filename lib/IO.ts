export interface IO {
  getUserInput(message: string): Promise<string>;
  log(string: string | string[]): void;
}
