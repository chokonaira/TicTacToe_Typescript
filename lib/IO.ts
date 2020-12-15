export interface IO {
  getUserInput(message: string): Promise<string>;
  stringLogger(string: string): string;
  arrayLogger(array: string[]): string[];
}
