import Console from './Console';
import CommandLineIO from './CommandLineIO';

const console = new Console(new CommandLineIO());
console.startGame();
