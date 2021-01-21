import './App.css';
import Board from './lib/Board';
import WebBoard from './components/WebBoard'

const board = new Board();

const App = () => {
  return (
    <div className="App">
        <h1>Tic Tac Toe</h1>
        <WebBoard board={board}/>
    </div>
  );
}

export default App;
