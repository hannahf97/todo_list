import React,{useState} from "react";
import TodoList from "./TodoList";

const TodoInsert =()=>{
    const [input, setInput] = useState('');
    const [todolist, setList] = useState([]);
    const handleChange = (e) =>{
        setInput(e.target.value);
    }

    const onClick = (e) =>{
        console.log(input);
        setList([...todolist, input]);
    }

    const deleteTodo = (e) =>{
        let parentElement = e.target.parentElement;
        console.log(parentElement);
        parentElement.style.textDecorationLine = "line-through";

    }

    return( 
        <>
        <input type="text" onChange={handleChange}></input>
        <button onClick={onClick}>Add</button>
        <TodoList todolist={todolist} deleteTodo={deleteTodo}></TodoList>
        </>
    );
};

export default TodoInsert;