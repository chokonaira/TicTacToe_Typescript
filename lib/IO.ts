export interface IO {
  getUserInput(message: string): Promise<string>;
}
