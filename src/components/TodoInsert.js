import React from "react";


const TodoInsert =({setList, setInput, input, todolist})=>{
    
    return( 
        <div className="addlist">
        <input type="text" onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={() => setList([...todolist, input ])}>Submit</button>
        
        </div>
    );
};

export default TodoInsert;