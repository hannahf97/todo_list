import React,{useState} from "react";

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
        
        {todolist.map((list, idx) => (<div><span key={idx}>{list}</span> <button onClick={deleteTodo}>x</button></div>))}
        </>
    );
};

export default TodoInsert;