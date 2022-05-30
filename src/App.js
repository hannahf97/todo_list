import logo from './logo.svg';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import React, {useState} from 'react';

function App() {
  const [input, setInput] = useState('');
    const [todolist, setList] = useState([]);
    
   

  return (
    <div className="App">
      <header className="App-header">
        <h2> Todo list</h2>
     
      
      <TodoInsert setList={setList} setInput={setInput} input={input} todolist={todolist}></TodoInsert>
      <TodoList todolist={todolist} ></TodoList>
      </header>
        
     
    </div>
  );
}

export default App;
