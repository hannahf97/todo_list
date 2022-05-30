import logo from './logo.svg';
import './App.css';
import TodoInsert from './components/TodoInsert';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2> Todo list</h2>
        <TodoInsert></TodoInsert>
      </header>
    </div>
  );
}

export default App;
